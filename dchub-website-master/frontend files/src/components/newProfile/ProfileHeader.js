import { Avatar, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React, { useState } from "react";
import { useHistory } from "react-router";
import vipLogo from "../../assets/vipLogo.svg";
import ProgressDialog from "../commun/ProgressDialog";
import {
  changeDoctorAvatar,
  changePatientAvatar
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../context/profile_data/types";

const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: "160px",
      width: "160px",
      border: `4px solid white`,
      transform: "translate(0, -50%) ",
      boxShadow: theme.shadows[3],
    },
    vipLogo: {
      width: "24px",
      marginLeft: "8px",
    },
    btns: {
      marginTop: theme.spacing(2),
      marginLeft: "auto",
    },
    nameDiv: {
      marginLeft: theme.spacing(4),
    },
    Avatarbtn: {
      position: "absolute",
      transform: "translate(50px, -20px) ",
      backgroundColor: "white",
      borderRadius: "50%",
      zIndex: "10",
      // top:'0',
      // left:'0',
      padding: theme.spacing(1),
    },
    icon: {
      height: "40px",
      width: "40px",

      // top:'0',
      // left:'0',
    },
    avatardiv: {
      "&:hover": {
        filter: "grayscale(2.2)",
      },
    },
    input: {
      display: "none",
    },
  })
);
const ProfileHeader = () => {
  const [state, dispatch] = useProfileData();
  const profile = state.profile;

  const [showBtn, setShowBtn] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  let avatar = null;

  const handleImageChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];
    if (selected && ALLOWED.includes(selected.type)) {
      avatar = evt.target.files[0];
      if (state.profile.user.account_type.toLowerCase() === "patient") {
        setOpen(true);
        changePatientAvatar(state.profile.id, avatar).then((data) => {
          if (data.status === 200) {
            dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });

            setOpen(false);
          } else {
            setOpen(false);
          }
        });
      } else {
        setOpen(true);
        changeDoctorAvatar(state.profile.id, avatar).then((data) => {
          if (data.status === 200) {
            dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });

            setOpen(false);
          } else {
            setOpen(false);
          }
        });
      }

      let reader = new FileReader();
      reader.readAsDataURL(selected);
      reader.onloadend = () => {};
    } else {
      // setError(true);
    }
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleManageSubscription = () => {
    if (
      state.profile.customer_id === "" ||
      state.profile.customer_id === null ||
      state.profile.customer_id === undefined
    ) {
      //todo cancel sub

      history.push("/choosePlan");
    } else {
      history.push("/managePlan");
    }
  };

  if (state) {
    return (
      <Grid container>
        <Grid item>
          <div
            className={classes.avatardiv}
            onMouseEnter={() => setShowBtn(true)}
            onMouseLeave={() => setShowBtn(false)}
          >
            {showBtn && (
              <div className={classes.Avatarbtn}>
                <input
                  accept="image/*"
                  onChange={handleImageChange}
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                />

                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            )}
            <Avatar className={classes.avatar} src={profile.profile_img} />
          </div>
        </Grid>

        <Grid
          item
          container
          xs={4}
          className={classes.nameDiv}
          direction={"column"}
        >
          <Typography variant={"subtitle1"} color={"textSecondary"}>
            <Box>{profile.user.account_type}</Box>
          </Typography>
          <Grid container>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>
                {profile.first_name + " " + profile.last_name}
              </Box>
            </Typography>
            {profile.is_verified && (
              <img
                className={classes.vipLogo}
                src={vipLogo}
                alt="logo"
                loading="lazy"
              />
            )}
          </Grid>
          <Typography variant={"subtitle1"} color={"textSecondary"}>
            {profile.is_verified ? (
              <Box>Verified account</Box>
            ) : (
              <Box>Unverified account</Box>
            )}
          </Typography>
        </Grid>
        <Grid item className={classes.btns}>
          <Button
            variant={"outlined"}
            startIcon={<AttachMoneyIcon />}
            onClick={handleManageSubscription}
            color={"primary"}
          >
            Our Beta Pricings
          </Button>
          <ButtonBase>
            <MoreVertIcon />
          </ButtonBase>
        </Grid>

        <ProgressDialog open={open} onClose={handleClose} />
      </Grid>
    );
  } else {
    return <h4>loading</h4>;
  }
};
export default ProfileHeader;
