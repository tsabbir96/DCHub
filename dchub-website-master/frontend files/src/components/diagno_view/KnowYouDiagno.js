import {
  Box,

  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import ListTwoToneIcon from "@material-ui/icons/ListTwoTone";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import SubjectTwoToneIcon from "@material-ui/icons/SubjectTwoTone";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import WarningTwoToneIcon from "@material-ui/icons/WarningTwoTone";
import React from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(0, 4),
  },
  marginTopTitle: {
    marginTop: theme.spacing(20),
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
export default function KnowYouDiagno({ data }) {
  const classes = useStyles();
  const bull = <span>•</span>;

  return (
    <div className={classes.marginTopTitle}>
      <Typography variant={"h5"}>
        <Box fontWeight={700}>Medical & Dental History</Box>
      </Typography>
      <Divider />
      <Grid container>
        <Grid container direction={"column"} xs={6}>
          {/* 
              Medical history 
               */}
          <Grid container direction="column">
            <Typography className={classes.itemRow}>
              <AssignmentTwoToneIcon className={classes.icon} /> &nbsp;
              <Box fontWeight={700}>Medical history:</Box>
            </Typography>

            <Typography>
              {data.medical_history.length !== 0 ? (
                data.medical_history.map((answer, i) => {
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
              {data.dental_history.length !== 0 ? (
                data.dental_history.map((answer, i) => {

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
                Explanation of medical & dental history:
              </Box>
            </Typography>

            <Typography>
              {data.explanation === "" ? (
                <Box> Nothing </Box>
              ) : (
                <Box>{data.explanation} </Box>
              )}
            </Typography>
          </Grid>



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
              {data.teeth_prefs.length !== 0 ? (
                data.teeth_prefs.map((answer, i) => {
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
              {data.more_about_teeth !== "" ? (
                <Box>{data.more_about_teeth}</Box>
              ) : (
                <Box>nothing</Box>
              )}
            </Typography>
          </Grid>

























        </Grid>
        <Grid container xs={6} direction={"column"}>
          {/* 
               List of all of the medications and supplements you are currently
              taking: 
               */}
          <Grid container direction="column">
            <Typography className={classes.itemRow}>
              <ListTwoToneIcon className={classes.icon} /> &nbsp;
              <Box fontWeight={700}>
                List of all of the medications and supplements you are currently
                taking:
              </Box>
            </Typography>

            <Typography>
              {data.current_medication.length !== 0 ? (
                data.current_medication.map((answer, i) => {
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
              {data.biphosphonate_medication ? <Box>Yes</Box> : <Box>No</Box>}
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
                {data.name_biphosphonate_medication === "" ? (
                  <Box> Nothing </Box>
                ) : (
                  <Box>{data.name_biphosphonate_medication} </Box>
                )}

                {data.date_last_dose === null ? (
                  <Box> </Box>
                ) : (
                  <Box> &nbsp; {data.date_last_dose} </Box>
                )}
              </Grid>
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
              {data.allergies.length === 0 ? (
                <Box>Nothing</Box>
              ) : (
                <Box> {data.allergies}</Box>
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
