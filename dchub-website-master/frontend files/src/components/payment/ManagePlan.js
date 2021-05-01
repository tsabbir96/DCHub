import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../commun/Header";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import {
  cancelSub,
  retrieveSub,

  updatePatientStatus, updateStatusDoctor
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../context/profile_data/types";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(4),
  },
  icon: {
    height: "60px",
    width: "60px",
    color: green[500],
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    marginLeft: theme.spacing(4),
  },
  text: {
    fontSize: "20px",
    fontWeight: "400",
    marginLeft: theme.spacing(4),
  },
  btn: { marginTop: theme.spacing(4) },
}));
export default function ManagePlan() {
  const classes = useStyles();
  const [profileData, dispatch] = useProfileData();
  let history = useHistory();

  const { open } = useAlertSnackbarContext();
  const [isDisabled, setIsDisabled] = useState(false);
  const handleCancelSub = () => {
    setIsDisabled(true);

    retrieveSub(profileData.profile.customer_id).then((res) => {
      if (res.status === 200 && res.data.data.length > 0) {
         cancelSub(res.data.data[res.data.data.length - 1].id).then((res02) => {
           if (res02.status === 200) {
            if (
              profileData.profile.user.account_type.toLowerCase() === "patient"
            ) {
              updatePatientStatus(
                profileData.profile.id,
              
                false
              ).then((res03) => {
                if (res03.status === 200) {
                  dispatch({
                    type: EDIT_GS_PROFILE_SUCCESS,
                    payload: res03.data,
                  });

                  open("success", "Subscription cancelled");
                  history.push("/profile/Reports");
                } else {
                  setIsDisabled(false);
                  open("error", "Cancelling failed");
                }
              });
            } else {
              updateStatusDoctor(
                profileData.profile.id,
               
                false
              ).then((res03) => {
                if (res03.status === 200) {
                  dispatch({
                    type: EDIT_GS_PROFILE_SUCCESS,
                    payload: res03.data,
                  });

                  open("success", "Subscription cancelled");
                  history.push("/profile/Reports");
                } else {
                  setIsDisabled(false);
                  open("error", "Cancelling failed");
                }
              });
            }
          } else {
            setIsDisabled(false);
            open("error", "Cancelling failed");
          }
        });
      } else if (res.status === 200 && res.data.data.length === 0) {
        if (profileData.profile.user.account_type.toLowerCase() === "patient") {
          updatePatientStatus(
            profileData.profile.id,
         
            false
          ).then((res03) => {
            if (res03.status === 200) {
              dispatch({
                type: EDIT_GS_PROFILE_SUCCESS,
                payload: res03.data,
              });

              open("success", "Subscription cancelled");
              history.push("/profile/Reports");
            } else {
              setIsDisabled(false);
              open("error", "Cancelling failed");
            }
          });
        } else {
          updateStatusDoctor(
            profileData.profile.id,
             
            false
          ).then((res03) => {
            if (res03.status === 200) {
              dispatch({
                type: EDIT_GS_PROFILE_SUCCESS,
                payload: res03.data,
              });

              open("success", "Subscription cancelled");
              history.push("/profile/Reports");
            } else {
              setIsDisabled(false);
              open("error", "Cancelling failed");
            }
          });
        }
      } else {
        setIsDisabled(false);
        open("error", "Cancelling failed");
      }
    });
  };
  if (!profileData.profile.is_subscribed) {
    history.push("/choosePlan");
  }
  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            title={
              <Typography className={classes.title}>
                Manage your subscription
              </Typography>
            }
          />
          <CardContent>
            <Grid container alignItems="center">
              <CheckCircleTwoToneIcon className={classes.icon} />
              <Typography className={classes.text}>
                You are already subscribed
              </Typography>
              <Button
                className={classes.btn}
                fullWidth
                variant="contained"
                color="primary"
                disabled={isDisabled}
                onClick={handleCancelSub}
              >
                Cancel subscription
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
