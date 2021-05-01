import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import infoIcon from "../../../../assets/diagnobot/info.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContent: {
    // width: '80%',
  },
  paragraph: {
    marginTop: theme.spacing(4),
    // maxWidth: '60%'
  },
  divider: {
    marginTop: theme.spacing(4),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  mouth_img: {
    width: "80%",
    // marginLeft:'auto',
    padding: theme.spacing(8),
  },
  leftBorder: {
    backgroundColor: theme.palette.info.light,
    height: "340px",
  },
  icon: {
    width: "100%",
    height: "140px",
  },
  recommendation: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(4),
  },
  Preliminary: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  list: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(16),
  },
}));
const RecommendationsDiagnobot = ({ type }) => {
  const classes = useStyles();
  if (type === "DIAGNOBOT") {
    return (
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid
            container
            alignItems="center"
            className={classes.leftBorder}
            xs={2}
          >
            <img src={infoIcon} alt="infoIcon" className={classes.icon} />
          </Grid>
          <Grid container direction={"column"} xs={10}>
            <Typography
              className={classes.recommendation}
              color={"textSecondary"}
            >
              All done!
            </Typography>
            <Typography variant={"h6"} className={classes.title}>
              <Box fontWeight={700}>Good job, your report is ready!</Box>
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              // variant = {'h6'}
              className={classes.Preliminary}
            >
              <Box>
                You can print the report by clicking on print below. <br /> It's
                also available on your profile page unless you delete it.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    );
  } else {
    return (
      <Card className={classes.root} variant="outlined">
        <Grid container>
          <Grid
            container
            alignItems="center"
            className={classes.leftBorder}
            xs={2}
          >
            <img src={infoIcon} alt="infoIcon" className={classes.icon} />
          </Grid>
          <Grid container direction={"column"} xs={10}>
            <Typography
              className={classes.recommendation}
              color={"textSecondary"}
            >
              All done!
            </Typography>
            <Typography variant={"h6"} className={classes.title}>
              <Box fontWeight={700}>
                Your report have been submitted for review
              </Box>
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              // variant = {'h6'}
              className={classes.Preliminary}
            >
              <Box>
                You will recieve an email when your report is ready and verified
                by one of our internal dentists,
                <br /> you can also see the report at the profile section
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    );
  }
};
export default RecommendationsDiagnobot;
