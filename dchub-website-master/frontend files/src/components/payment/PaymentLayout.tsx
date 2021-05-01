import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PlanCard from "./PlanCard";

const useStyles = makeStyles((theme) => ({
  title: {
    // marginTop:theme.spacing(4),
    color: "white",
    width: "100%",
    height: "80px",
    padding: theme.spacing(2),
    margin: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.main,
  },
  moto: {
    marginBottom: theme.spacing(8),
  },
}));

const PaymentLayout = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid xs={12} container>
        <Typography
          className={classes.title}
          variant={"h4"}
          // color = {'primary'}
        >
          <Box fontWeight={900} textAlign={"center"}>
            Our pricing plan
          </Box>
        </Typography>
      </Grid>

      <Typography
        variant={"h5"}
        className={classes.moto}
        color={"textSecondary"}
      >
        <Box fontWeight={700} textAlign={"center"}>
          Pioneer of AI assisted Dental Consultation Platform for Patients &
          Dentists
        </Box>
      </Typography>
      <Grid container>
        <Grid item xs={6} sm={6} md={3}>
          <PlanCard
            title={"Free Consultation"}
            desc={"Lifetime Free Consultation"}
            price={"0"}
            allowedFeatures={[
              "One condition evaluation /6 months",
              "AI supported xray analysis",
              "AI supported photo evaluation",
              "AI supported fee estimate",
              "Free access to DCHub",
              "Free access to Myhub(store and share data)"

            ]}
       
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <PlanCard
            title={"Individual"}
            desc={"Complete Evaluation ( Report ) 2x/Yr"}
            allowedFeatures={[
              

              "Comprehensive evaluation /1 year",
              "AI supported xray analysis",
              "AI supported photo evaluation",
              "AI supported fee estimate",
              "AI supported treatment solution",
              "Complete access to DCHub",
              "Complete access to Myhub",
              "Dentist matching",
              "Explore payment options",
            ]}
      
            
            price={"99"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <PlanCard
            title={"Family Dental Plan"}
            desc={"For a family of (4)"}
            allowedFeatures={[
              

              "Comprehensive evaluation /1 year",
              "AI supported xray analysis",
              "AI supported photo evaluation",
              "AI supported fee estimate",
              "AI supported treatment solution",
              "Complete access to DCHub",
              "Complete access to Myhub",
              "Dentist matching",
              "Explore payment options",


            ]}
      
            
            price={"199"}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <PlanCard
            title={"VIDP-Individual"}
            desc={"Pre & post treatment evaluation"}
            allowedFeatures={[
              

              "Comprehensive evaluation /1 year",
              "AI supported xray analysis",
              "AI supported photo evaluation",
              "AI supported fee estimate",
              "AI supported treatment solution",
              "Complete access to DCHub",
              "Complete access to Myhub",
              "Dentist matching",
              "Explore payment options",
              "Onboarding video consultation"


            ]}
       
            
            price={"249"}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default PaymentLayout;
