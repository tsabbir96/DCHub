import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { load_my_submissions } from "../../context/submission/SubmissionsActions";
import { useSubmissions } from "../../context/submission/SubmissionsContext";
import NoFilesInfo from "./NoFilesInfo";
import SubmissionsTable from "./table/SubmissionsTable";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));
export default function SubmissionsList() {
  const [loading, setLoading] = React.useState(true);
  const [submissions, dispatch] = useSubmissions();
  React.useEffect(() => {
    load_my_submissions(dispatch).then((res) => {
      if (res.status === 200) {
        setLoading(false);
      }
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NoFilesInfo />
      {loading ? <h5>loading</h5> : <SubmissionsTable />}
    </div>
  );
}
