import { makeStyles } from "@material-ui/core";
import React from "react";
import { load_all_submissions } from "../../context/submission/SubmissionsActions";
import { useSubmissions } from "../../context/submission/SubmissionsContext";
import AdminsSubmissionsTable from "./AdminsSubmissionsTable";
const useStyles = makeStyles((theme) => ({
  root: {
    // marginLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));
export default function AdminsPanel() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);

  const [submissions, dispatch] = useSubmissions();

  React.useEffect(() => {
    load_all_submissions(dispatch).then((res) => setLoading(false));
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <h5>loading</h5>
      ) : (
        <AdminsSubmissionsTable setLoading={setLoading} />
      )}
    </div>
  );
}
