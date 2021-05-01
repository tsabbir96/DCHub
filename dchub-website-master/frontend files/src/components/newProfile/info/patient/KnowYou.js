import { Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import ListTwoToneIcon from "@material-ui/icons/ListTwoTone";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
import React from "react";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 4),
  },
  marginTopTitle: {
    marginTop: theme.spacing(4),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(2),
  },
  marginLeft: {
    marginLeft: "auto",
  },
  actionBtn: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  marginLeftAuto: {
    marginLeft: "auto",
    marginRight: theme.spacing(8),
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
  customicon: {
    maxHeight: "20px",
    maxWidth: "20px",
  },
}));
export default function KnowYou({ open, setOpen }) {
  const [state] = useProfileData();
  const profile = state.profile;
  const classes = useStyles();
  const bull = <span>•</span>;

  const showDialog = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography variant={"h5"} color={"primary"}>
            <Box fontWeight={700}>Medical & Dental History</Box>
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
          <Grid container direction={"column"} md={6} sm={12}>
            {/* 
            Medical history 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <AssignmentTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Medical history:</Box>
              </Typography>

              <Typography>
                {profile.medical_history.length !== 0 ? (
                  profile.medical_history.map((answer, i) => {
                    // Return the element. Also pass key
                    return (
                      <Box>
                        {bull}
                        {answer}
                      </Box>
                    );
                  })
                ) : (
                  <Box>No medical history</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Dental history 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <AssignmentTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Dental history:</Box>
              </Typography>

              <Typography>
                {profile.dental_history.length !== 0 ? (
                  profile.dental_history.map((answer, i) => {
                    // Return the element. Also pass key
                    return (
                      <Box>
                        {bull}
                        {answer}
                      </Box>
                    );
                  })
                ) : (
                  <Box>No dental history</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Explanation of marked conditions
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PlaylistAddCheckTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>
                  Tell us more about your medical and dental history:
                </Box>
              </Typography>

              <Typography>
                {profile.explanation === "" ? (
                  <Box> Nothing </Box>
                ) : (
                  <Box>{profile.explanation} </Box>
                )}
              </Typography>
            </Grid>

            {/* 
            allergies
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <WarningTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Known allergies:</Box>
              </Typography>

              <Typography>
                {profile.allergies.length === 0 ? (
                  <Box>Nothing</Box>
                ) : (
                  <Box> {profile.allergies}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={6} sm={12} direction={"column"}>
            {/* 
             List of all of the medications and supplements you are currently
            taking: 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <ListTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>
                  List of all of the medications and supplements you are
                  currently taking:
                </Box>
              </Typography>

              <Typography>
                {profile.current_medication.length !== 0 ? (
                  profile.current_medication.map((answer, i) => {
                    // Return the element. Also pass key
                    return (
                      <Box>
                        {bull}
                        {answer}
                      </Box>
                    );
                  })
                ) : (
                  <Box>No medications taken</Box>
                )}
              </Typography>
            </Grid>

            {/* 
             List of all of the medications and supplements you are currently
            taking: 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <HelpTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>
                  Have you ever taken any medication contraining biophosphanates
                  for Osteoprosis?
                </Box>
              </Typography>

              <Typography>
                {profile.biphosphonate_medication ? (
                  <Box>Yes</Box>
                ) : (
                  <Box>No</Box>
                )}
              </Typography>
            </Grid>

            {/* 
             Medication containing biphosphonates for osteoporosis: 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <ListAltTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>
                  Medication containing biphosphonates for osteoporosis:
                </Box>
              </Typography>

              <Typography>
                <Grid container>
                  {profile.name_biphosphonate_medication === "" ? (
                    <Box> Nothing </Box>
                  ) : (
                    <Box>{profile.name_biphosphonate_medication} </Box>
                  )}

                  {profile.date_last_dose === null ? (
                    <Box> </Box>
                  ) : (
                    <Box> &nbsp; {profile.date_last_dose} </Box>
                  )}
                </Grid>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
