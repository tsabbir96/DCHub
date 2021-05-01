import IconButton from "@material-ui/core/IconButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import React from "react";
import Header from "../commun/Header";
import ProgressDialog from "../commun/ProgressDialog";
import {
  changeDoctorBanner,
  changePatientBanner,
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../context/profile_data/types";
import ProfileContent from "./ProfileContent";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      overflowX: "hidden",
    },
    banner: {
      transform: "translate(0, -4px) ",

      width: "100vw",
      // objectPosition: "top",
      objectFit: "cover",
      height: "60vh",
      "&:hover": {
        filter: "grayscale(2.2)",
      },
    },

    bannerdiv: {
      "&:hover": {
        filter: "grayscale(2.2)",
      },
    },
    Avatarbtn: {
      position: "absolute",
      transform: "translate(50px, -20px) ",
      backgroundColor: "white",
      borderRadius: "50%",
      zIndex: "10",
      top: "25vh",
      left: "50%",
      padding: theme.spacing(1),
    },
    icon: {
      height: "40px",
      width: "40px",

      // top:'0',
      // left:'0',
    },
    input: {
      display: "none",
    },
  })
);
const NewProfile = () => {
  const [state, dispatch] = useProfileData();
  const [showBtn, setShowBtn] = React.useState(false);
  let banner_img = null;
  const profile = state.profile;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  // <LazyLoadImage className={classes.banner} src={profile.banner_img}
  // effect="blur" />
  const handleClose = (value) => {
    setOpen(false);
  };

  const handleImageChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];
    if (selected && ALLOWED.includes(selected.type)) {
      banner_img = evt.target.files[0];
      if (state.profile.user.account_type.toLowerCase() === "patient") {
        setOpen(true);

        changePatientBanner(state.profile.id, banner_img).then((data) => {
          dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data });

          setOpen(false);
        });
      } else {
        setOpen(true);

        changeDoctorBanner(state.profile.id, banner_img).then((data) => {
          if (data.status === 200) {
            dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });

            setOpen(false);
          } else {
            setOpen(false);
          }
        });
      }

      // setError(false);
      let reader = new FileReader();
      reader.readAsDataURL(selected);
      reader.onloadend = () => {
        // setXray(reader.result);
        // setnoImgError(false);
        // setisUnique(true);
      };
    } else {
      // setError(true);
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      {profile ? (
        // <img className={classes.banner} src={profile.banner_img} />
        <div
          className={classes.bannerdiv}
          onMouseEnter={() => setShowBtn(true)}
          onMouseLeave={() => setShowBtn(false)}
        >
          {/* {showBtn && <ButtonBase onClick={handleChangeBanner} className={classes.Avatarbtn}><CameraAltTwoToneIcon  className={classes.icon} /></ButtonBase>} */}

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

          <img
            className={classes.banner}
            src={profile.banner_img}
            alt="banner"
            loading="lazy"
          />
        </div>
      ) : (
        <h5>LOADING...</h5>
      )}
      <ProgressDialog open={open} onClose={handleClose} />

      <ProfileContent />
    </div>
  );
};
export default NewProfile;
