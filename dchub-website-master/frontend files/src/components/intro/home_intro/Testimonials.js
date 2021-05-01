import { Button, ButtonBase, Grid, makeStyles, MobileStepper } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";
import doulequotes from "../../../assets/landing/double_quotes.svg";
import pattern from "../../../assets/landing/pattern.svg";
import TestimonialObject from "./TestimonialObject";
const useStyles = makeStyles((theme) => ({
  testimonialGrid: {
    backgroundColor: theme.palette.primary.main,
  },
  pattern: {
    width: "100%",
    height: "36px",
  },
  pattern02: {
    width: "100%",
    height: "36px",
    marginTop: "auto",
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "50%",
    padding: theme.spacing(1),
  },
  doulequotes: {
    width: "6%",
    height: "6%",
    position: "absolute",
    transform: "translateX(-485%) translateY(-50%)",
  },
  doulequotes02: {
    width: "6%",
    height: "6%",
    position: "absolute",
    transform: "translateX(485%) translateY(600%)",
  },
  root: {
    marginTop: theme.spacing(16),
    height: "360px",
  },
}));
export default function Testimonials() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={1} container justify="center" alignItems="center">
        <ButtonBase className={classes.icon} onClick={handleBack} disabled={activeStep === 0}>
          
          <ArrowBackIcon  />
        </ButtonBase>
      </Grid>
      <Grid container item direction='column' xs={7}
      justify='center'
      alignItems='center'
      >

     <Grid
        className={classes.testimonialGrid}
        justify="center" 
        container
        item
        xs={12}
      >
        <img className={classes.doulequotes} src={doulequotes} alt="pattern" />

        <img className={classes.pattern} src={pattern} alt="pattern" />

        <TestimonialObject />
        <img
          className={classes.doulequotes02}
          src={doulequotes}
          alt="pattern"
        />

        <img className={classes.pattern02} src={pattern} alt="pattern" />
 
      </Grid>

      
      <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      // className={classes.root}   
    />
      </Grid>
     
      <Grid item xs={1} container justify="center" alignContent="center">
        <ButtonBase  disabled={activeStep === 5} onClick={handleNext} className={classes.icon}  >
          <ArrowForwardIcon />
        </ButtonBase>
      </Grid>

    </Grid>
  );
}
