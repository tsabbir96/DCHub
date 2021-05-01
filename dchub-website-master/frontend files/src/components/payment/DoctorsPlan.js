import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PriceItem from './PriceItem'

export default function DoctorsPlan() {
    return (
        <div>
              <Typography color="primary">
        <Box textAlign="center" fontWeight="600" fontSize="40px">
          Dentist Consultation Hub ( Beta Pricing for dentists )
        </Box>
      </Typography>
      <Grid container>
        <Grid item container justify="center" xs={12}>
          <PriceItem
            title={"Complete"}
            price={100}
            reccurence={"Monthly"}
            description={"All Teeth & Gums Evaluation"}
            allowedFeatures={[
              "Complete Evaluation of All Teeth & Gums",
              "AI Assisted X-ray Analysis",
              "AI Assisted Photo Evaluation",
              "AI Assisted Treatment Solution",
              "AI Assisted Fee Estimate",
            ]}
            notAllowed={[]}
          />
        </Grid>
      </Grid>
        </div>
    )
}
