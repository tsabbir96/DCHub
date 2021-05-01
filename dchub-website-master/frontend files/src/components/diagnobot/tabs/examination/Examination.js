import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { loadInitialQuestion } from "../../../context/diagnobot/Diagnobot_actions";
import {
  SET_ASKED_QUESTIONS,
  SET_DIAGNO_ID,
  SET_PROVIDED_ANSWERS,
  SET_PROVIDED_SUGGESTIONS
} from "../../../context/diagnobot/diagnobot_types";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import {
  updateDiagnobot,
  update_submission_diagnobot,
  update_submission_diagnobot_for_diagnobot
} from "../../../context/submission/SubmissionsActions";
import BackDialogExamination from "./BackDialogExamination";
import YNQuestions from "./YNQuestions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 4),
  },
  cardContent: {
    // width: '80%',
  },
  divider: {
    marginTop: theme.spacing(6),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
}));
 
const Examination = ({ value, setValue, type }) => {
  //###########################################
  //DECLARING VARIABLES
  //###########################################
  const [diagnostate, dispatch] = useDiagnoState();
  const [profileData] = useProfileData();
  const [isError, setisError] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [currentQandA, setCurrentQandA] = React.useState(null);
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  //###########################################
  //USEFFECT LOGIC
  //###########################################
  React.useEffect(() => {
    dispatch(SET_ASKED_QUESTIONS, (diagnostate.askedQuestions = []));
    dispatch(SET_PROVIDED_SUGGESTIONS, (diagnostate.providedSuggestions = []));

    dispatch(SET_PROVIDED_ANSWERS, (diagnostate.providedAnswers = []));

    if (typeof diagnostate.conditions[0] === "undefined") {
      setisError(true);
    } else {
      loadInitialQuestion(diagnostate.conditions[0].questions[0].title).then(
        (res) => {
           if (res.status === 200) {
            setCurrentQandA(res.data[0]);
          }
        }
      );
    }
  }, []);

  //###########################################
  //HANDLE BACK BUTTON CLICK
  //###########################################

  const handleBackClick = () => {
    setOpenDialog(true);
  };
  //###########################################
  //HANDLE SUBMISSION CLICK
  //###########################################
  const handleClick = () => {
    const owner_id = profileData.profile.user.id;
    const verifier_id = null;
    const conditionnames = [];
    diagnostate.conditions.map((item) => conditionnames.push(item.name));
    const added_conditions = conditionnames;
    const added_questions = diagnostate.askedQuestions;
    const added_recommendations = diagnostate.providedSuggestions;
  
    const added_answers = diagnostate.providedAnswers;
    const verification_date = null;
    let status = "PENDING";
    const nbr_issues = conditionnames.length;
    const report = "";
    if (type === "DIAGNOBOT") {
      status = "READY";
      if (diagnostate.diagnoId === 0) {
        update_submission_diagnobot_for_diagnobot(
          diagnostate.submissionId,
          {
            verification_date,
            owner_id,
            verifier_id,
            status,
            nbr_issues,
            added_conditions,
            added_questions,
            added_answers,
            added_recommendations,
            report,
          },
          status
        ).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.diagnobot.id),
            });
            setValue(value + 1);
          }
        });
      } else {
        const id = diagnostate.diagnoId;
        updateDiagnobot({
          id,
          status,
          nbr_issues,
          added_conditions,
          added_questions,
          added_answers,
          added_recommendations,

          report,
        }).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.id),
            });
            setValue(value + 1);
          }
        });
      }
    } else if (type === "CONSULTATION") {
      if (diagnostate.diagnoId === 0) {
        update_submission_diagnobot(diagnostate.submissionId, {
          verification_date,
          owner_id,
          verifier_id,
          status,
          nbr_issues,
          added_conditions,
          added_questions,
          added_answers,
          added_recommendations,

          report,
        }).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.diagnobot.id),
            });
            setValue(value + 1);
          }
        });
      } else {
        const id = diagnostate.diagnoId;
        updateDiagnobot({
          id,
          status,
          nbr_issues,
          added_conditions,
          added_questions,
          added_answers,
          added_recommendations,

          report,
        }).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.id),
            });
            setValue(value + 1);
          }
        });
      }
    } else if (type === "LIMITED_EVALUATION") {
      if (diagnostate.diagnoId === 0) {
        update_submission_diagnobot(diagnostate.submissionId, {
          verification_date,
          owner_id,
          verifier_id,
          status,
          nbr_issues,
          added_conditions,
          added_questions,
          added_answers,
          added_recommendations,

          report,
        }).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.diagnobot.id),
            });
            setValue(value + 1);
          }
        });
      } else {
        const id = diagnostate.diagnoId;
        updateDiagnobot({
          id,
          status,
          nbr_issues,
          added_conditions,
          added_questions,
          added_answers,
          added_recommendations,

          report,
        }).then((data) => {
          if (data.status === 200) {
            dispatch({
              type: SET_DIAGNO_ID,
              payload: (diagnostate.diagnoId = data.data.id),
            });
            setValue(value + 1);
          }
        });
      }
    }
  };

  //###########################################
  //handleClose dialog
  //###########################################

  const handleClose = (value) => {
    setOpenDialog(false);
  };

  //###########################################
  //RETURN FUNCTION
  //###########################################
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <YNQuestions
          setDisabled={setDisabled}
          currentQandA={currentQandA}
          setCurrentQandA={setCurrentQandA}
        />

        {isError && <h4>no Condition was chosen</h4>}
        <BackDialogExamination
          value={value}
          setValue={setValue}
          handleClose={handleClose}
          open={openDialog}
        />
      </CardContent>

      <Divider className={classes.divider} />

      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleBackClick}
          variant={"outlined"}
          color={"primary"}
        >
          Back
        </Button>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant={"contained"}
          color={"primary"}
          disabled={disabled}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};
export default Examination;
