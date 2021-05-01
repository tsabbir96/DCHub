import { ButtonBase, Divider, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CreateIcon from "@material-ui/icons/Create";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import React from "react";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    stretch: {
      paddingTop: "16px",
      paddingBottom: "16px",
      alignSelf: "center",
      height: "100%",
      flex: "1",
    },
  })
);

const PostOptions = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      justify={"space-evenly"}
      direction={"row"}
    >
      <ButtonBase className={classes.stretch}>
        <FavoriteBorderIcon style={{ color: "#70b5f9" }} />
        <Typography>React </Typography>
      </ButtonBase>

      <Divider orientation="vertical" flexItem />

      <ButtonBase className={classes.stretch}>
        <CreateIcon style={{ color: "#e7a33e" }} />

        <Typography> Comment </Typography>
      </ButtonBase>

      <Divider orientation="vertical" flexItem />

      <ButtonBase className={classes.stretch}>
        <ShareIcon style={{ color: "#7fc15e" }} />

        <Typography> Share </Typography>
      </ButtonBase>
    </Grid>
  );
};

export default PostOptions;
