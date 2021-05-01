import { Divider, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import HomeWorkTwoToneIcon from "@material-ui/icons/HomeWorkTwoTone";
import SubjectTwoToneIcon from "@material-ui/icons/SubjectTwoTone";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import React from "react";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 4),
  },
  actionBtn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
  paragraph: {
    marginRight: theme.spacing(8),
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  itemRow: {
    marginTop: theme.spacing(4),
    display: "flex",
  },
}));
const AboutYourTeeth = ({ open, setOpen }) => {
  const classes = useStyles();

  const bull = <span>•</span>;
  const [state] = useProfileData();
  const profile = state.profile;

  const showDialog = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography variant={"h5"} color={"primary"}>
            <Box fontWeight={700}>Let's talk about your teeth</Box>
          </Typography>
        }
        action={
          <ButtonBase onClick={showDialog}>
            <EditTwoToneIcon className={classes.actionBtn} />
          </ButtonBase>
        }
      />
      <CardContent>
        <Divider />
        <Grid container>
          <Grid item md={6} sm={12}>
            {/* 
            Your preferences 
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <ThumbUpAltTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Your dental preferences:</Box>
              </Typography>

              <Typography>
                {profile.teeth_prefs.length !== 0 ? (
                  profile.teeth_prefs.map((answer, i) => {
                    // Return the element. Also pass key
                    return (
                      <Box>
                        {bull}
                        {answer}
                      </Box>
                    );
                  })
                ) : (
                  <Box>Nothing specific</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            More details 
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <SubjectTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>More details:</Box>
              </Typography>

              <Typography>
                {profile.more_about_teeth !== "" ? (
                  <Box>{profile.more_about_teeth}</Box>
                ) : (
                  <Box>nothing</Box>
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid item md={6} sm={12}>
            {/* 
            Preferred treatment location
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <HomeWorkTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Preferred treatment location:</Box>
              </Typography>

              <Typography>
                {profile.preferred_treatment_location !== "" ? (
                  <Box>{profile.preferred_treatment_location}</Box>
                ) : (
                  <Box>nothing</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default AboutYourTeeth;
