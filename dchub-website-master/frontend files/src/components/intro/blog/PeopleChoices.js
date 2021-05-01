import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";
import PeopleChoiceItem from "./PeopleChoiceItem";
const useStyles = makeStyles((theme) => ({
  TextField: {
    borderRadius: 0,
 
  },
 
  
}));

export default function PeopleChoices() {
  const classes = useStyles();

  return (
    <div>
      <Typography>Subscribe to our mailing list</Typography>
      <Grid container


      >
        <TextField
          className={classes.TextField}

          size="small" 
          variant="outlined"
          label="Enter your email"
          color="primary"
        />
        <Button
          className={classes.TextField}
          variant="contained"
          color="primary"
        >
          Subscribe
        </Button>
      </Grid>
   
      <Typography>People's choice</Typography>
        <PeopleChoiceItem/>
        <PeopleChoiceItem/>
        <PeopleChoiceItem/>

    </div>
  );
}
