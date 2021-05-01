import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { editGeneralSectionProfile } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../context/profile_data/types";
var countries = require("countries-cities").getCountries();

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(4),
  },
  button: {
    margin: theme.spacing(0, 2),
  },
  PhoneInput: {
    width: "100%",

    height: "100%",
  },
}));

export default function GeneralSectionEdit({
  steps,
  activeStep,
  handleNext,
  isStepOptional,
  handleSkip,
  handleBack,
}) {
  const { open } = useAlertSnackbarContext();

  const classes = useStyles();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [profileData, dispatch] = useProfileData();
  const [myLocalProfileData, setMyLocalProfileData] = React.useState({
    first_name: profileData.profile.first_name,
    last_name: profileData.profile.last_name,

    birthday: profileData.profile.birthday,
    phone: profileData.profile.phone,
    gender:
      profileData.profile.gender === "Not telling"
        ? "NT"
        : profileData.profile.gender === "Female"
        ? "F"
        : "M",
    weight: profileData.profile.weight,
    neck_size_inch: profileData.profile.neck_size_inch,
    last_medical_exam: profileData.profile.last_medical_exam,
    last_dental_exam: profileData.profile.last_dental_exam,
    country: profileData.profile.country,
    city: profileData.profile.city,
    current_dentist_name: profileData.profile.current_dentist_name,
    current_dentist_phone: profileData.profile.current_dentist_phone,
    current_dentist_email: profileData.profile.current_dentist_email,
    current_dentist_website: profileData.profile.current_dentist_website,
  });

  const [cities, setcities] = React.useState(
    myLocalProfileData.city
      ? require("countries-cities").getCities(myLocalProfileData.country)
      : require("countries-cities").getCities("United States")
  );

  const handleRGChange = (event) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      gender: event.target.value,
    });
  };

  const handlePhoneChange = (passedPhone, data) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      phone: passedPhone,
    });
  };
  const handleInputChange = (event) => {
    switch (event.target.id) {
      case "first_name":
        setMyLocalProfileData({
          ...myLocalProfileData,
          first_name: event.target.value,
        });

        break;
      case "last_name":
        setMyLocalProfileData({
          ...myLocalProfileData,
          last_name: event.target.value,
        });

        break;
      case "weight":
        setMyLocalProfileData({
          ...myLocalProfileData,
          weight: event.target.value,
        });

        break;

      case "phone":
        setMyLocalProfileData({
          ...myLocalProfileData,
          phone: event.target.value,
        });

        break;

      case "neck_size_inch":
        setMyLocalProfileData({
          ...myLocalProfileData,
          neck_size_inch: event.target.value,
        });

        break;

      case "current_dentist_name":
        setMyLocalProfileData({
          ...myLocalProfileData,
          current_dentist_name: event.target.value,
        });

        break;
      case "current_dentist_phone":
        setMyLocalProfileData({
          ...myLocalProfileData,
          current_dentist_phone: event.target.value,
        });

        break;
      case "current_dentist_email":
        setMyLocalProfileData({
          ...myLocalProfileData,
          current_dentist_email: event.target.value,
        });

        break;
      case "current_dentist_website":
        setMyLocalProfileData({
          ...myLocalProfileData,
          current_dentist_website: event.target.value,
        });

        break;
      default:
        return;
    }
  };

  const handleCountryChange = (value) => {
    value
      ? setcities(require("countries-cities").getCities(value))
      : myLocalProfileData.country
      ? setcities(
          require("countries-cities").getCities(myLocalProfileData.country)
        )
      : setcities(require("countries-cities").getCities("United States"));

    setMyLocalProfileData({ ...myLocalProfileData, country: value });
  };

  const handleCityChange = (value) => {
    setMyLocalProfileData({ ...myLocalProfileData, city: value });
  };

  const handleClick = () => {
    setIsDisabled(true);
    editGeneralSectionProfile(
      profileData.profile.id,
      myLocalProfileData.first_name,
      myLocalProfileData.last_name,

      myLocalProfileData.birthday,
      myLocalProfileData.phone,
      myLocalProfileData.gender,
      myLocalProfileData.weight,
      myLocalProfileData.neck_size_inch,
      myLocalProfileData.last_medical_exam,
      myLocalProfileData.last_dental_exam,
      myLocalProfileData.country,
      myLocalProfileData.city,
      myLocalProfileData.current_dentist_name,
      myLocalProfileData.current_dentist_phone,
      myLocalProfileData.current_dentist_email,
      myLocalProfileData.current_dentist_website,
      false
    )
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: data.data });

          open("success", "edit successful");
          setIsDisabled(false);

          handleNext();
        }
      })
      .catch((error) => {
        setIsDisabled(false);

        open("error", "edit error");
      });
  };
  const handleBirthdayChange = (value) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      birthday: value.toISOString().split("T")[0],
    });
  };
  const handleMedicalExam = (value) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      last_medical_exam: value.toISOString().split("T")[0],
    });
  };
  const handleDentalExam = (value) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      last_dental_exam: value.toISOString().split("T")[0],
    });
  };
  return (
    <Grid container>
      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>first name:</Box>
          <TextField
            fullWidth
            id="first_name"
            defaultValue={myLocalProfileData.first_name}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Last name:</Box>
          <TextField
            fullWidth
            id="last_name"
            defaultValue={myLocalProfileData.last_name}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Birthday:</Box>

          <MuiPickersUtilsProvider
            id="birthday"
            variant="outlined"
            utils={DateFnsUtils}
          >
            <DatePicker
              id="birthday"
              fullWidth
              inputVariant="outlined"
              disableFuture
              defaultValue={myLocalProfileData.birthday}
              value={myLocalProfileData.birthday}
              format="dd-MMM-yyyy"
              onChange={handleBirthdayChange}
            />
          </MuiPickersUtilsProvider>
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Phone: </Box>

          <PhoneInput
            country={"us"}
            // containerClass={classes.PhoneInput}
            // inputClass={classes.PhoneInput}
            inputStyle={{ backgroundColor:'#00000000', color:'gray',   height: "100%", width: "100%" }}
             containerStyle={{   height: "100%", width: "100%" }}
             dropdownStyle={{  backgroundColor:'white', color:'black', }}
            buttonStyle={{}}
            buttonClass={{ height: "100%" }}
            searchClass={classes.searchClass}
            value={myLocalProfileData.phone}
            // onChange={(phone) => handlePhoneChange(phone)}
            onChange={(phone, data) => {
              handlePhoneChange(phone, data);
            }}
            enableSearch
          />

        
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Gender:</Box>

          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              defaultValue={myLocalProfileData.gender}
              onChange={handleRGChange}
            >
              <FormControlLabel value="F" control={<Radio />} label="Female" />
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel
                value="NT"
                control={<Radio />}
                label="Not telling"
              />
            </RadioGroup>
          </FormControl>
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Weight in Kg:</Box>
          <TextField
            onChange={handleInputChange}
            fullWidth
            id="weight"
            defaultValue={myLocalProfileData.weight}
            variant="outlined"
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Neck size in inches:</Box>
          <TextField
            onChange={handleInputChange}
            fullWidth
            id="neck_size_inch"
            defaultValue={myLocalProfileData.neck_size_inch}
            variant="outlined"
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Last medical exam:</Box>

          <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
            <DatePicker
              id="medical_exam"
              fullWidth
              inputVariant="outlined"
              disableFuture
              defaultValue={myLocalProfileData.last_medical_exam}
              value={myLocalProfileData.last_medical_exam}
              onChange={handleMedicalExam}
              format="dd-MMM-yyyy"
            />
          </MuiPickersUtilsProvider>
        </Typography>
      </Grid>
      <Grid container className={classes.grid} xs={6} direction={"column"}>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Last date of dental exam:</Box>

          <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
            <DatePicker
              fullWidth
              id="dental_exam"
              inputVariant="outlined"
              defaultValue={myLocalProfileData.last_dental_exam}
              value={myLocalProfileData.last_dental_exam}
              disableFuture
              onChange={handleDentalExam}
              format="dd-MMM-yyyy"
            />
          </MuiPickersUtilsProvider>
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>What country you live in:</Box>

          <Autocomplete
            id="country"
            defaultValue={myLocalProfileData.country}
            onChange={(event, value) => handleCountryChange(value)}
            options={countries}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" />
            )}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>City you live in:</Box>

          <Autocomplete
            id="city"
            defaultValue={myLocalProfileData.city}
            options={cities}
            freeSolo
            onChange={(event, value) => handleCityChange(value)}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" />
            )}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Name of your dentist: </Box>

          <TextField
            fullWidth
            onChange={handleInputChange}
            id="current_dentist_name"
            defaultValue={myLocalProfileData.current_dentist_name}
            variant="outlined"
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Your Dentist's Phone Number:</Box>

          <TextField
            fullWidth
            onChange={handleInputChange}
            id="current_dentist_phone"
            defaultValue={myLocalProfileData.current_dentist_phone}
            variant="outlined"
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Your dentist's email: </Box>
          <TextField
            onChange={handleInputChange}
            fullWidth
            id="current_dentist_email"
            defaultValue={myLocalProfileData.current_dentist_email}
            variant="outlined"
          />
        </Typography>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Your dentist's website:</Box>

          <TextField
            onChange={handleInputChange}
            fullWidth
            id="current_dentist_website"
            defaultValue={myLocalProfileData.current_dentist_website}
            variant="outlined"
          />
        </Typography>
      </Grid>

      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}
      >
        Back
      </Button>
      {isStepOptional(activeStep) && (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSkip}
          className={classes.button}
        >
          Skip
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={isDisabled}
        className={classes.button}
      >
        {activeStep === steps.length - 1 ? "Update and close" : "Update"}
      </Button>
    </Grid>
  );
}
