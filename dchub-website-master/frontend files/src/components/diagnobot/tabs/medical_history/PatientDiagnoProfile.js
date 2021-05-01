import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import React from "react";
import ProfileInfoDialog from "../../../dialogs/profile_data/ProfileInfoDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 4),
  },
  cardContent: {
    // width: '80%',
  },
  title: {
    margin: theme.spacing(6, 0),
  },
  divider: {
    margin: theme.spacing(6, 0),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
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
    marginLeft: theme.spacing(6),
  },
}));
export default function PatientDiagnoProfile({
  profile,
  handleOpenDialog,
  open,
  handleClose,
  handleBackClick,
  handleClick,
}) {
  const classes = useStyles();
  const bull = <span>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography variant={"h5"} className={classes.title}>
          <Box fontWeight={700} textAlign={"center"}>
            Let's verify your informations one more time
          </Box>
        </Typography>

        <Grid container>
          <Typography variant={"h6"} color={"primary"} gutterBottom>
            <Box fontWeight={700}>General section</Box>
          </Typography>

          <ButtonBase className={classes.icon}>
            <EditTwoToneIcon onClick={handleOpenDialog} />
          </ButtonBase>
        </Grid>
        <Typography className={classes.marginTopTitle}>
          <Box fontWeight={700}>First name:</Box>{" "}
          <Box>{profile.first_name}</Box>
        </Typography>

        <Typography className={classes.marginTopTitle}>
          <Box fontWeight={700}>Last name:</Box> <Box>{profile.last_name}</Box>
        </Typography>

        <Grid container>
          <Grid container direction={"column"} xs={6}>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Birthday:</Box>
              {profile.birthday === null ? (
                <Box> Not telling </Box>
              ) : (
                <Box>{profile.birthday} </Box>
              )}
            </Typography>

            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Gender:</Box>
              <Box> {profile.user.gender}</Box>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Weight:</Box>
              <Box> {profile.weight}</Box>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Neck size in inches:</Box>
              <Box> {profile.neck_size_inch}</Box>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Last medical exam:</Box>

              {profile.last_medical_exam === null ? (
                <Box>Not telling</Box>
              ) : (
                <Box> {profile.last_medical_exam}</Box>
              )}
            </Typography>
          </Grid>
          <Grid container xs={6} direction={"column"}>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Last date of dental exam:</Box>

              {profile.last_dental_exam === null ? (
                <Box>Not telling</Box>
              ) : (
                <Box> {profile.last_dental_exam}</Box>
              )}
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>City you live in:</Box>

              {profile.city === "" ? (
                <Box>Not telling</Box>
              ) : (
                <Box> {profile.city}</Box>
              )}
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>What country you live in:</Box>

              {profile.country === "" ? (
                <Box>Not telling</Box>
              ) : (
                <Box> {profile.country}</Box>
              )}
            </Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />
        <Grid container>
          <Typography variant={"h6"} gutterBottom color={"primary"}>
            <Box fontWeight={700}>Medical & Dental History</Box>
          </Typography>

          <ButtonBase className={classes.icon}>
            <EditTwoToneIcon onClick={handleOpenDialog} />
          </ButtonBase>
        </Grid>

        <Grid container>
          <Grid container direction={"column"} xs={6}>
            <Typography className={classes.marginTopTitle}>
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
                <Box>No dental history</Box>
              )}
            </Typography>

            <Typography className={classes.marginTopSubtitle}>
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
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Explanation of marked conditions:</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                {profile.explanation === "" ? (
                  <Box> Nothing </Box>
                ) : (
                  <Box>{profile.explanation} </Box>
                )}
              </Box>
            </Typography>
          </Grid>
          <Grid container xs={6} direction={"column"}>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                List of all of the medications and supplements you are currently
                taking:
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
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                Medication containing biphosphonates for osteoporosis:
              </Box>

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

        <Divider className={classes.divider} />

        <ProfileInfoDialog open={open} onClose={handleClose} />
      </CardContent>

      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleBackClick}
          variant={"outlined"}
          color={"primary"}
        >
          Back
        </Button>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant={"contained"}
          color={"primary"}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
}
