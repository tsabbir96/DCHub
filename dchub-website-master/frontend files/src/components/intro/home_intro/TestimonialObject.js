import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
const useStyles = makeStyles((theme) => ({
  testimonialText: {
    color: 'white',
  },
  root:{
    padding:theme.spacing(2)
  }
  
}));
export default function TestimonialObject() {
  const classes = useStyles();

  return (
    <div 
    className={classes.root}>
        <Grid container >

        <Rating name="rating" defaultValue={5} readOnly />


        </Grid>
      <Typography className={classes.testimonialText} >
       
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergt Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed dia
      
      </Typography>

      <Typography>
        <Box>Jenkins Chris(Dentist)</Box>
      </Typography>
    </div>
  );
}
