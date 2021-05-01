import { Box, makeStyles, TablePagination } from "@material-ui/core";
import { amber, green, lightGreen } from "@material-ui/core/colors";
import red from "@material-ui/core/colors/red";
import Typography from "@material-ui/core/Typography";
import AddBox from "@material-ui/icons/AddBox";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
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
import PrintTwoToneIcon from '@material-ui/icons/PrintTwoTone';
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import MaterialTable from "material-table";
import React, { forwardRef } from "react";
import { useHistory } from "react-router-dom";
import diagnologo from "../../../assets/diagnobot/diagnologo.svg";
import doctor from "../../../assets/doctor.svg";
import CONSULTATION from "../../../assets/plans_choices/consultation.svg";
import oneCondition from "../../../assets/plans_choices/one_condition.svg";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import {
  admin_delete_submission,
  get_submission_page
} from "../../context/submission/SubmissionsActions";
import { useSubmissions } from "../../context/submission/SubmissionsContext";
import DetailViewItem from "../submissions/table/DetailViewItem";
import ConfirmAssignmentDialog from "./ConfirmAssignmentDialog";

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
  greenText: {
    color: green[500],
  },
  docImg: {
    height: "32px",
    width: "32px",
    position: "absolute",
    transform: "translateX(100%) translateY(100%)",
  },
}));
export default function AdminsSubmissionsTable({ setLoading }) {
  const [submissions, dispatch] = useSubmissions();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [submissionToAssign, setSubmissionToAssign] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const { open } = useAlertSnackbarContext();

  const handleClose = (value) => {
    setOpenDialog(false);
  };
  const [columns, setColumns] = React.useState([
    {
      title: "Image",
      field: "image",
      editable: "never",
      render: (rowData) => (
        <>
          {rowData.fullData.owner.account_type.toLowerCase() === "doctor" && (
            <img className={classes.docImg} src={doctor} alt="doctor" />
          )}
          <img
            className={classes.image}
            src={
              rowData.type === "LIMITED_EVALUATION"
                ? oneCondition
                : rowData.type === "DIAGNOBOT"
                ? diagnologo
                : rowData.type === "CONSULTATION"
                ? CONSULTATION
                : oneCondition            }
            alt="submission_type"
          />
        </>
      ),
    },
    {
      title: "Assigned to",

      field: "assign",
      render: (rowData) => {
        if (rowData.assign.toLowerCase() === "no one") {
          return (
            <Typography>
              <Box>{rowData.assign}</Box>
            </Typography>
          );
        } else {
          return (
            <Typography className={classes.greenText}>
              <Box fontWeight="600">{rowData.assign}</Box>
            </Typography>
          );
        }
      },
    },
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
      assign: data.verifier
        ? data.verifier.first_name + " " + data.verifier.last_name
        : "No one",
      type: data.type,
      creation_date: data.creation_date,
      status: data.status,
      fullData: data,
    }))
  );

  let history = useHistory();
  const classes = useStyles();
  const handleClickReport = (data) => {
     if (data.fullData.verifier) {
      history.push({
        pathname: "/pdfreport",
        state: data.fullData,
      });
    } else {
      open("error", "You need to assign it to yourself to write a report");
    }
  };

  const handleClickAssign = (data) => {
    setSubmissionToAssign(data.fullData.id);
    setOpenDialog(true);
  };
  const handleDelete = async (oldData) => {
    admin_delete_submission(oldData.fullData.id).then((res) => {
      if (res.status === 204) {
        const dataCopy = [...data];
        const index = oldData.tableData.id;
        dataCopy.splice(index, 1);
        setData(dataCopy);
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
                  assign: data.verifier
                    ? data.verifier.first_name + " " + data.verifier.last_name
                    : "No one",
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
                  assign: data.verifier
                    ? data.verifier.first_name + " " + data.verifier.last_name
                    : "No one",
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
      <ConfirmAssignmentDialog
        submissionId={submissionToAssign}
        handleClose={handleClose}
        openDialog={openDialog}
        setLoading={setLoading}
      />
      <MaterialTable
        icons={tableIcons}
        title="All users submissions"
        columns={columns}
        data={data}
        actions={[
          (rowData) => ({
            icon: PrintTwoToneIcon,
            tooltip: "Go to report",
            onClick: () => handleClickReport(rowData),
          }),
          (rowData) => ({
            icon: AddCircleTwoToneIcon,
            tooltip: "Assign to me",
            onClick: () => handleClickAssign(rowData),
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
