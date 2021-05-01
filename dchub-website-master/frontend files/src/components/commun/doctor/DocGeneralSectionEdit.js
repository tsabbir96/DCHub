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
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { editGeneralSectionDoctor } from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../../context/profile_data/types";
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
}));

export default function DocGeneralSectionEdit({
  steps,
  activeStep,
  handleNext,
  isStepOptional,
  handleSkip,
  handleBack,
}) {
  const classes = useStyles();
  const [profileData, dispatch] = useProfileData();
  const [myLocalProfileData, setMyLocalProfileData] = React.useState({
    first_name: profileData.profile.first_name,
    last_name: profileData.profile.last_name,
    birthday: profileData.profile.birthday,
    phone: profileData.profile.phone,
    gender: profileData.profile.gender,
    degree: profileData.profile.degree,
    dental_speciality: profileData.profile.dental_speciality,
    name_of_practice: profileData.profile.name_of_practice,
    license_country: profileData.profile.license_country,
    practice_city: profileData.profile.practice_city,
    practice_zip_code: profileData.profile.practice_zip_code,
    practice_website: profileData.profile.practice_website,
  });

  const [isDisabled, setIsDisabled] = React.useState(false);

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

      case "phone":
        setMyLocalProfileData({
          ...myLocalProfileData,
          phone: event.target.value,
        });
        break;

      case "dental_speciality":
        setMyLocalProfileData({
          ...myLocalProfileData,
          dental_speciality: event.target.value,
        });
        break;

      case "name_of_practice":
        setMyLocalProfileData({
          ...myLocalProfileData,
          name_of_practice: event.target.value,
        });
        break;

      case "practice_zip_code":
        setMyLocalProfileData({
          ...myLocalProfileData,
          practice_zip_code: event.target.value,
        });
        break;

      case "practice_website":
        setMyLocalProfileData({
          ...myLocalProfileData,
          practice_website: event.target.value,
        });
        break;

      default:
        return;
    }
  };
  const handleBirthdayChange = (value) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      birthday: value.toISOString().split("T")[0],
    });
  };

  const handleRGChange = (event) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      gender: event.target.value,
    });
  };
  const handleChangeDegree = (value) => {
     if (value) {
      setMyLocalProfileData({
        ...myLocalProfileData,
        degree: value,
      });
    } else {
      setMyLocalProfileData({
        ...myLocalProfileData,
        degree: "NT",
      });
    }
  };

  const [cities, setcities] = React.useState(
    myLocalProfileData.practice_city
      ? require("countries-cities").getCities(
          myLocalProfileData.license_country
        )
      : require("countries-cities").getCities("United States")
  );

  const handleCountryChange = (value) => {
    value
      ? setcities(require("countries-cities").getCities(value))
      : myLocalProfileData.license_country
      ? setcities(
          require("countries-cities").getCities(
            myLocalProfileData.license_country
          )
        )
      : setcities(require("countries-cities").getCities("United States"));

    setMyLocalProfileData({ ...myLocalProfileData, license_country: value });
  };

  const handleCityChange = (value) => {
    setMyLocalProfileData({ ...myLocalProfileData, practice_city: value });
  };
  const { open } = useAlertSnackbarContext();
  const handlePhoneChange = (passedPhone, data) => {
    setMyLocalProfileData({
      ...myLocalProfileData,
      phone: passedPhone,
    });
  };
  const handleClick = () => {
    setIsDisabled(true);
    editGeneralSectionDoctor(
      profileData.profile.id,
      myLocalProfileData.first_name,
      myLocalProfileData.last_name,

      myLocalProfileData.phone,
      myLocalProfileData.birthday,
      myLocalProfileData.gender,
      myLocalProfileData.degree,
      myLocalProfileData.dental_speciality,
      myLocalProfileData.name_of_practice,
      myLocalProfileData.license_country,
      myLocalProfileData.practice_city,
      myLocalProfileData.practice_zip_code,
      myLocalProfileData.practice_website,

      false
    ).then((res) => {
      if (res.status === 200) {
        dispatch({ type: EDIT_GS_PROFILE_SUCCESS, payload: res.data });

        open("success", "edit successful");
        setIsDisabled(false);

        handleNext();
      } else {
        open("error", "edit failed");
        setIsDisabled(false);
      }
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
          <Box fontWeight={700}>Degree:</Box>
          <Autocomplete
            className={classes.paragraph}
            id="tags-outlined"
            options={degrees}
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            // onChange={(  value) => handleBiphosphonateTTT(value)}
            onChange={(event, value) => handleChangeDegree(value)}
            defaultValue={myLocalProfileData.degree}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label=""
                placeholder="Add degree"
              />
            )}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Dental Specialty: </Box>
          <TextField
            fullWidth
            onChange={handleInputChange}
            id="dental_speciality"
            defaultValue={myLocalProfileData.dental_speciality}
            variant="outlined"
          />
        </Typography>
      </Grid>
      <Grid container className={classes.grid} xs={6} direction={"column"}>
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Name of practice:</Box>
          <TextField
            fullWidth
            id="name_of_practice"
            defaultValue={myLocalProfileData.name_of_practice}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>License in Which Country?:</Box>

          <Autocomplete
            id="license_country"
            defaultValue={myLocalProfileData.license_country}
            onChange={(event, value) => handleCountryChange(value)}
            options={countries}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} fullWidth variant="outlined" />
            )}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Practice city:</Box>

          <Autocomplete
            id="city"
            defaultValue={myLocalProfileData.practice_city}
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
          <Box fontWeight={700}>Practice ZipCode:</Box>
          <TextField
            fullWidth
            id="practice_zip_code"
            defaultValue={myLocalProfileData.practice_zip_code}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Practice website:</Box>
          <TextField
            fullWidth
            id="practice_website"
            defaultValue={myLocalProfileData.practice_website}
            variant="outlined"
            onChange={handleInputChange}
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

const degrees = ["NT", "DDS", "DMD", "BDS", "RDH"];
var countries = require("countries-cities").getCountries();
