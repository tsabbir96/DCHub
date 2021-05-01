import {
  Box,
  Button,
  Card,
  CardActions,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {

    padding:theme.spacing(0,2), 
    height:'520px',
    maxWidth:'460px',
    margin:theme.spacing(2,0), 
    // transform:'translateY(10%)'

  },
  field:{
    margin:theme.spacing(2, 0),
  },
  title:{
    margin:theme.spacing(2,2)
  }
}));

export default function ContactCard() {
  const classes = useStyles();

  return (
    <Card variant="elevation" elevation="6" className={classes.root}>
      <Typography
      className={classes.title}
      >
        <Box
        fontSize='24px'
        >Contact us </Box>
      </Typography>
      <TextField
        className={classes.field}
        fullWidth
        variant="outlined"
        label="Name"
      />
      <TextField
        className={classes.field}
        fullWidth
        variant="outlined"
        label="Email"
      />
      <TextField
        className={classes.field}
        fullWidth
        variant="outlined"
        label="Content"
        multiline
        rows="6"
      />
      <CardActions>
        <Button 
        variant='contained'
        color='primary'
        fullWidth
        >
          SEND
        </Button>
      </CardActions>
    </Card>
  );
}
