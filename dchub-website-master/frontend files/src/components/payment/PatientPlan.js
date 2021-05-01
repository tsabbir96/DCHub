import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import PriceItem from "./PriceItem";

export default function PatientPlan() {
  return (
    <div>
      <Typography color="primary">
        <Box textAlign="center" fontWeight="600" fontSize="40px">
          Dentist Consultation Hub ( Beta Pricing for patients )
        </Box>
      </Typography>
      <Grid container>
        <Grid item container justify="center" xs={12}>
          <PriceItem
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
          <PriceItem
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
          <PriceItem
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
          <PriceItem
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
    </div>
  );
}
