import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";
import { useHistory } from "react-router";
import step01 from "../../../assets/landing/step.webp";
import step02 from "../../../assets/landing/step02.webp";
import step03 from "../../../assets/landing/step03.webp";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },

  stepsTitle: {
    color: "white",
    width: "100%",
    height: "80px",

    marginTop: theme.spacing(16),
    backgroundColor: theme.palette.primary.main,
  },

  boxStyle: {
    marginTop: theme.spacing(2),
  },
  image: {
    width: "100%",
    objectFit: "cover",
    height: "100vh",
  },
  desc: {
    padding: theme.spacing(6, 16),
  },
  icon: {
    width: "80px",
    height: "80px",
    color: theme.palette.primary.light,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  cardsGrid: {
    margin: theme.spacing(8, 0),
  },
  title: {
    marginTop: theme.spacing(16),
    color: "lightgray",
  },
  img: {
    height: "280px",
    maxHeight: "280px",
    width: "340px",
    maxWidth: "340px",
    objectFit: "cover",
    marginRight: theme.spacing(12),
  },
  imgGrid: {
    marginTop: theme.spacing(8),
  },
  point: {
    width: "60px",
    height: "60px",
    color: "#EBEFFB",
  },
  hr: {
    height: "4px",
    // marginRight: theme.spacing(2),
    width: theme.spacing(53),
    backgroundColor: theme.palette.primary.main,
  },
  pointsGrid: {
    marginTop: theme.spacing(4),
  },
  number: {
    position: "absolute",
    transform: "translate(25px, 20px)",
  },
  descGrid: {
    padding: theme.spacing(0, 5),
  },
  btnGrid: {
    marginTop: theme.spacing(8),
  },
  cat: {
    borderRadius: 0,
  },
}));

export default function Steps() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <Grid container direction="column">
        <Typography className={classes.title} gutterBottom>
          <Box fontSize="24px" textAlign="center">
            THREE SIMPLE STEPS
          </Box>
        </Typography>

        <Typography color="primary" variant="h3">
          <Box fontWeight="600" textAlign="center">
            How it works?
          </Box>
        </Typography>

        <Grid container className={classes.imgGrid} justify="center">
          <img
            className={classes.img}
            src={step02}
            loading="lazy"
            alt="step02"
          />
          <img
            className={classes.img}
            src={step03}
            loading="lazy"
            alt="step03"
          />
          <img
            className={classes.img}
            src={step01}
            loading="lazy"
            alt="step01"
          />
        </Grid>

        <Grid
          container
          className={classes.pointsGrid}
          justify="center"
          alignItems="center"
        >
          <div>
            <Typography className={classes.number}>1</Typography>

            <FiberManualRecordIcon className={classes.point} />
          </div>
          <hr className={classes.hr} />

          <div>
            <Typography className={classes.number}>2</Typography>
            <FiberManualRecordIcon className={classes.point} />
          </div>

          <hr className={classes.hr} />

          <div>
            <Typography className={classes.number}>3</Typography>
            <FiberManualRecordIcon className={classes.point} />
          </div>
        </Grid>

        <Grid container justify="center">
          <Grid
            xs={3}
            className={classes.descGrid}
            direction="column"
            item
            container
          >
            <Typography variant="h5" color="primary">
              <Box fontWeight="500" textAlign="center">
                Join us for free
              </Box>
            </Typography>

            <Typography color="textSecondary">
              <Box textAlign="center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                tak
              </Box>
            </Typography>
          </Grid>

          <Grid
            xs={3}
            className={classes.descGrid}
            direction="column"
            item
            container
          >
            <Typography variant="h5" color="primary">
              <Box fontWeight="500" textAlign="center">
                Upload your photo
              </Box>
            </Typography>

            <Typography color="textSecondary">
              <Box textAlign="center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                tak
              </Box>
            </Typography>
          </Grid>

          <Grid
            xs={3}
            className={classes.descGrid}
            direction="column"
            item
            container
          >
            <Typography variant="h5" color="primary">
              <Box fontWeight="500" textAlign="center">
                Receive the reports
              </Box>
            </Typography>

            <Typography color="textSecondary">
              <Box textAlign="center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                tak
              </Box>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" className={classes.btnGrid}>
          <Button
            className={classes.cat}
            variant="outlined"
            onClick={handleLogin}
            color="primary"
          >
            Make Your Free Consultation Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
