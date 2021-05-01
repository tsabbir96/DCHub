import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import chat_face from "../../../assets/commun/chat_face.svg";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import DialogToolChoice from "../../dialogs/tool_choice/DialogToolChoice";
const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(0, 2),
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

const calculateScore = (profile) => {
  if (profile.user.account_type.toLowerCase() === "patient") {
    let score = 0;
    if (profile.gender === "NT") {
      score++;
    }
    if (
      !profile.birthday ||
      profile.birthday === "NT" ||
      profile.birthday === ""
    ) {
      score++;
    }
    if (!profile.country || profile.country === "") {
      score++;
    }
    if (!profile.city || profile.city === "") {
      score++;
    }
    if (!profile.phone) {
      score++;
    }
    if (!profile.weight) {
      score++;
    }
    if (!profile.last_medical_exam || profile.last_medical_exam === "") {
      score++;
    }
    if (!profile.last_dental_exam || profile.last_dental_exam === "") {
      score++;
    }
    return score;
  } else {
    return 0;
  }
};
export default function ShowOptions({
  handleClose,
  handleBack,
  activeStep,
  steps,
}) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [profileData] = useProfileData();
  const { open } = useAlertSnackbarContext();

  const handleClickOpenDialog = () => {
    if (calculateScore(profileData.profile) < 1) {
      setOpenDialog(true);
    } else {
      open("warning", "Please complete your profile to start a consultation");
    }
  };
  const handleCloseDialog = (value) => {
    setOpenDialog(false);
  };
  return (
    <Grid container>
      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.welcome}>Good job, </Typography>
        <Typography className={classes.paragraph}>
          Now you can Get an unbiased dental evaluation, please choose which
          offer is suitable for you.
        </Typography>
        <Button fullWidth color="primary"
        onClick={handleClickOpenDialog}
        variant="contained">
          Make a consultation{" "}
        </Button>
      </Grid>
      <Grid container className={classes.grid} xs={6} direction={"column"}>
        <img className={classes.illustration} src={chat_face} alt="welcome" />
      </Grid>

      <div>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Close" : "Update"}
        </Button>
      </div>
      <DialogToolChoice openDialog={openDialog} onClose={handleCloseDialog} />
    </Grid>
  );
}
