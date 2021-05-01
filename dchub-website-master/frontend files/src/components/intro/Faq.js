import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import IntroHeader from "../intro/IntroHeader";
const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.main,
    //   marginTop: theme.spacing(24),
    width: "100%",
    height: "100%",
  },
  moto: {
    zIndex: "1",

    paddingTop: theme.spacing(12),
  },
  illustration: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "1",
  },
  icon: {
    margin: theme.spacing(4, 2),
    width: "40px",
  },
  title: {
    marginTop: theme.spacing(16),
    color:theme.palette.primary.main,
    fontSize:'26px',
    fontWeight:'700'
   },
  title02: {
    color:theme.palette.primary.main,
    fontSize:'26px',
    fontWeight:'700'
  },
  
  answer: {
     fontSize:'24px',
    // fontWeight:'700',
    marginBottom:theme.spacing(8),
  },

}));
export default function Faq() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction="column"
        // alignItems="center"
        className={classes.root}
      >
        <IntroHeader />
      <Container>

        <Typography gutterBottom   className={classes.title}  >
          1.Is this service available to both patients & specialists ?
        </Typography>
        <Typography className={classes.answer} gutterBottom>
          Yes. Our products are designed for patients and all type of dentists
          and we can make referrals depending on each dentist's preference
          setting.
        </Typography>
        <Typography gutterBottom    className={classes.title02}  >
          2.What if I don't agree with the diagnosis and treatment plan
          recommendation included in the report?{" "}
        </Typography>
        <Typography className={classes.answer} gutterBottom>
          All reports are subject to your final approval as a licensed dentist.
          You have the option to confirm, deny or edit diagnosis. Also, the AI
          lists all available treatment options so there is no one specific
          option allowing dentist to pick and choose the best option for their
          patients.
        </Typography>
        <Typography gutterBottom     className={classes.title02}>
          3.Is there a consultation fee charged to patients?
        </Typography>
        <Typography className={classes.answer}  gutterBottom>
          Patients have an option to choose a subscription plan depending on
          their individual need. They can choose a free plan to receive a
          limited evaluation or a paid plan for a more comprehensive evaluation
          as well as enjoy membership benefits at participating dentists.
        </Typography>
        <Typography gutterBottom     className={classes.title02}>
          4. How long does it take for the report to be generated?
        </Typography>
        <Typography className={classes.answer}  gutterBottom>
          The AI Analysis is completed within seconds. However, the reports must
          be confirmed by a dentist and as soon as it is confirmed a report can
          be generated.
        </Typography>
        <Typography gutterBottom     className={classes.title02}>
          5. Does DentistConsultationHub compete with my practice?
        </Typography>
        <Typography className={classes.answer}  gutterBottom>
          No. We do not compete with dentists, We help dentists grow their
          practices by streamlining the consultation process, educating patient
          and qualifying them before visiting a dentist.
        </Typography>
        </Container>

      </Grid>
    </>
  );
}
