import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";
import HelpIcon from "@material-ui/icons/Help";
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import SwapHorizTwoToneIcon from "@material-ui/icons/SwapHorizTwoTone";
import React from "react";
import idea from "../../../assets/diagnobot/suggestion.svg";
const useStyles = makeStyles((theme) => ({
  questionnaireRow: {
    margin: theme.spacing(1, 0),
    marginTop: theme.spacing(4),
    display: "flex",
  },
  checkIcon: {
    color: green[500],
    marginLeft: theme.spacing(4),
  },
  closeIcon: {
    color: red[500],
    marginLeft: theme.spacing(4),
  },
  icon: {
    color: "lightgray",
    marginLeft: theme.spacing(4),
  },
  qicon: {
    color: "#4360D6",
  },
  marginTop: {
    marginTop: theme.spacing(8),
  },
  full_questionnaire: {
    marginTop: theme.spacing(8),

    marginLeft: theme.spacing(4),
  },
  descCard: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
  image: {
    margin: theme.spacing(2),
    height: "40px",
    width: "40px",
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
  nameCard: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "#FAF9F5",
    margin: theme.spacing(1),
  },
  title: {
    display: "flex",
  },
  infoItem: {
    padding: theme.spacing(1),
  },
  titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));
const generateQuestionnaireRow = (classes, fullInfo) => {
  var i;
  let questionnaireRow = [];
  for (i = 0; i < fullInfo.diagnobot.added_questions.length; i++) {
    if (i > 0) {
      questionnaireRow.push(
        <>
          {fullInfo.diagnobot.added_recommendations[i - 1] !== "" && (
            <Card variant="outlined" className={classes.descCard}>
              <Grid container>
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>
                <Typography className={classes.description}>
                  {fullInfo.diagnobot.added_recommendations[i - 1]}
                </Typography>
              </Grid>
            </Card>
          )}
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {fullInfo.diagnobot.added_questions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {fullInfo.diagnobot.added_answers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : fullInfo.diagnobot.added_answers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {fullInfo.diagnobot.added_answers[i]}
          </Typography>
        </>
      );
    } else {
      questionnaireRow.push(
        <>
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {fullInfo.diagnobot.added_questions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {fullInfo.diagnobot.added_answers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : fullInfo.diagnobot.added_answers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {fullInfo.diagnobot.added_answers[i]}
          </Typography>
        </>
      );
    }
  }

  if (
    fullInfo.diagnobot.added_recommendations[
      fullInfo.diagnobot.added_recommendations.length - 1
    ] !== ""
  ) {
    questionnaireRow.push(
      <Card variant="outlined" className={classes.descCard}>
        <Grid container>
          <Grid container alignItems="center" item>
            <img src={idea} alt="idea" className={classes.image} />
            <Typography className={classes.textSuggestion}>
              Suggestion:
            </Typography>
          </Grid>
          <Typography className={classes.description}>
            {
              fullInfo.diagnobot.added_recommendations[
                fullInfo.diagnobot.added_recommendations.length - 1
              ]
            }
          </Typography>
        </Grid>
      </Card>
    );
  }
  return questionnaireRow;
};
export default function Page03ReportedConditions({ fullInfo }) {
  const classes = useStyles();
  const bull = <span>•</span>;
  const questionnaireRow = generateQuestionnaireRow(classes, fullInfo);

  return (
    <div
      style={{
        height: `${parseInt(
          (Math.floor(fullInfo.diagnobot.added_recommendations.length / 3) +
            1) *
            285
        )}mm`,
        maxHeight: `${parseInt(
          (Math.floor(fullInfo.diagnobot.added_recommendations.length / 3) +
            1) *
            285
        )}mm`,
      }}
    >
      <Typography variant="h5" className={classes.titleStyle} color="primary">
        <Box fontWeight="800">II. Anamnesis</Box>
      </Typography>
      <Divider />

      <Card variant="outlined" className={classes.nameCard}>
        <CardContent>
          <div className={classes.title}>
            <AssignmentTwoToneIcon />
            <Typography color="textSecondary">
              <Box fontWeight="500">Reported condition(s):</Box>
            </Typography>
          </div>

          {fullInfo.diagnobot.added_conditions.map((item) => (
            <Typography>
              <Box fontWeight="500">
                {bull} {item}
              </Box>
            </Typography>
          ))}
        </CardContent>
      </Card>

      <Typography
        className={classes.full_questionnaire}
        gutterBottom
        color="textSecondary"
      >
        <Box fontWeight="500">Full questionnaire:</Box>
      </Typography>
      {questionnaireRow}

      <Card variant="outlined" className={classes.nameCard}>
        <CardContent>
          <div className={classes.title}>
            <InfoTwoToneIcon />
            <Typography color="textSecondary">
              <Box fontWeight="500">Other details/remarks:</Box>
            </Typography>
          </div>

          <Typography>
            <Box fontWeight="500">{fullInfo.patient_additions}</Box>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
