import Box from "@material-ui/core/Box";
import { green, orange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  get_doctor_name,
  get_patient_name
} from "../../../context/profile_data/ProfileDataActions";

const useStyles = makeStyles((theme) => ({
  successText: {
    color: green["A700"],
  },
  failText: {
    color: orange["A700"],
  },
}));
const InfoPanel = ({ xrayInfo, verifierId }) => {
  const classes = useStyles();
  const [owner, setOwner] = React.useState(null);
  const [verifier, setVerifier] = React.useState(null);
  var mdate = new Date(xrayInfo.creation_date);
  React.useEffect(() => {
    if (xrayInfo.owner.account_type.toLowerCase() === "patient") {
      get_patient_name(xrayInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    } else {
      get_doctor_name(xrayInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    }
  }, []);

  React.useEffect(() => {
    get_doctor_name(verifierId).then((res) => {
      if (res.status === 200) {
        setVerifier(res.data[0].first_name + " " + res.data[0].last_name);
      }
    });
  }, []);
   return (
    <Grid container>
      <Grid item container xs={4}>
        <Typography>
          <Box>Owner:</Box>
        </Typography>

        <Typography>{owner && <Box fontWeight={700}>{owner}</Box>}</Typography>
      </Grid>
      <Grid item container xs={4}>
        <Typography>
          <Box>Status:</Box>
        </Typography>

        {xrayInfo.status === "ready" ? (
          <Typography className={classes.successTxt}>
            <Box fontWeight={700}>{xrayInfo.status}</Box>
          </Typography>
        ) : (
          <Typography className={classes.failText}>
            <Box fontWeight={700}>{xrayInfo.status}</Box>
          </Typography>
        )}
      </Grid>
      <Grid item container xs={4}>
        <Typography>
          <Box>Verifier:</Box>
        </Typography>
        {verifier ? (
          <Typography>
            <Box fontWeight={700}>{verifier}</Box>
          </Typography>
        ) : (
          <Typography>
            <Box fontWeight={700}>Not assigned yet</Box>
          </Typography>
        )}
      </Grid>
      <Grid item container>
        <Typography>
          <Box>Creation date:</Box>
        </Typography>

        <Typography>
          <Box fontWeight={700}>{mdate.toLocaleString()}</Box>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default InfoPanel;
