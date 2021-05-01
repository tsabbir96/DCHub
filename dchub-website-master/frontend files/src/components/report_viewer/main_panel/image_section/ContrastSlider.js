import { Box, Grid, makeStyles, Slider, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: theme.spacing(1, 1),
  },
  root: {
    width: "80px",
    margin:theme.spacing(0,2)
  },
}));

export default function ContrastSlider({ value, setValue }) {
  const classes = useStyles();
  const [localState, setLocalState] = React.useState(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" className={classes.root}>
      <Typography variant="caption">
        <Box textAlign='center'>
            Contrast
            </Box>
      </Typography>

      <Slider
        // marks
        valueLabelDisplay="auto"
        min={-50}
        max={50}
        value={localState}
        onChange={(event, value) => setLocalState(value)}
        onChangeCommitted={handleChange}
        aria-labelledby="continuous-slider"
      />
    </Grid>
  );
}
