import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PriceItemInfo from "./PriceItemInfo";

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
  container: {},
}));
export default function Pricing() {
  const classes = useStyles();

  const [state, setState] = React.useState(false);

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Typography color="primary">
          <Box textAlign="center" fontWeight="600" fontSize="40px">
            Dentist Consultation ( Beta User Pricing )
          </Box>
        </Typography>
        <Grid container>
          <Grid item container justify="center" xs={12}>
          <PriceItemInfo
            title={"GOLD"}
            price={10}
            reccurence={"Per Evaluation"}
            description={"Limited Evaluation"}
            allowedFeatures={[
              "Limited Mouth Evaluation ( One condition or tooth)",
              "AI supported X-ray Analysis",
              "AI supported Photo Evaluation",
              "Written Report",
              "Dental Fee Estimate",
              "Dentist Matching",
              "Payment Options",
            ]}
            notAllowed={["Video Face to Face Consult",
            "Post-Treatment Evaluation",
            "10% Dentist Discount",
            "Dentist On Call",

          ]}
          />
          <PriceItemInfo
            title={"PLATINUM"}
            price={50}
            reccurence={"Per Evaluation"}
            description={"Complete Evaluation & Video Consult"}
            allowedFeatures={[
              "Complete Mouth Evaluation",
              "AI supported X-ray Analysis",
              "AI supported Photo Evaluation",
              "Written Report",
              "Dental Fee Estimate",
              "Dentist Matching",
              "Payment Options",
              "Video Face to Face Consult",
              'Post-Treatment Evaluation'
            ]}
            notAllowed={[
              "10% Dentist Discount",
              "Dentist On Call",


            ]}
          />
          <PriceItemInfo
            title={"DIAMOND"}
            price={100}
            reccurence={"Annually"}
            description={"Complete Evaluation & Video Consult"}
            allowedFeatures={[
              "Complete Mouth Evaluation",
              "AI supported X-ray Analysis",
              "AI supported Photo Evaluation",
              "Written Report",
              "Dental Fee Estimate",
              "Dentist Matching",
              "Payment Options",
              "Video Face to Face Consult",
              'Post-Treatment Evaluation',
              "10% Dentist Discount",
              "Dentist On Call",

            ]}
            notAllowed={[]}
          />
          <PriceItemInfo
            title={"VIP"}
            price={0}
            reccurence={""}
            description={"Contact us"}
            allowedFeatures={[
              // "Complete Mouth Evaluation",
              // "AI supported X-ray Analysis",
              // "AI supported Photo Evaluation",
              // "Written Report",
              // "Dental Fee Estimate",
              // "Dentist Matching",
              // "Payment Options",
              // "Video Face to Face Consult",
              // 'Post-Treatment Evaluation',
              // "10% Dentist Discount",
              // "Dentist On Call",

            ]}
            notAllowed={[]}
          />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
