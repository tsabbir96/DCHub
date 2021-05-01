import Box from "@material-ui/core/Box";
import { green, orange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {
  get_doctor_name,
  get_patient_name,
} from "../../../context/profile_data/ProfileDataActions";

const useStyles = makeStyles((theme) =>
  createStyles({
    successText: {
      color: green["A700"],
    },
    failText: {
      color: orange["A700"],
    },
  })
);

const ImagesInfoPanel = ({ imagesInfo }) => {
  const classes = useStyles();
  var mdate = new Date(imagesInfo.creation_date);
  const [owner, setOwner] = React.useState(null);
  React.useEffect(() => {
    if (imagesInfo.owner.account_type.toLowerCase() === "patient") {
      get_patient_name(imagesInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    } else {
      get_doctor_name(imagesInfo.owner.id).then((res) => {
        if (res.status === 200) {
          setOwner(res.data[0].first_name + " " + res.data[0].last_name);
        }
      });
    }
  }, []);
  return (
    <Grid container>
      <Grid item container xs={4}>
        <Typography>
          <Box> Owner:</Box>
        </Typography>
        <Typography>{owner && <Box fontWeight={700}>{owner}</Box>}</Typography>
      </Grid>
      <Grid item container xs={4}>
        <Typography>
          <Box>Status:</Box>
        </Typography>

        {imagesInfo.status === "ready" ? (
          <Typography className={classes.successTxt}>
            <Box fontWeight={700}>{imagesInfo.status}</Box>
          </Typography>
        ) : (
          <Typography className={classes.failText}>
            <Box fontWeight={700}>{imagesInfo.status}</Box>
          </Typography>
        )}
      </Grid>
      <Grid item container xs={4}>
        <Typography>
          <Box>Verifier:</Box>
        </Typography>

        {imagesInfo.verifier ? (
          <Typography>
            <Box fontWeight={700}>{imagesInfo.verifier}</Box>
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
export default ImagesInfoPanel;
