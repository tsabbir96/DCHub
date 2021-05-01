import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import xraylogo from '../../../assets/landing/xraylogo.webp' 
import snapcheck from '../../../assets/landing/snapchecklogo.webp' 
import diagnobot from '../../../assets/landing/diagnobot.webp'
import myhub from '../../../assets/landing/myhub.webp'
import dchub from '../../../assets/landing/dchub.webp'
import React from "react";
import FeatureElement from "./FeatureElement";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
  },
  title: {
    color: "lightgray",
    marginTop: theme.spacing(10),
  },
}));
export default function FeatureList() {
  const classes = useStyles();

  return (
    <div >
      <Typography variant="h6" className={classes.title}>
        <Box textAlign="center"> BEST IN CLASS</Box>
      </Typography>

      <Typography variant="h4" color="primary">
        <Box fontWeight="800" textAlign="center">
          Our Products
        </Box>
      </Typography>
      {/*FIRST GRID */}

      <Grid container justify='center'>
        <FeatureElement 
        logo={xraylogo}
        isSpecial={false} />
        <FeatureElement
        
        logo={snapcheck}

        isSpecial={false}/>
        <FeatureElement 
                logo={diagnobot}

        isSpecial={false}/>
      </Grid>

      {/*SECOND GRID */}

      <Grid container justify='center'>
        <FeatureElement                                 
        logo={dchub}


        isSpecial={true}/>
        <FeatureElement 
                        logo={myhub}

        isSpecial={false}/>
      </Grid>
    </div>
  );
}
