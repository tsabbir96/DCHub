import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import CheckTwoToneIcon from "@material-ui/icons/CheckTwoTone";
import ClearTwoToneIcon from "@material-ui/icons/ClearTwoTone";
import HelpIcon from "@material-ui/icons/Help";
import SwapHorizTwoToneIcon from "@material-ui/icons/SwapHorizTwoTone";
import React from "react";
import { useHistory, useLocation } from "react-router";
import idea from "../../assets/diagnobot/suggestion.svg";
import Header from "../commun/Header";
import { update_diagno_status } from "../context/diagnoview/DiagnoActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import DiagnoInfoPanel from "./DiagnoInfoPanel";
import GeneralSectionDiagno from "./GeneralSectionDiagno";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    width: "100%",
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },

  divider: {
    marginTop: theme.spacing(6),
  },
  title: {
    // marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  subtitle: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    // marginLeft: theme.spacing(4),
  },

  questionnaireRow: {
    margin: theme.spacing(1, 4),
    marginTop: theme.spacing(4),
    display: "flex",
    fontWeight: "bold",
    fontSize: "18px",
  },

  checkIcon: {
    color: green[500],
  },
  closeIcon: {
    color: red[500],
  },
  icon: {
    color: "white",
  },
  answer: {
    marginLeft: theme.spacing(8),
    display: "flex",
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
}));

const fillQuestionnaire = (diagnobotInfo, classes) => {
  var i;
  let questionnaireRow = [];
  for (i = 0; i < diagnobotInfo.added_questions.length; i++) {
    if (i > 0) {
      questionnaireRow.push(
        <>
          {diagnobotInfo.added_recommendations[i - 1] !== "" && (
            <Card className={classes.descCard}>
              <Grid container>
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>
                <Typography className={classes.description}>
                  {diagnobotInfo.added_recommendations[i - 1]}
                </Typography>
              </Grid>
            </Card>
          )}
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {diagnobotInfo.added_questions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {diagnobotInfo.added_answers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : diagnobotInfo.added_answers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {diagnobotInfo.added_answers[i]}
          </Typography>
        </>
      );
    } else {
      questionnaireRow.push(
        <>
          <Typography className={classes.questionnaireRow}>
            <HelpIcon className={classes.icon} /> &nbsp;
            {diagnobotInfo.added_questions[i]}
          </Typography>
          <Typography className={classes.answer}>
            {diagnobotInfo.added_answers[i].toLowerCase() === "yes" ? (
              <CheckTwoToneIcon className={classes.checkIcon} />
            ) : diagnobotInfo.added_answers[i].toLowerCase() === "no" ? (
              <ClearTwoToneIcon className={classes.closeIcon} />
            ) : (
              <SwapHorizTwoToneIcon className={classes.icon} />
            )}
            &nbsp;
            {diagnobotInfo.added_answers[i]}
          </Typography>
        </>
      );
    }
  }

  if (
    diagnobotInfo.added_recommendations[
      diagnobotInfo.added_recommendations.length - 1
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
              diagnobotInfo.added_recommendations[
                diagnobotInfo.added_recommendations.length - 1
              ]
            }
          </Typography>
        </Grid>
      </Card>
    );
  }
  return questionnaireRow;
};
export default function DiagnoView() {
  const bull = <span>•</span>;
  const classes = useStyles();
  const location = useLocation();
  const fullInfo = location.state;
  const diagnobotInfo = fullInfo.diagnobot;
  let history = useHistory();

  const [profileData] = useProfileData();

  const questionnaireRow = fillQuestionnaire(diagnobotInfo, classes);

  const handleClick = () => {
    update_diagno_status(diagnobotInfo.id, "READY").then((res) => {
      if (res.status === 200) {
        history.push({
          pathname: "/profile/Reports",
        });
      }
    });
  };

  return (
    <div>
      <Header />
      <Container>
        <Card className={classes.root} variant="outlined">
          <DiagnoInfoPanel
            diagnobotInfo={diagnobotInfo}
            verifier={fullInfo.verifier}
          />

          <CardContent className={classes.cardContent}>
            {profileData.profile.user.account_type.toLowerCase() ===
            "patient" ? (
              <GeneralSectionDiagno data={profileData.profile} type={"local"} />
            ) : (
              <GeneralSectionDiagno
                localPatientData={fullInfo.patientData}
                data={diagnobotInfo.owner}
                type={"fetch"}
              />
            )}
            {/* <AboutYourTeeth/> */}
            {/* <KnowYou/> */}
            <Divider className={classes.divider} />

            <Typography variant={"h5"} className={classes.subtitle}>
              <Box fontWeight={700}>Reported conditions:</Box>
            </Typography>
            {diagnobotInfo.added_conditions.map((item) => (
              <Typography>
                {bull} {item}
              </Typography>
            ))}

            <Divider className={classes.divider} />
            <Typography variant={"h5"} className={classes.subtitle}>
              <Box fontWeight={700}>Questionnaire</Box>
            </Typography>

            {questionnaireRow}
          </CardContent>
          {profileData.profile.user.account_type.toLowerCase() === "doctor" && (
            <CardActions>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={handleClick}
              > 
                Verify
              </Button>
            </CardActions>
          )}
        </Card>
      </Container>
    </div>
  );
}
