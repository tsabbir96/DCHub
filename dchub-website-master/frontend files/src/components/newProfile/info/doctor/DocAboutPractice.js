import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import React from "react";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
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

export default function DocAnoutPractice({ open, setOpen }) {
  const classes = useStyles();
  const [state] = useProfileData();

  const showDialog = () => {
    setOpen(!open);
  };
  const profile = state.profile;
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography variant={"h5"} color={"primary"}>
            <Box fontWeight={700}>About your practice</Box>
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
              active dental license 
               */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <HelpTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>
                  Do you have an active dental license?
                </Box>
              </Typography>

              <Typography>
                {profile.active_license === false ? (
                  <Box>No</Box>
                ) : (
                  <Box>Yes</Box>
                )}
              </Typography>
            </Grid>

            {/* 
              accept_new_patients 
               */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PersonAddTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Do you accept new patients?</Box>
              </Typography>

              <Typography>
                {profile.accept_new_patients === false ? (
                  <Box>No</Box>
                ) : (
                  <Box>Yes</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={6} sm={12} direction={"column"}>
            {/* 
              average_new_patients_month
               */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <GroupAddTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Average No. of new patients/month</Box>
              </Typography>

              <Typography>
                <Box>{profile.average_new_patients_month}</Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
