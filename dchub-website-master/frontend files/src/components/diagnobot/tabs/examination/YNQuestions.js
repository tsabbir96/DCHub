import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import React from "react";
import idea from "../../../../assets/diagnobot/suggestion.svg";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import {
  loadInitialQuestion,
  loadQuestion,
} from "../../../context/diagnobot/Diagnobot_actions";
import {
  SET_ASKED_QUESTIONS,
  SET_PROVIDED_ANSWERS,
  SET_PROVIDED_SUGGESTIONS,
} from "../../../context/diagnobot/diagnobot_types";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    padding: theme.spacing(0, 8),
    marginTop: theme.spacing(4),

    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontWeight: "700",
    paddingTop: theme.spacing(4),
    textAlign: "center",
  },

  card: {
    width: "150px",
    height: "150px",
    margin: theme.spacing(8, 2),
  },
  checkIcon: {
    color: green[500],
    width: "100%",
    height: "60px",
    padding: theme.spacing(1),
  },
  closeIcon: {
    color: red[500],
    width: "100%",
    height: "60px",
    padding: theme.spacing(1),
  },
  idk: {
    color: theme.palette.text.secondary,
    width: "100%",
    height: "60px",
    padding: theme.spacing(1),
  },

  CardActionArea: {
    height: "100%",
  },
  imgSrc: {
    height: "260px",
    width: "260px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  divImgSrc: {
    padding: theme.spacing(1, 0),
    width: "auto",
    justifyContent: "center",
    display: "flex",
  },
  description: {
    backgroundColor: theme.palette.background.default,
    textAlign: "justify",
    lineHeight: "150%",
    padding: theme.spacing(2),
  },
  image: {
    margin: theme.spacing(2),
    height: "60px",
    width: "60px",
  },
  suggcard: {
    backgroundColor: theme.palette.background.default,
  },
  textSuggestion: {
    fontWeight: "800",
    fontSize: "24px",
  },
}));

//###########################################
//###########################################
//###########################################
//FUNCTION
//###########################################
//###########################################
//###########################################
export default function QuestionsCheck({
  setDisabled,
  currentQandA,
  setCurrentQandA,
}) {
  //###########################################
  //DECLARING VARIABLES
  //###########################################

  const classes = useStyles();
  const [diagnostate, dispatch] = useDiagnoState();
  const [loading, setLoading] = React.useState(false);
  const [currentConditionId, setCurrentConditionId] = React.useState(1);
  const [tempSuggestion, setTempSuggestion] = React.useState("");
  //###########################################

  //###########################################
  //HANDLE CHOOSING AN ANSWER
  //###########################################
  const handleClick = (index, answer) => {
    dispatch(
      SET_ASKED_QUESTIONS,
      diagnostate.askedQuestions.push(currentQandA.title)
    );
    // dispatch(
    //   SET_PROVIDED_SUGGESTIONS,
    //   diagnostate.providedSuggestions.push(currentQandA.description)
    // );
    dispatch(SET_PROVIDED_ANSWERS, diagnostate.providedAnswers.push(answer));

    loadQuestion(index).then((data) => {
      if (
        data.title.toLowerCase() === "end" &&
        currentConditionId < diagnostate.conditions.length
      ) {
        setCurrentConditionId(currentConditionId + 1);
        setTempSuggestion(data.description);
        ///////////////////////////////////////////////
        dispatch(
          SET_PROVIDED_SUGGESTIONS,
          diagnostate.providedSuggestions.push(data.description)
        );
        ///////////////////////////////////////////////
        setLoading(true);

        loadInitialQuestion(
          diagnostate.conditions[currentConditionId].questions[0].title
        ).then((res02) => {
          if (res02.status === 200) {
            setCurrentQandA(res02.data[0]);
            setLoading(false);
            // setTempSuggestion(data[0].description);
          }
        });
      } else {
        ///////////////////////////////////////////////
        dispatch(
          SET_PROVIDED_SUGGESTIONS,
          diagnostate.providedSuggestions.push(data.description)
        );
        ///////////////////////////////////////////////
        setCurrentQandA(data);
        setTempSuggestion("");
      }
    });
  };
  //###########################################

  function ConditionalOutput() {
    if (
      currentQandA.title.toLowerCase() === "end" &&
      currentConditionId >= diagnostate.conditions.length
    ) {
      setDisabled(false);
      return (
        <>
          {currentQandA.description !== "" && (
            <Card variant="outlined" className={classes.suggcard}>
              <Grid container direction="column">
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>
                <Typography
                  dangerouslySetInnerHTML={{ __html: currentQandA.description }}
                  className={classes.description}
                />
              </Grid>
            </Card>
          )}

          <Typography variant="subtitle1" className={classes.title}>
            Questionnaire complete, please click next to go to following step
          </Typography>
        </>
      );
    } else {
      return (
        <>
          {currentQandA.description !== "" && (
            <Card className={classes.suggcard} variant="outlined">
              <Grid container direction="column">
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>

                <Typography
                  color="textSecondary"
                  dangerouslySetInnerHTML={{ __html: currentQandA.description }}
                  className={classes.description}
                />
              </Grid>
            </Card>
          )}

          {tempSuggestion !== "" && (
            <Card className={classes.suggcard} variant="outlined">
              <Grid container direction="column">
                <Grid container alignItems="center" item>
                  <img src={idea} alt="idea" className={classes.image} />
                  <Typography className={classes.textSuggestion}>
                    Suggestion:
                  </Typography>
                </Grid>
                <Typography
                  color="textSecondary"
                  dangerouslySetInnerHTML={{ __html: tempSuggestion }}
                  className={classes.description}
                />
              </Grid>
            </Card>
          )}

          <Typography className={classes.title} variant="subtitle1">
            {currentQandA.title}
          </Typography>
        </>
      );
    }
  }

  return currentQandA === null || currentQandA === undefined || loading ? (
    <h5>Loading</h5>
  ) : (
    <>
      {currentQandA.image === null ? (
        <div></div>
      ) : (
        <div className={classes.divImgSrc}>
          <img
            className={classes.imgSrc}
            src={currentQandA.image}
            alt={"condition Description"}
          />
        </div>
      )}

      <Typography variant={"h6"} className={classes.title}>
        <ConditionalOutput />
      </Typography>
      <Grid container justify={"center"}>
        {currentQandA.answers.map((item) =>
          item.answer.toLowerCase() === "yes" ? (
            <Card
              variant="outlined"
              className={classes.card}
              onClick={() => handleClick(item.next_question, item.answer)}
            >
              <CardActionArea className={classes.CardActionArea}>
                <CheckIcon className={classes.checkIcon} />
                <Typography>
                  <Box textAlign={"center"} fontWeight={700}>
                    {item.answer}
                  </Box>
                </Typography>
              </CardActionArea>
            </Card>
          ) : item.answer.toLowerCase() === "no" ? (
            <Card
              variant="outlined"
              className={classes.card}
              onClick={() => handleClick(item.next_question, item.answer)}
            >
              <CardActionArea className={classes.CardActionArea}>
                <CloseIcon className={classes.closeIcon} />
                <Typography>
                  <Box textAlign={"center"} fontWeight={700}>
                    {item.answer}
                  </Box>
                </Typography>
              </CardActionArea>
            </Card>
          ) : (
            <Card
              variant="outlined"
              className={classes.card}
              onClick={() => handleClick(item.next_question, item.answer)}
            >
              <CardActionArea className={classes.CardActionArea}>
                <SwapHorizIcon className={classes.idk} />
                <Typography>
                  <Box fontWeight={700} textAlign={"center"}>
                    {item.answer}
                  </Box>
                </Typography>
              </CardActionArea>
            </Card>
          )
        )}
      </Grid>
    </>
  );
}
