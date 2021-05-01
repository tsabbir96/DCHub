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
  Typography
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { editTeethPrefs } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_MH_PROFILE_SUCCESS } from "../context/profile_data/types";
const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(3),
  },  button: {
    margin: theme.spacing(0, 2),
  },
}));
export default function AboutYourTeethEdit({
  handleClose,
  handleBack,
  activeStep,
  steps,
  handleSkip,
  isStepOptional,
}) {
  const classes = useStyles();
  const [state, dispatch] = useProfileData();
  const profile = state.profile;
   const { open } = useAlertSnackbarContext();
  const [isDisabled, setDisabled] = React.useState(false);
  const [myLocalData, setMyLocalData] = React.useState({
    teeth_prefs: profile.teeth_prefs,
    more_about_teeth: profile.more_about_teeth,

    preferred_treatment_location:
      profile.preferred_treatment_location === "HOME" ? "HOME" : "ABROAD",
  });

  const handleChangeTeethPrefs = (value) => {
     setMyLocalData({
      ...myLocalData,
      teeth_prefs: value,
    });
  };
  const handleRGChange = (event) => {
    setMyLocalData({
      ...myLocalData,
      preferred_treatment_location: event.target.value,
    });
  };

  const handleInputChange = (event) => {
    setMyLocalData({
      ...myLocalData,
      more_about_teeth: event.target.value,
    });
  };

  const handleClick = (event) => {
    setDisabled(true);

    editTeethPrefs(
      profile.id,
      myLocalData.teeth_prefs,
      myLocalData.more_about_teeth,
      myLocalData.preferred_treatment_location
    ).then((res) => {
      if (res.status === 200) {
        dispatch({ type: EDIT_MH_PROFILE_SUCCESS, payload: res.data });

        open("success", "edit successful");
        handleClose();
        setDisabled(false);
      } else {
        open("error", "error editing");
        setDisabled(false);
      }
    });
  };
  return (
    <Grid container>
      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.marginTopTitle}>
          <Box fontWeight={700}>I want my teeth to...:</Box>

          <Autocomplete
            className={classes.paragraph}
            multiple
            id="tags-outlined"
            options={prefs}
            freeSolo
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            // onChange={(  value) => handleBiphosphonateTTT(value)}
            onChange={(event, value) => handleChangeTeethPrefs(value)}
            defaultValue={myLocalData.teeth_prefs}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label=""
                placeholder="Add preference(s)"
              />
            )}
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>
            Tell us more about your teeth and dental goals:
          </Box>

          <TextField
            multiline
            fullWidth
            onChange={handleInputChange}
            defaultValue={myLocalData.more_about_teeth}
            rows={4}
            id="outlined-basic"
            variant="outlined"
          />
        </Typography>
      </Grid>
      <Grid container className={classes.grid} xs={6} direction={"column"}>
        <Typography>
          <Box fontWeight={700}>Preferred treatment location:</Box>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="treatment location"
              name="ttt_location"
              defaultValue={myLocalData.preferred_treatment_location}
              onChange={handleRGChange}
            >
              <FormControlLabel value="HOME" control={<Radio />} label="Home" />
              <FormControlLabel
                value="ABROAD"
                control={<Radio />}
                label="Abroad"
              />
            </RadioGroup>
          </FormControl>
        </Typography>
      </Grid>

      <div>
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
      </div>
    </Grid>
  );
}
const prefs = [
  "I want my teeth to look whiter",
  "I want my teeth to be straight",
  "I like to feel more confident",
  "I like to have a sexy smile",
  "I just want to have beautiful and healthy teeth",
  "I prefer natural straighthening of my teeth",
  "I want braces",
  "I prefer aligners over braces",
  "I prefer procelain veneers",
  "I prefer metal free dentistry",
  "I prefer stronger & more permanent fillings",
  "I like to show more teeth",
  "I want to show less gums",
  "I like to have a broader smile",
  "I want to have a full mouth smile makeover",
];
