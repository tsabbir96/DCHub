import { Box, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
  },
  progress: {
    marginTop: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
  },

  label: {
    marginLeft: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  itemRow: {
    marginTop: theme.spacing(2),
    display: "flex",
  },
  percent: {
    zIndex: "10",
    color: "white",
    transform: "translateY(-100%)",
  },
  goodjob: {
    margin: theme.spacing(0, 2),
    marginTop: theme.spacing(2),
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

function Row({ classes, info }) {
  return (
    <Typography color="textSecondary" className={classes.itemRow}>
      <HighlightOffIcon className={classes.icon} /> &nbsp;
      <Box>{info}</Box>
    </Typography>
  );
}

export default function ProfileProgress({ open, setOpen }) {
  const [profileData, dispatch] = useProfileData();

  const calculateScore = (profileData) => {
    if (profileData.profile.user.account_type.toLowerCase() === "patient") {
      let score = 0;
      if (profileData.profile.gender === "NT") {
        score++;
      }
      if (
        !profileData.profile.birthday ||
        profileData.profile.birthday === "NT" ||
        profileData.profile.birthday === ""
      ) {
        score++;
      }
      if (!profileData.profile.country || profileData.profile.country === "") {
        score++;
      }
      if (!profileData.profile.city || profileData.profile.city === "") {
        score++;
      }
      if (!profileData.profile.phone) {
        score++;
      }
      if (!profileData.profile.weight) {
        score++;
      }
      if (
        !profileData.profile.last_medical_exam ||
        profileData.profile.last_medical_exam === ""
      ) {
        score++;
      }
      if (
        !profileData.profile.last_dental_exam ||
        profileData.profile.last_dental_exam === ""
      ) {
        score++;
      }
      return score;
    } else {
      let score = 0;
      if (profileData.profile.gender === "NT") {
        score++;
      }

      if (profileData.profile.degree === "NT") {
        score++;
      }
      if (!profileData.profile.birthday) {
        score++;
      }

      if (!profileData.profile.phone) {
        score++;
      }

      if (profileData.profile.dental_license === "") {
        score++;
      }

      if (profileData.profile.dental_speciality === "") {
        score++;
      }
      if (profileData.profile.license_country === "") {
        score++;
      }
      if (profileData.profile.name_of_practice === "") {
        score++;
      }
      if (profileData.profile.practice_city === "") {
        score++;
      }
      if (profileData.profile.practice_website === "") {
        score++;
      }
      if (profileData.profile.practice_zip_code === "") {
        score++;
      }
      return score;
    }
  };

  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };

  function ProfileElements() {
    if (profileData) {
      if (profileData.profile.user.account_type.toLowerCase() === "patient") {
        return (
          <Grid container direction="column">
            {profileData.profile.gender === "Not telling" ? (
              <Row classes={classes} info="Gender missing" />
            ) : null}
            {!profileData.profile.birthday && (
              <Row classes={classes} info="Birthday missing" />
            )}
            {!profileData.profile.country && (
              <Row classes={classes} info="Country missing" />
            )}
            {!profileData.profile.city && (
              <Row classes={classes} info="City missing" />
            )}
            {!profileData.profile.phone && (
              <Row classes={classes} info="Phone missing" />
            )}
            {!profileData.profile.weight && (
              <Row classes={classes} info="Weight missing" />
            )}
            {!profileData.profile.last_medical_exam && (
              <Row classes={classes} info="Last medical exam missing" />
            )}
            {!profileData.profile.last_dental_exam && (
              <Row classes={classes} info="Last dental exam missing" />
            )}
            {100 - calculateScore(profileData) * 10 === 100 && (
              <Typography className={classes.goodjob}>
                Feel free to update your medical and dental history when needed.
              </Typography>
            )}
            <div>
              <BorderLinearProgress
                variant="determinate"
                value={100 - calculateScore(profileData) * 10}
              />
              <Typography fullWidth className={classes.percent}>
                <Box fontWeight={800} textAlign="center">
                  {100 - calculateScore(profileData) * 10}%
                </Box>
              </Typography>
            </div>
          </Grid>
        );
      } else {
        return (
          <Grid container direction="column">
            {profileData.profile.gender === "Not telling" ? (
              <Row classes={classes} info="Gender missing" />
            ) : null}
            {!profileData.profile.birthday && (
              <Row classes={classes} info="Birthday missing" />
            )}
            {!profileData.profile.phone && (
              <Row classes={classes} info="Phone missing" />
            )}

            {!profileData.profile.cv_resume && (
              <Row classes={classes} info="Resume/CV missing" />
            )}
            {!profileData.profile.gov_id && (
              <Row classes={classes} info="Goverment id missing" />
            )}
            {profileData.profile.degree.toLowerCase() === "not telling" && (
              <Row classes={classes} info="Degree missing" />
            )}
            {profileData.profile.dental_speciality.toLowerCase() ===
              "not telling" && (
              <Row classes={classes} info="Dental speciality missing" />
            )}
            {profileData.profile.name_of_practice === "" && (
              <Row classes={classes} info="Name of practice missing" />
            )}
            {profileData.profile.license_country === "" && (
              <Row classes={classes} info="License country missing" />
            )}
            {profileData.profile.practice_city === "" && (
              <Row classes={classes} info="Practice city missing" />
            )}

            {profileData.profile.practice_zip_code === "" && (
              <Row classes={classes} info="Practice zipCode missing" />
            )}
            {100 - calculateScore(profileData) * 5 === 100 && (
              <Typography className={classes.goodjob}>
                Your profile is complete.
              </Typography>
            )}
            <div>
              <BorderLinearProgress
                variant="determinate"
                value={100 - calculateScore(profileData) * 5}
              />
              <Typography fullWidth className={classes.percent}>
                <Box fontWeight={800} textAlign="center">
                  {100 - calculateScore(profileData) * 5}%
                </Box>
              </Typography>
            </div>
          </Grid>
        );
      }
    } else {
      return <h4>loading...</h4>;
    }
  }
  if (profileData) {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography>
            <Box fontWeight={700}>Profile Completion</Box>
          </Typography>
          <Divider className={classes.divider} />

          <ProfileElements />
        </CardContent>
        <CardActions>
          <Button
            onClick={handleClick}
            color={"primary"}
            variant={"outlined"}
            fullWidth
          >
            Update your profile & medical history
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return <h4>loading...</h4>;
  }
}
