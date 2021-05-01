import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import React from "react";
import {
  get_doctor_name,
  get_patient_name,
} from "../context/profile_data/ProfileDataActions";
const useStyles = makeStyles((theme) => ({
  successText: {
    color: green["A700"],
  },
  failText: {
    color: orange["A700"],
  },
  marginLeft: {
    marginLeft: "auto",
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  root: {
    padding: theme.spacing(2, 2),
  },
}));
export default function DiagnoInfoPanel({ diagnobotInfo, verifier }) {
  const [owner, setOwner] = React.useState(null);

  React.useEffect(() => {
    if (diagnobotInfo.owner.account_type.toLowerCase() === "patient") {
      get_patient_name(diagnobotInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    } else {
      get_doctor_name(diagnobotInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    }
  }, []);

  const classes = useStyles();

  var mdate = new Date(diagnobotInfo.creation_date);
  return (
    <Grid className={classes.root} container>
      <Grid item container xs={4}>
        <Typography>
          <Box textAlign={"center"}>Owner:</Box>
        </Typography>
        <Typography>{owner && <Box fontWeight={700}>{owner}</Box>}</Typography>
      </Grid>
      <Grid item container justify={"center"} xs={4}>
        <Typography>
          <Box>Status:</Box>
        </Typography>

        {diagnobotInfo.status.toLowerCase() === "ready" ? (
          <Typography className={classes.successText}>
            <Box textAlign={"center"} fontWeight={700}>
              {diagnobotInfo.status}
            </Box>
          </Typography>
        ) : (
          <Typography className={classes.failText}>
            <Box textAlign={"center"} fontWeight={700}>
              {diagnobotInfo.status}
            </Box>
          </Typography>
        )}
      </Grid>
      <Grid item container xs={4}>
        <Typography className={classes.marginLeft}>
          <Box textAlign={"center"}>Verifier:</Box>
        </Typography>

        {verifier ? (
          <Typography>
            <Box textAlign={"center"} fontWeight={700}>
              {verifier.first_name + " " + verifier.last_name}
            </Box>
          </Typography>
        ) : (
          <Typography>
            <Box textAlign={"center"} fontWeight={700}>
              Not assigned yet
            </Box>
          </Typography>
        )}
      </Grid>
      <Grid item container className={classes.marginTop}>
        <Typography>
          <Box>Creation date:</Box>
        </Typography>

        <Typography>
          <Box fontWeight={700}>{mdate.toLocaleString()}</Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
