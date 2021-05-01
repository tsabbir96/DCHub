import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { lazy, Suspense } from "react";
import { useHistory } from "react-router";
import arrow from "../../../assets/landing/arrow.svg";
import doc from "../../../assets/landing/doc.webp";
import man from "../../../assets/landing/man.webp";
const ReactPlayer = lazy(() => import("react-player"));



const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(4),
    overflow: "hidden",
  },
  player: {
    height: "800px",
    width: "800px",
  },
  title: {
    // marginTop:theme.spacing(4),
    color: "white",
    width: "100%",
    height: "80px",
    padding: theme.spacing(2),
    margin: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.main,
  },
  illustration: {
    height: "200px",
    width: "200px",
    position: "absolute",
    transform: "translateX(600px)  translateY(540px)",
    zIndex: "0",
  },
  videoGrid: {
    zIndex: "20",
  },

  cat: {
    margin: theme.spacing(4, 0),
  },
  illustration02: {
    height: "200px",
    width: "200px",
    position: "absolute",
    transform: "translateX(-680px)  translateY(520px)",
    zIndex: "0",
  },
  videoGrid2: {
    zIndex: "20",
    marginTop: theme.spacing(28),
    marginLeft: theme.spacing(8),
  },
  divider: {
    marginTop: theme.spacing(20),
  },
  ourgoalText: {
    display: "flex",
    color: "lightgray",
    alignItems: "center",
  },
  hr: {
    height: "6px",
    width: "60%",
    marginLeft: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
  hr02: {
    height: "6px",
    width: "60%",
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  helppatient: {
    width: "75%",
  },
  firstconsultation: {
    marginTop: theme.spacing(8),
    width: "260px",
    borderRadius: "0",
    textTransform: "none",

    padding: theme.spacing(2, 2),
  },
  arrow: {
    position: "absolute",
    transform: "translate(-50px, 80px)",
    fill: theme.palette.primary.main,
    height: "30px",
  },
  btn02: {
    marginLeft: "auto",
    marginRight: theme.spacing(35),
  },
}));
export default function Help02() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" className={classes.videoGrid2}>
        <Grid
          xs={6}
          item
          container
          className={classes.videoGrid}
          direction="column"
        >
            <Suspense fallback={<h4>Loading...</h4>}>
            <ReactPlayer
            height="500px"
            width="80%"
            className={classes.video}
            controls={true}
            light={man}
            url={
              "https://video.wixstatic.com/video/af59a8_ec0319edd84e465cb993a09d47e65c60/720p/mp4/file.mp4"
            }
          />
            </Suspense>
      
        </Grid>

        <Grid xs={6} item container direction="column">
          <Typography className={classes.ourgoalText}>
            <Box fontSize="24px">OUR GOAL</Box>
            <hr className={classes.hr} />
          </Typography>

          <Typography gutterBottom color="primary" variant="h4">
            <Box fontWeight="600">How we help patients?</Box>
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.helppatient}
            variant="h6"
          >
            <Box>
              Helping you find an unbiased, and reliable treatment solution when
              facing dental problems, through the power of Artificial
              intelligence. Majority of patients delay seeing a dentist because
              the consultations are often inconsistent confusing, rushed and
              costly. We are disrupting the status quo through the power of AI
            </Box>
          </Typography>

          <div>
            <img className={classes.arrow} src={arrow} alt="arrow" />
            <Button
              className={classes.firstconsultation}
              color="primary"
              variant="outlined"
              onClick={handleLogin}

            >
              Make your first consultation
              
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* 
                    ############################################
                    HOW WE HELP DOCTORS:
                    ############################################
                    */}

      <Grid container justify="space-between" className={classes.videoGrid2}>
        <Grid xs={6} item container direction="column">
          <Typography className={classes.ourgoalText}>
            <hr className={classes.hr02} />

            <Box fontSize="24px">OUR GOAL</Box>
          </Typography>

          <Typography gutterBottom color="primary" variant="h4">
            <Box fontWeight="600">How we help Doctors?</Box>
          </Typography>
          <Typography
            color="textSecondary"
            className={classes.helppatient}
            variant="h6"
          >
            <Box>
              We Help dentists mitigate the risk of misdiagnosis, increase
              productivity while matching them to highly qualified and motivated
              patients using AI algorithm.
            </Box>
          </Typography>

          <div className={classes.btn02}>
            <img className={classes.arrow} src={arrow} alt="arrow" />
            <Button
              className={classes.firstconsultation}
              color="primary"
              variant="outlined"
              onClick={handleLogin}

            >
              Join us as a dentist
            </Button>
          </div>
        </Grid>

        <Grid item container xs={6}>
        <Suspense fallback={<h4>Loading...</h4>}>

          <ReactPlayer
            height="500px"
            width="80%"
            className={classes.video}
            controls={true}
            light={doc}
            url={
              "https://video.wixstatic.com/video/af59a8_0c010f381cb54a75a3b12a24ffc4967c/720p/mp4/file.mp4"
            }
          />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
}
