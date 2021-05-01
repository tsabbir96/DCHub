import {
  Button,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import GavelTwoToneIcon from "@material-ui/icons/GavelTwoTone";
import React from "react";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import {
  changeDoctorCV,
  changeDoctorDentalLicense,
  changeDoctorGovId,
} from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../../context/profile_data/types";
import ProgressDialog from "../ProgressDialog";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(3),
  },
  gridContainer: {
    marginTop: theme.spacing(8),
  },
  titles: {
    fontWeight: 700,
  },
  itemRow: {
    marginTop: theme.spacing(4),
    display: "flex",
  },
  input: {
    display: "none",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  btnDiv: {
    position: "absolute",
  },
}));
export default function DocFilesSectionEdit({
  handleClose,
  handleBack,
  activeStep,
  steps,
}) {
  const classes = useStyles();
  const [isDisabled, setDisabled] = React.useState(false);
  const [profileData, dispatch] = useProfileData();

  let cv = null;
  const [showGovIdBtn, setshowGovIdBtn] = React.useState(false);
  const [showDentalLicenseBtn, setshowDentalLicenseBtn] = React.useState(false);
  const { open } = useAlertSnackbarContext();

  const [openLoading, setOpenLoading] = React.useState(false);
  const handleCloseLoading = (value) => {
    setOpenLoading(false);
  };
  const handleShowGovIdBtn = (isShown) => {
    setshowGovIdBtn(isShown);
  };

  const handleShowDentalLicenseBtn = (isShown) => {
    setshowDentalLicenseBtn(isShown);
  };

  const handleGovIdChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];

    if (selected && ALLOWED.includes(selected.type)) {
      cv = evt.target.files[0];

      setOpenLoading(true);

      changeDoctorGovId(profileData.profile.id, cv).then((data) => {
        if (data.status === 200) {
          dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });

          setOpenLoading(false);
          open("success", "Update sucessful");
        } else {
          setOpenLoading(false);
          open("error", "error ");
        }
      });

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

  const handleDentalLicenseChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];

    if (selected && ALLOWED.includes(selected.type)) {
      cv = evt.target.files[0];

      setOpenLoading(true);

      changeDoctorDentalLicense(profileData.profile.id, cv).then((data) => {
        if (data.status === 200) {
          dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });
          open("success", "Update sucessful");

          setOpenLoading(false);
        } else {
          setOpenLoading(false);
          open("error", "error ");
        }
      });

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

  const handleCVhange = (evt) => {
    const ALLOWED = [
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
    ];
    const selected = evt.target.files[0];
 
    if (selected && ALLOWED.includes(selected.type)) {
      cv = evt.target.files[0];

      setOpenLoading(true);

      changeDoctorCV(profileData.profile.id, cv).then((data) => {
        if (data.status === 200) {
          dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });
          open("success", "Update sucessful");

          setOpenLoading(false);
        } else {
          setOpenLoading(false);
          open("error", "error ");
        }
      });

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
    <div>
      <Grid container className={classes.gridContainer}>
        <GavelTwoToneIcon className={classes.icon} />

        <Typography className={classes.titles}>Goverment id:</Typography>
      </Grid>
      <Typography>
        {profileData.profile.gov_id ? (
          <Grid
            container
            direction="column"
            item
            xs={12}
            onMouseEnter={() => handleShowGovIdBtn(true)}
            onMouseLeave={() => handleShowGovIdBtn(false)}
          >
            <img
              className={classes.img}
              loading="lazy"
              src={profileData.profile.gov_id}
              alt="gov_id"
            />

            {showGovIdBtn && (
              <div className={classes.btnDiv}>
                <input
                  onChange={handleGovIdChange}
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-gov_id"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-gov_id">
                  <Button variant="contained" color="primary" component="span">
                    Change
                  </Button>
                </label>
              </div>
            )}
          </Grid>
        ) : (
          <Grid container direction="column">
            <Typography>Not provided</Typography>
            <input
              onChange={handleGovIdChange}
              accept="image/*"
              className={classes.input}
              id="contained-button-gov_id"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-gov_id">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        )}
      </Typography>

      <Divider className={classes.gridContainer} />
      <Grid container className={classes.gridContainer}>
        <AssignmentIndTwoToneIcon className={classes.icon} />

        <Typography className={classes.titles}>Dental license:</Typography>
      </Grid>
      <Typography>
        {profileData.profile.dental_license ? (
          <Grid
            container
            direction="column"
            item
            xs={12}
            onMouseEnter={() => handleShowDentalLicenseBtn(true)}
            onMouseLeave={() => handleShowDentalLicenseBtn(false)}
          >
            <img
              className={classes.img}
              src={profileData.profile.dental_license}
              loading="lazy"
              alt="dental_license"
            />

            {showDentalLicenseBtn && (
              <div className={classes.btnDiv}>
                <input
                  onChange={handleDentalLicenseChange}
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-dental_license"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-dental_license">
                  <Button variant="contained" color="primary" component="span">
                    Change
                  </Button>
                </label>
              </div>
            )}
          </Grid>
        ) : (
          <Grid container xs={12} direction="column">
            <Typography>Not provided</Typography>
            <input
              onChange={handleDentalLicenseChange}
              accept="image/*"
              className={classes.input}
              id="contained-button-dental_license"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-dental_license">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        )}
      </Typography>

      <Divider />
      <Grid className={classes.gridContainer} container>
        <DescriptionTwoToneIcon className={classes.icon} />

        <Typography className={classes.titles}>cv resume:</Typography>
      </Grid>
      <Typography>
        {profileData.profile.cv_resume ? (
          <Grid container direction="column" item xs={12}>
            <Link target="_blank" href={profileData.profile.cv_resume}>
              CV
            </Link>

            <div>
              <input
                accept=".pdf , .docx , .doc , text/plain"
                className={classes.input}
                onChange={handleCVhange}
                id="contained-button-cv_resume"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-cv_resume">
                <Button variant="contained" color="primary" component="span">
                  Change
                </Button>
              </label>
            </div>
          </Grid>
        ) : (
          <Grid container direction="column">
            <Typography>Not provided</Typography>
            <input
              accept=".pdf , .docx , .doc , text/plain"
              className={classes.input}
              onChange={handleCVhange}
              id="contained-button-cv_resume"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-cv_resume">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        )}
      </Typography>

      <Divider className={classes.gridContainer} />

      <div className={classes.gridContainer}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          disabled={isDisabled}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? "Close" : "Update"}
        </Button>
      </div>
      <ProgressDialog open={openLoading} onClose={handleCloseLoading} />
    </div>
  );
}
