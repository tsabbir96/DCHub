import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
  },
  icon: {
    color: green["A700"],
  },
  closeIcon: {
    color: red["A700"],
  },
  height:{
      height:'40px'
  }
}));
export default function ComparisonRow({ feature, us, them }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.height} alignItems='center' justify="space-between">
      <Grid item xs={4}>
        <Typography>
          <Box textAlign="left">{feature}</Box>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.div}>
          <CheckIcon className={classes.icon} />
          <Typography>
            <Box textAlign="center">{us}</Box>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.div}>
          {them === "Yes" ? (
            <CheckIcon className={classes.icon} />
          ) : (
            <CloseIcon className={classes.closeIcon} />
          )}
          <Typography>
            <Box textAlign="center">{them}</Box>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
