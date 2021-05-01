import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import company_l from "../../../assets/landing/company_l.svg";
import company_r from "../../../assets/landing/company_r.svg";
import drallendark from "../../../assets/landing/drallendark.webp";


const useStyles = makeStyles((th) => ({
  root: {
    height: 660,
  },
  grid: {
    height: "100%",
  },
  left: {
    backgroundImage: `url(${company_l})`,
    backgroundColor: "#EBEFFB",
  },
  right: {
    backgroundColor: th.palette.primary.main,

    backgroundImage: `url(${company_r})`,
  },
  videoContainer: {
    boxShadow: "0 4px 16px 4px rgba(0,0,0,.2)",
    padding: th.spacing(4),
    backgroundColor: "#fff",
    transform: "translateX(20%)",
  },
  title: {
    fontSize: 36,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 37,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 44,
    color: '#fff',
    lineHeight: '1.6'
  },
  signature: {
    fontSize: 18,
    fontWeight: 700,
    color: '#fff',
  }
}));
export default function DrAllenTalk() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        alignItems="center"
        justify="center"
        container
        className={classes.left}
        lg={6}
        sm={12}
      >
        <Grid item className={classes.videoContainer}>
          <ReactPlayer
            controls={true}
            light={drallendark}
            url={"https://www.youtube.com/watch?v=sE7s_cp-09Y"}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems="center"
        justify="center"
        className={classes.right}
        lg={6}
        sm={12}
      >
        <Grid item container xs={5}>
          <Typography className={classes.title}>
            OUR IDEA
            <br />
            YOUR COMPANY
          </Typography>

          <Typography className={classes.paragraph}>
              MAJORITY OF PATIENTS DELAY SEEING A DENTIST BECAUSE THE
              CONSULTATIONS ARE OFTEN INCONSISTENT CONFUSING, RUSHED, AND
              COSTLY. WE ARE DISRUPTING THE STATUS THROUGH THE POWER OF AI.
          </Typography>

          <Typography className={classes.signature}>
              Dr. Allen Nazeri
            <Box fontWeight="400" fontSize="16px">DDS | MBA | CEO/FOUNDER</Box>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
   
   
  );
}
