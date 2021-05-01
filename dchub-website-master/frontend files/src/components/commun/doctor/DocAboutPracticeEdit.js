import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { editAboutPracticeDoc } from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../../context/profile_data/types";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(0, 2),
  },
}));
export default function DocAnoutPracticeEdit({
  steps,
  activeStep,
  handleNext,
  isStepOptional,
  handleSkip,
  handleBack,
}) {
  const classes = useStyles();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [profileData, dispatch] = useProfileData();

  const [myLocalProfileData, setMyLocalProfileData] = React.useState({
    active_license: profileData.profile.active_license,
    accept_new_patients: profileData.profile.accept_new_patients,
    average_new_patients_month: profileData.average_new_patients_month,
  });
  const handleActiveLicenseChange = (event) => {
    if (event.target.value === "yes") {
      setMyLocalProfileData({
        ...myLocalProfileData,
        active_license: true,
      });
    } else {
      setMyLocalProfileData({
        ...myLocalProfileData,
        active_license: false,
      });
    }
  };

  const handleAcceptNewPatients = (event) => {
    if (event.target.value === "yes") {
      setMyLocalProfileData({
        ...myLocalProfileData,
        accept_new_patients: true,
      });
    } else {
      setMyLocalProfileData({
        ...myLocalProfileData,
        accept_new_patients: false,
      });
    }
  };

  const handleNbrPatients = (event) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      average_new_patients_month: event.target.value,
    });
  };

  const { open } = useAlertSnackbarContext();

  const handleClick = () => {
    setIsDisabled(true);
    editAboutPracticeDoc(
      profileData.profile.id,
      myLocalProfileData.active_license,
      myLocalProfileData.accept_new_patients,
      myLocalProfileData.average_new_patients_month
    ).then((res) => {
      if (res.status === 200) {
        dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: res.data });

        open("success", "edit successful");
        setIsDisabled(false);

        handleNext();
      } else {
        open("error", "edit failed");
        setIsDisabled(false);
      }
    });
  };

  return (
    <Grid container>
      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Do you have an active dental license?:</Box>

          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="active_license"
              name="active_license"
              defaultValue={myLocalProfileData.active_license ? "yes" : "no"}
              onChange={handleActiveLicenseChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Do you accept new patients?:</Box>

          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="accept_new_patients"
              name="accept_new_patients"
              defaultValue={
                myLocalProfileData.accept_new_patients ? "yes" : "no"
              }
              onChange={handleAcceptNewPatients}
            >
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Typography>
      </Grid>

      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Average No. of new patients/month:</Box>
          <TextField
            fullWidth
            defaultValue={myLocalProfileData.average_new_patients_month}
            variant="outlined"
            onChange={handleNbrPatients}
          />
        </Typography>
      </Grid>

      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}
      >
        Back
      </Button>
      {isStepOptional(activeStep) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSkip}
          className={classes.button}
        >
          Skip
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={isDisabled}
        className={classes.button}
      >
        {activeStep === steps.length - 1 ? "Update and close" : "Update"}
      </Button>
    </Grid>
  );
}
