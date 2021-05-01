import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import chat_face from "../../assets/commun/chat_face.svg";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
const useStyles = makeStyles((theme) => ({
  illustration: {
    height: "400px",
  },
  button: {
    margin: theme.spacing(0, 2),
  },
  btns: {
    marginTop: theme.spacing(4),
  },
  welcome: {
    fontWeight: "600",
    fontSize: "24px",
    margin: theme.spacing(2, 0),
  },
  paragraph: {
    fontSize: "24px",
    margin: theme.spacing(2, 0),
    textAlign: "justify",
  },
}));

export default function WelcomeScreen({
  isDoctor,

  isStepOptional,
  steps,
  activeStep,
  handleBack,
  handleSkip,
}) {
  const classes = useStyles();
  const [profile] = useProfileData();

  return (
    <div>
      <Grid container>
        <Grid container direction="column" xs={6} item>
          <Typography className={classes.welcome}>Welcome, </Typography>

          {isDoctor ? (
            <Typography className={classes.paragraph}>
              Welcome Dr, please tell us about you and your work. You only do
              this section once. You can always update, share and delete this
              information. It will be secured on our HIPPA Compliant on Amazon
              Web Services
            </Typography>
          ) : (
            <Typography className={classes.paragraph}>
              Profile page is like filling out forms at Doctor’s office. You
              only do this section once. You can always update, share and delete
              this information. It will be secured on our HIPPA Compliant on
              Amazon Web Services
            </Typography>
          )}

          <div className={classes.btns}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            {isStepOptional(activeStep) && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSkip}
                className={classes.button}
              >
                Start
              </Button>
            )}
          </div>
        </Grid>
        <Grid container item xs={6}>
          <img className={classes.illustration} src={chat_face} alt="welcome" />
        </Grid>
      </Grid>
    </div>
  );
}
