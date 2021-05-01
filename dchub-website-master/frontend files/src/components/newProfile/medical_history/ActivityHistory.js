import { lightGreen, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PostAddIcon from "@material-ui/icons/PostAdd";
import React from "react";
import { load_my_activity } from "../../context/activity/ActivityActions";
import HeaderLog from "./HeaderLog";
import HistoryLogItem from "./HistoryLogItem";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    // width: '80%',
    display: "flex",
    alignItems: "center",
  },
  verticalDiv: {
    borderLeft: "1px solid lightgray",
    marginLeft: "20px",
    height: "20px",
  },
  header: {
    margin: theme.spacing(3, 0),
  },
  iconInfo: {
    width: "40px",
    height: "40px",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: theme.palette.info.main,
    borderRadius: "50%",
  },
  iconCreate: {
    width: "40px",
    height: "40px",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: lightGreen[400],
    borderRadius: "50%",
  },
  iconarchive: {
    width: "40px",
    height: "40px",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: red[400],
    borderRadius: "50%",
  },
}));

const MedicalHistory = () => {
  const [rows, setRows] = React.useState(null);

  const classes = useStyles();
   React.useEffect(() => {
    load_my_activity().then((data) => {
      if (data.status === 200) {
      
        setRows(data.data);
      }
    });
  }, []);
  if (rows === null) return <h1>Loading...</h1>;
  if (rows === false) return <h1>Error </h1>;

  return (
    <div>
      <HeaderLog textTitle='My activity history' />
      {rows.map((item) => (
        <>
          <HistoryLogItem
            desc={item.title}
            date={new Date(item.creation_date).toLocaleString()}
            item={
              item.type.toLowerCase() === "create" ? (
                <PostAddIcon className={classes.iconInfo} />
              ) : item.type.toLowerCase() === "update" ? (
                <CreateTwoToneIcon className={classes.iconCreate} />
              ) : (
                <HighlightOffIcon className={classes.iconarchive} />
              )
            }
          />
          <div className={classes.verticalDiv} />
        </>
      ))}
 
    </div>
  );
};
export default MedicalHistory;
