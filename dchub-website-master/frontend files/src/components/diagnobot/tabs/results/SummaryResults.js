import { Button, CardActions, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";
import HelpIcon from "@material-ui/icons/Help";
import PrintTwoToneIcon from "@material-ui/icons/PrintTwoTone";
import SwapHorizTwoToneIcon from "@material-ui/icons/SwapHorizTwoTone";
import React from "react";
import { useHistory } from "react-router";
import idea from "../../../../assets/diagnobot/suggestion.svg";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import {
  decreaseComprehensiveEvalSlots,
  decreaseLimitedEvalSlots
} from "../../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../../../context/profile_data/types";
import BackDialogFinalyse from "./BackDialogFinalyse";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    width: "100%",
  },
  cardContent: {
    // width: '80%',
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  paragraph: {
    marginTop: theme.spacing(4),
    // maxWidth: '60%'
  },
  divider: {
    marginTop: theme.spacing(6),
  },
  title: {
    margin: theme.spacing(1, 0),
    marginLeft: theme.spacing(4),
    display: "flex",
  },
  questionnaireRow: {
    margin: theme.spacing(1, 4),
    marginTop: theme.spacing(4),
    display: "flex",
    fontWeight: "bold",
    fontSize: "18px",
  },
  subtitle: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  checkIcon: {
    color: green[500],
  },
  closeIcon: {
    color: red[500],
  },
  icon: {
    color: "lightgray",
  },
  answer: {
    marginLeft: theme.spacing(8),
    display: "flex",
  },
  descCard: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(2, 0),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  image: {
    margin: theme.spacing(2),
    height: "60px",
    width: "60px",
  },
  textSuggestion: {
    fontWeight: "800",
    fontSize: "24px",
  },
  description: {
    backgroundColor: theme.palette.background.default,
    textAlign: "justify",
    lineHeight: "150%",
    padding: theme.spacing(4),
  },
}));

const fillQuestionnaire = (diagnostate, classes) => {
  var i;
  let questionnaireRow = [];
  for (i = 0; i < diagnostate.askedQuestions.length; i++) {
    if (i > 0) {
      questionnaireRow.push(
        <>
          {diagnostate.providedSuggestions[i - 1] !== "" && (
            <Card className={classes.descCard}>
              <Grid container>
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>
                <Typography className={classes.description}>
                  {diagnostate.providedSuggestions[i - 1]}
                </Typography>
              </Grid>
            </Card>
          )}
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {diagnostate.askedQuestions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {diagnostate.providedAnswers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : diagnostate.providedAnswers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {diagnostate.providedAnswers[i]}
          </Typography>
        </>
      );
    } else {
      questionnaireRow.push(
        <>
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {diagnostate.askedQuestions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {diagnostate.providedAnswers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : diagnostate.providedAnswers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {diagnostate.providedAnswers[i]}
          </Typography>
        </>
      );
    }
  }
  if (
    diagnostate.providedSuggestions[
      diagnostate.providedSuggestions.length - 1
    ] !== ""
  ) {
    questionnaireRow.push(
      <Card className={classes.descCard}>
        <Grid container>
          <Grid container alignItems="center" item>
            <img src={idea} alt="idea" className={classes.image} />
            <Typography className={classes.textSuggestion}>
              Suggestion:
            </Typography>
          </Grid>
          <Typography className={classes.description}>
            {
              diagnostate.providedSuggestions[
                diagnostate.providedSuggestions.length - 1
              ]
            }
          </Typography>
        </Grid>
      </Card>
    );
  }

  return questionnaireRow;
};
const SummaryResults = ({ value, setValue, type }) => {
  const classes = useStyles();
  const history = useHistory();
  const [diagnostate] = useDiagnoState();
  const [openDialog, setOpenDialog] = React.useState(false);
  const bull = <span>•</span>;
  const [profileData, dispatch] = useProfileData();

  const handleClick = () => {
    //TODO UPDATE   EVAL SLOTS
    switch (type) {
      case "LIMITED_EVALUATION": {
        decreaseLimitedEvalSlots(
          profileData.profile.id,
          profileData.profile.limited_eval_slots - 1
        ).then((resSlots) => {
          if (resSlots.status === 200) {
            dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: resSlots.data });

            history.push("/profile/Reports");
          } else {
            //todo show error
          }
        });
        // code block
        break;
      }
      case "CONSULTATION": { // code block
        decreaseComprehensiveEvalSlots(
          profileData.profile.id,
          profileData.profile.comprehensive_eval_slots - 1
        ).then((resSlots) => {
          if (resSlots.status === 200) {
            dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: resSlots.data });

            history.push("/profile/Reports");

            setValue(value + 1);
          } else {
            //todo show error
          }
        });

        break;
      }
      case "DIAGNOBOT": {
        history.push("/profile/Reports");

        break;
      }
      default:
        break;
      // code block
    }
  };

  const handlePrint = () => {
    alert("handlePrint");
  };
  //###########################################
  //HANDLE BACK BUTTON
  //###########################################
  const handleBackClick = () => {
    setOpenDialog(true);
  };

  //###########################################
  //handleClose
  //###########################################
  const handleClose = (value) => {
    setOpenDialog(false);
  };
  const questionnaireRow = fillQuestionnaire(diagnostate, classes);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography variant={"h6"} className={classes.title}>
          <Box fontWeight={700}>Summary</Box>
        </Typography>
        <Typography variant={"subtitle1"} className={classes.subtitle}>
          <Box fontWeight={700}>Reported conditions</Box>
        </Typography>

        {diagnostate.conditions.map((item) => {
          return (
            <Typography className={classes.title}>
              {bull} &nbsp;
              {item.name}
            </Typography>
          );
        })}
        <Typography variant={"subtitle1"} className={classes.subtitle}>
          <Box fontWeight={700}>Questionnaire</Box>
        </Typography>
        {questionnaireRow}
        <BackDialogFinalyse
          value={value}
          setValue={setValue}
          handleClose={handleClose}
          open={openDialog}
        />
      </CardContent>
      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleBackClick}
          variant={"outlined"}
          color={"primary"}
          startIcon={<ArrowBackIcon />}
        >
          Back to previous step
        </Button>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant={"contained"}
          color={"primary"}
          startIcon={<AccountCircleTwoToneIcon />}
        >
          Go to profile
        </Button>

        {type === "DIAGNOBOT" && (
          <Button
            onClick={handlePrint}
            className={classes.btn}
            variant={"contained"}
            color={"primary"}
            startIcon={<PrintTwoToneIcon />}
          >
            Print report
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
export default SummaryResults;
