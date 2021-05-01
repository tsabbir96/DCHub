import { Box, TablePagination } from "@material-ui/core";
import { amber, lightGreen } from "@material-ui/core/colors";
import red from "@material-ui/core/colors/red";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import PrintTwoToneIcon from "@material-ui/icons/PrintTwoTone";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import { useHistory } from "react-router-dom";
import diagnologo from "../../../../assets/diagnobot/diagnologo.svg";
import CONSULTATION from "../../../../assets/plans_choices/consultation.svg";
import oneCondition from "../../../../assets/plans_choices/one_condition.svg";
import { create_activity_history } from "../../../context/activity/ActivityActions";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import {
  delete_submission,
  get_submission_page,
  update_submission
} from "../../../context/submission/SubmissionsActions";
import { useSubmissions } from "../../../context/submission/SubmissionsContext";
import DetailViewItem from "./DetailViewItem";
import ReportNotReadyDialog from "./ReportNotReadyDialog";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),

  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  DescriptionTwoToneIcon: forwardRef((props, ref) => (
    <DescriptionTwoToneIcon {...props} ref={ref} />
  )),
  VisibilityTwoToneIcon: forwardRef((props, ref) => (
    <VisibilityTwoToneIcon {...props} ref={ref} />
  )),
  MoreVertTwoToneIcon: forwardRef((props, ref) => (
    <MoreVertTwoToneIcon {...props} ref={ref} />
  )),
};
const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 275,
    // width:'100%'
    marginTop: theme.spacing(2),
  },
  image: {
    height: "60px",
    width: "60px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  success: {
    backgroundColor: lightGreen["A700"],
    color: "white",
    borderRadius: "6px",
    margin: theme.spacing(0, 4),
  },
  pending: {
    backgroundColor: amber["700"],
    color: "white",
    borderRadius: "6px",
    margin: theme.spacing(0, 4),
  },
  error: {
    backgroundColor: red["500"],
    color: "white",
    borderRadius: "6px",
    margin: theme.spacing(0, 4),
  },
}));

function SubmissionsTable() {
  const [submissions, dispatch] = useSubmissions();

  const [columns, setColumns] = React.useState([
    {
      title: "Image",
      field: "image",
      editable: "never",
      render: (rowData) => (
        <img
          className={classes.image}
          src={
            rowData.type === "LIMITED_EVALUATION"
              ? oneCondition
              : rowData.type === "DIAGNOBOT"
              ? diagnologo
              : rowData.type === "CONSULTATION"
              ? CONSULTATION
              : oneCondition
          }
          alt="submission_type"
        />
      ),
    },
    { title: "Name", field: "name" },
    { title: "Type", field: "type", editable: "never" },
    {
      title: "Creation date",
      field: "creation_date",
      editable: "never",
      render: (rowData) => {
        var mdate = new Date(rowData.creation_date);

        return <Typography>{mdate.toLocaleString()}</Typography>;
      },
    },
    {
      title: "Status",
      editable: "never",
      field: "status",
      render: (rowData) => {
        return rowData.status.toLowerCase() === "pending" ? (
          <Typography className={classes.pending}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {rowData.status}
            </Box>
          </Typography>
        ) : rowData.status.toLowerCase() === "ready" ? (
          <Typography className={classes.success}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {rowData.status}
            </Box>
          </Typography>
        ) : rowData.status.toLowerCase() === "missing_xray" ? (
          <Typography className={classes.error}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              Missing xray
            </Box>
          </Typography>
        ) : (
          <Typography className={classes.error}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {rowData.status}
            </Box>
          </Typography>
        );
      },
    },
  ]);

  const [data, setData] = React.useState(
    submissions.submissions.results.map((data) => ({
      image: data.type,
      name: data.name,
      type: data.type,
      creation_date: data.creation_date,
      status: data.status,
      fullData: data,
    }))
  );
  const [openDialog, setOpenDialog] = React.useState(false);

  let history = useHistory();
  const classes = useStyles();
  const [profileData] = useProfileData();
  const [currentPage, setCurrentPage] = React.useState(0);
  const handleClose = (value) => {
    setOpenDialog(false);
  };
  const handleClickReport = (data) => {
    if (data.status.toLowerCase() === "pending") {
      setOpenDialog(true);
    } else {
      history.push({
        pathname: "/pdfreport",
        state: data.fullData,
      });
    }
  };
  const handleDelete = async (oldData) => {
    delete_submission(oldData.fullData.id).then((res) => {
      if (res.status === 204) {
        create_activity_history(
          "Deleted a submission",
          profileData.profile.user.id,
          "DELETE"
        ).then((res02) => {
          if (res02.status === 201) {
            const dataCopy = [...data];
            const index = oldData.tableData.id;
            dataCopy.splice(index, 1);
            setData(dataCopy);
          }
        });
      }
    });
  };
  const handleUpdate = async (newData, oldData) => {
    await update_submission(oldData.fullData.id, newData.name).then((res) => {
      if (res.status === 200) {
        create_activity_history(
          "Updated a submission",
          profileData.profile.user.id,
          "UPDATE"
        ).then((res02) => {
          if (res02.status === 201) {
            const datacopy = [...data];
            const index = oldData.tableData.id;
            datacopy[index] = newData;
            setData(datacopy);
          }
        });
      }
    });
  };
  const handleChangePage = (page) => {
    if (currentPage < page) {
      if (submissions.submissions.next) {
        get_submission_page(dispatch, submissions.submissions.next).then(
          (res) => {
            if (res.status === 200) {
              setCurrentPage(currentPage + 1);
              setData(
                res.data.results.map((data) => ({
                  image: data.type,
                  name: data.name,
                  type: data.type,
                  creation_date: data.creation_date,
                  status: data.status,
                  fullData: data,
                }))
              );
            }
          }
        );
      }
    } else if (currentPage > page) {
      if (submissions.submissions.previous) {
        get_submission_page(dispatch, submissions.submissions.previous).then(
          (res) => {
            if (res.status === 200) {
              setCurrentPage(currentPage - 1);
              setData(
                res.data.results.map((data) => ({
                  image: data.type,
                  name: data.name,
                  type: data.type,
                  creation_date: data.creation_date,
                  status: data.status,
                  fullData: data,
                }))
              );
            }
          }
        );
      }
    }
  };
  return (
    <div className={classes.root}>
      <ReportNotReadyDialog handleClose={handleClose} openDialog={openDialog} />
      <MaterialTable
        icons={tableIcons}
        title="Your reports"
        columns={columns}
        data={data}
        actions={[
          (rowData) => ({
            icon: PrintTwoToneIcon,
            tooltip: "Go to report",
            onClick: () => handleClickReport(rowData),
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
          columnsButton: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50], // rows selection options
        }}
        detailPanel={(submissionRow) => {
          return <DetailViewItem fullData={submissionRow.fullData} />;
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        editable={{
          onRowUpdate: (newData, oldData) => handleUpdate(newData, oldData),

          onRowDelete: (oldData) => handleDelete(oldData),
        }}
        components={{
          Pagination: (props) => (
            <TablePagination
              {...props}
              rowsPerPageOptions={[10, 20, 30]}
              rowsPerPage={10}
              count={submissions.submissions.count}
         
              page={currentPage}
              onChangePage={(e, page) => handleChangePage(page)}
              onChangeRowsPerPage={(event) => {
                props.onChangeRowsPerPage(event);
                this.handleChangeRowPerPage(event.target.value);
              }}
            />
          ),
        }}
      />
    </div>
  );
}

export default SubmissionsTable;
