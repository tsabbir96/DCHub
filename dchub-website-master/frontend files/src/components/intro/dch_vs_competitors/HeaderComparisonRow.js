import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function ComparisonRow() {
  return (
    <Grid container justify="space-between">
      <Grid item xs={4}>
        <Typography variant="h6">
          <Box fontWeight="800" textAlign="left">
            Feature
          </Box>
        </Typography>
      </Grid>
      {/* <Divider orientation="vertical" flexItem /> */}

      <Grid item xs={4}>
        <Typography variant="h6">
          <Box fontWeight="800" textAlign="left">
            DCHub
          </Box>
        </Typography>
      </Grid>
      {/* <Divider orientation="vertical" flexItem /> */}

      <Grid item xs={4}>
        <Typography variant="h6">
          <Box fontWeight="800" textAlign="left">
            All competitors combined
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
