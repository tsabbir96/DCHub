import { Box, Grid, Step, StepLabel, Stepper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import AboutYourTeethEdit from "../../commun/AboutYourTeethEdit";
import CircularProgressWithLabel from "../../commun/CircularProgressWithLabel";
import DocAboutPracticeEdit from "../../commun/doctor/DocAboutPracticeEdit";
import DocFilesSectionEdit from "../../commun/doctor/DocFilesSectionEdit";
import DocGeneralSectionEdit from "../../commun/doctor/DocGeneralSectionEdit";
import GeneralSectionEdit from "../../commun/GeneralSectionEdit";
import MedicalHistoryEdit from "../../commun/MedicalHistoryEdit";
import WelcomeScreen from "../../commun/WelcomeScreen";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import ShowOptions from "./ShowOptions";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  button: {
    margin: theme.spacing(2),
  },
  divDone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  illust: {
    width: "200px",
    height: "200px",
  },
  message: {
    margin: theme.spacing(4),
  },
  instructions: {
    margin: theme.spacing(4),
  },
}));

function getSteps(account_type) {
  if (account_type.toLowerCase() === "patient") {
    return [
      "Hello",
      "Tell us about you",
      "Medical & Dental History",
      "Let's talk about your teeth",
      "Make a consultation",
    ];
  } else {
    return [
      "Hello",
      "General section",
      "About your practice",
      "Legal documents",
    ];
  }
}

function getStepContent(
  account_type,
  is_first_time,
  activeStep,
  steps,
  handleNext,
  isStepOptional,
  handleSkip,
  handleBack,
  handleClose
) {
  if (account_type.toLowerCase() === "patient") {
    switch (activeStep) {
      case 0:
        return (
          <WelcomeScreen
          isDoctor={false}

            isStepOptional={isStepOptional}
            steps={steps}
            activeStep={activeStep}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );

      case 1:
        return (
          <GeneralSectionEdit
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <MedicalHistoryEdit
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <AboutYourTeethEdit
            // handleClose={handleClose}
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleBack={handleBack}
            handleSkip={handleSkip}

          />
        );
      case 4:
        return (
          <ShowOptions
            handleClose={handleClose}
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
          />
        );
      default:
        return "Unknown step";
    }
  } else {
    switch (activeStep) {
      case 0:
        return (
          <WelcomeScreen
            isDoctor={true}
            isStepOptional={isStepOptional}
            steps={steps}
            activeStep={activeStep}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );

      case 1:
        return (
          <DocGeneralSectionEdit
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <DocAboutPracticeEdit
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <DocFilesSectionEdit
            handleClose={handleClose}
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
          />
        );
      default:
        return "Unknown step";
    }
  }
}
export default function ProfileInfoDialog(props) {
  const [profileData] = useProfileData();
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps(profileData.profile.user.account_type);
  const handleClose = () => {
    onClose(selectedValue);
  };

  const isStepOptional = (step) => {
    return true;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <Dialog
      maxWidth={"lg"}
      fullWidth
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Update your account</DialogTitle>

      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <div className={classes.divDone}>
                <Typography variant={"h5"} className={classes.instructions}>
                  <Box> All steps completed - you&apos;re finished</Box>
                </Typography>

                <Grid
                  container
                  className={classes.message}
                  alignItems={"center"}
                  justify={"center"}
                >
                  <CircularProgressWithLabel value={75} />

                  <Typography color={"textSecondary"} className={classes.label}>
                    <Box>profile complete</Box>
                  </Typography>
                </Grid>
              </div>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(
                  profileData.profile.user.account_type,
                  profileData.profile.is_New,
                  activeStep,
                  steps,
                  handleNext,
                  isStepOptional,
                  handleSkip,
                  handleBack,
                  handleClose
                )}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

ProfileInfoDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
