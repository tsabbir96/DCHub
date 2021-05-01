import { Box, ButtonBase, Dialog, Grid, Typography } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import diagnobot from "../../../assets/diagnobot/diagnologo.svg";
import consultation from "../../../assets/plans_choices/consultation.svg";
import fullMouth from "../../../assets/plans_choices/one_condition.svg";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import ToolItemDialog from "./ToolItemDialog";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
    imagesPart: {
      width: "100%",
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(4),
      right: theme.spacing(68),
    },
    centerGrid: {
      //        padding:'0 160px 0 160px'
    },
    Dialog: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(8),
      width: "100%",
    },
    img: {
      fill: "gray",
      // background:'white',
      padding: theme.spacing(2, 2),
      paddingBottom: theme.spacing(3),
      width: "100%",
      maxHeight: "160px",
    },
  })
);

const DialogToolChoice = ({ onClose, openDialog }) => {
  const classes = useStyles();
   const [profileData] = useProfileData();
  const { path, url } = useRouteMatch();
  const history = useHistory();
  const { open } = useAlertSnackbarContext();

  const handleClose = () => {
    onClose("");
    history.push(path);
  };

  const handleDiagnoBot = (type) => {
    switch (type) {
      case "LIMITED_EVALUATION":
        if (profileData.profile.limited_eval_slots > 0) {
          history.push({
            pathname: "/diagnobot",
            state: type,
          });
        } else {
          open("warning", "Please choose a plan first");

          history.push("/choosePlan");
        }
        break;
      case "CONSULTATION":
        if (profileData.profile.comprehensive_eval_slots > 0) {
          history.push({
            pathname: "/diagnobot",
            state: type,
          });
        } else {
          open("warning", "Please choose a plan first");

          history.push("/choosePlan");
        }
        break;
      case "DIAGNOBOT":
        history.push({
          pathname: "/diagnobot",
          state: type,
        });

        break;
      default:
    }
  };
  return (
    <Dialog
      fullWidth
      maxWidth={"md"}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={openDialog}
    >
      <DialogTitle className={classes.root} id="simple-dialog-title">
        <Grid container alignItems={"center"}>
          <Grid item xs={11}>
            <Typography color="primary" variant={"h5"}>
              <Box fontWeight={700} textAlign={"center"}>
                Available tools
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <ButtonBase>
              <CloseIcon onClick={handleClose} />
            </ButtonBase>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className={classes.root}>
        <Grid container justify={"center"} className={classes.Dialog}>
          <ToolItemDialog
            type="Free"
            onClick={() => handleDiagnoBot("DIAGNOBOT")}
            img={diagnobot}
            title={"Diagnobot"}
            desc="DiagnoBot is our virtual
            nurse. She will ask you some
            questions and give you some
            basic information and suggest
            probable treatment
            recommendation. DiagnoBot is
            Free and you can use it for
            various dental conditions."
          />

          <ToolItemDialog
            type="Needs subscription"
            onClick={() => handleDiagnoBot("LIMITED_EVALUATION")}
            img={fullMouth}
            title={"Limited Evaluation"}
            desc="In this section, you can
            get a limited (One tooth/condition) evaluation by
            uploading your documents and
            X-rays. This tool will make a complete evaluation of your entire mouth.
            Select Comprehensive evaluation if
            you want a comprehensive evaluation. For all
            types of evaluations, you will
            receive a written report. see
            example"
            link="https://www.google.com/"
          />

          <ToolItemDialog
            type="Needs subscription"
            onClick={() => handleDiagnoBot("CONSULTATION")}
            img={consultation}
            title={"Comprehensive evaluation & Video Consult"}
            desc="In this section, you can
            get a complete AI evaluation by
            uploading your documents and
            X-rays, we will also fix a  video Face to Face Consultation with one of our internal doctors .
             This tool will make a complete evaluation of your entire mouth.
            Select limited analysis if
            consulting about single tooth or a condition. For all
             
            types of evaluations, you will
            receive a written report. see
            example"
            link="https://www.google.com/"
          />
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
export default DialogToolChoice;
