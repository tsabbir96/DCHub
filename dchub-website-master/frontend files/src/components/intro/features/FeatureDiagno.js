import { Box, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import diagnobot from "../../../assets/landing/diagnobot.webp";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
  },
  title: {
    // marginTop:theme.spacing(4),
    color: "white",
    width: "100%",
    height: "80px",
    padding: theme.spacing(2),
    margin: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.light,
  },
  video: {
    borderRadius: "2%",
    height: "420px",
    width: "760px",
    // objectFit:'center'
  },
  logo: {
    width: "160px",
  },
  desc: {
    margin: theme.spacing(0, 10),
    marginTop: theme.spacing(6),
  },
}));

export default function FeatureDiagno() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        container
        direction={"column"}
        justify="center"
        alignContent="center"
        alignItems="center"
        xs={6}
      >
        <img src={diagnobot} alt="diagnobot" className={classes.logo} />
        <Typography variant="h5" className={classes.desc}>
          <Box textAlign="center">
            A free AI self service consultation platform providing answers to
            most common dental conditions and created probable recommendation
          </Box>
        </Typography>
      </Grid>

      <Grid item container alignItems="center" xs={6}>
        <Card elevation={20} className={classes.video}>
          <ReactPlayer
            loop
            playing={true}
            // url={xrayreport}
            url={"https://youtu.be/oxPQypZNYfY"}
            // controls
            height="100%"
            width="100%"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
