import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import chat_face from "../../../../assets/commun/chat_face.svg";
import { create_activity_history } from "../../../context/activity/ActivityActions";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { SET_SUBMISSION_ID } from "../../../context/diagnobot/diagnobot_types";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import { create_empty_submission } from "../../../context/submission/SubmissionsActions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  illustration: {
    height: "100%",
    marginLeft: "auto",
    display: "block",
  },
  paragraph: {
    maxWidth: "80%",
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(2),
    fontWeight: "800",
    fontSize: "26px",
  },
}));

const generateMessage = (type, classes) => {
  if (type.toLowerCase() === "diagnobot") {
    return (
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        item
        xs={6}
      >
        <Typography variant={"h6"} className={classes.title}>
          Welcome to DiagnoBot!
        </Typography>
        <Typography className={classes.paragraph}>
          <Box textAlign={"justify"}>
            DiagnoBot is our virtual nurse. She will ask you some questions and
            give you some basic information and suggest probable treatment
            recommendation. DiagnoBot is Free and you can use it for various
            dental conditions.
          </Box>
        </Typography>
      </Grid>
    );
  } else if (type === "CONSULTATION") {
    return (
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        item
        xs={6}
      >
        <Typography variant={"h6"} className={classes.title}>
          Welcome to Limited analysis!
        </Typography>
        <Typography className={classes.paragraph}>
          <Box textAlign={"justify"}>
            In this section, you can get an AI evaluation by uploading your
            documents and X-rays. This tool will analyse a single tooth or a
            condition. Select Complete evaluation if consulting about multiple
            teeth or the entire mouth. For both types of evaluation, you will
            receive a written report.see example
          </Box>
        </Typography>
      </Grid>
    );
  } else if (type === "LIMITED_EVALUATION") {
    return (
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        item
        xs={6}
      >
        <Typography variant={"h6"} className={classes.title}>
          Welcome to Limited evaluation!
        </Typography>
        <Typography className={classes.paragraph}>
          <Box textAlign={"justify"}>
            In this section, you can get a limited AI evaluation by uploading
            your documents and X-rays. This tool will make a limited analysis
            about a single tooth or a condition. For any type of evaluation, you
            will receive a written report. 
          </Box>
        </Typography>
      </Grid>
    );
  }
};
export default function IntroTab({ type, value, setValue }) {
  const classes = useStyles();
  const [profileData] = useProfileData();
  const [diagnostate, dispatch] = useDiagnoState();
  const handleClick = () => {
    if (diagnostate.submissionId === 0) {
      create_empty_submission(
        null,
        null,
        null,
        null,
        null,
        "mysub",
        profileData.profile.user.id,
        "INCOMPLETE",
        type
      ).then((data) => {
        if (data.status === 201) {
          create_activity_history(
            "created a new submission",
            profileData.profile.user.id,
            "CREATE"
          ).then((res02) => {
            if (res02.status === 201) {
              dispatch({
                type: SET_SUBMISSION_ID,
                payload: (diagnostate.submissionId = data.data.id),
              });
              setValue(value + 1);
            }
          });
        }
      });
    } else {
      setValue(value + 1);
    }
  };

  let messageTorRender = generateMessage(type, classes);
  return (
    <Card className={classes.root} variant="outlined">
      <Grid container>
        {messageTorRender}
        <Grid container justify="center" item xs={6}>
          <img
            className={classes.illustration}
            src={chat_face}
            alt="welcome_img"
          />
        </Grid>
      </Grid>

      <Divider className={classes.divider} />
      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleClick}
          variant={"contained"}
          color={"primary"}
        >
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
