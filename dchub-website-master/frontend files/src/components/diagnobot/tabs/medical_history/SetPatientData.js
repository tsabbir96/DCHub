import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { SET_PATIENTDATA_ID } from "../../../context/diagnobot/diagnobot_types";
import {
  update_patientData,
  update_submission_patientData,
} from "../../../context/submission/SubmissionsActions";

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
  paddingRight: {
    paddingRight: theme.spacing(4),
  },
}));
var countries = require("countries-cities").getCountries();
var cities = require("countries-cities").getCities("United States");
export default function SetPatientData({
  handleBackClick,

  value,
  setValue,
}) {
  const classes = useStyles();
  const [diagnostate, dispatch] = useDiagnoState();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const patientData = React.useRef({
    first_name: "",
    last_name: "",
    phone: "",
    birthday: null,
    gender: "",
    weight: 0,
    neck_size_inch: 0,
    last_medical_exam: null,
    last_dental_exam: null,
    country: "",
    city: "",
    medical_history: [],
    dental_history: [],
    explanation: "",
    current_medication: [],
    biphosphonate_medication: false,
    name_biphosphonate_medication: [],
    date_last_dose: null,
    how_you_take_it: "",
    allergies: [],
    teeth_prefs: [],
    more_about_teeth: "",
  });

  const [cities, setcities] = React.useState(
    require("countries-cities").getCities("United States")
  );
  const handleInputChange = (event) => {
    switch (event.target.id) {
      case "first_name":
        patientData.current.first_name = event.target.value;
        break;
      case "last_name":
        patientData.current.last_name = event.target.value;
        break;
      case "phone":
        patientData.current.phone = event.target.value;
        break;

      case "weight":
        patientData.current.weight = event.target.value;
        break;

      case "neck_size":
        patientData.current.neck_size_inch = event.target.value;
        break;
      case "explanation":
        patientData.current.explanation = event.target.value;
        break;

      case "more_about_teeth":
        patientData.current.more_about_teeth = event.target.value;
        break;

      case "biphosphonate_way":
        patientData.current.how_you_take_it = event.target.value;
        break;

      default:
        break;
    }
  };

  const handleGenderRadioChange = (event) => {
    patientData.current.gender = event.target.value;
  };
  const handleIsBiphosphonateRadioChange = (event) => {
    if (event.target.value === "yes") {
      patientData.current.biphosphonate_medication = true;
    } else {
      patientData.current.biphosphonate_medication = false;
    }
  };
  const handleCountryChange = (event) => {
    event.target.innerText
      ? setcities(require("countries-cities").getCities(event.target.innerText))
      : patientData.current.country
      ? setcities(
          require("countries-cities").getCities(patientData.current.country)
        )
      : setcities(require("countries-cities").getCities("United States"));

    patientData.current.country = event.target.innerText;
  };
  const handleCityChange = (event) => {
    patientData.current.city = event.target.innerText;
  };
  const handleChangeMedicalHistory = (value) => {
    patientData.current.medical_history = value;
  };

  const handleChangeDentalHistory = (value) => {
    patientData.current.dental_history = value;
  };

  const handleChangeAllergy = (value) => {
    patientData.current.allergies = value;
  };

  const handleChangeDentalPrefs = (value) => {
    patientData.current.teeth_prefs = value;
  };

  const handleChangeMedications = (value) => {
    patientData.current.current_medication = value;
  };

  const handleChangeBiphosphonateMed = (value) => {
    patientData.current.name_biphosphonate_medication = value;
  };
  const handleChangeBirthday = (value) => {};

  const handleNextClick = () => {
    setIsDisabled(true);

    if (diagnostate.patientDataId === 0) {
      update_submission_patientData(
        diagnostate.submissionId,
        patientData.current
      ).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: SET_PATIENTDATA_ID,
            payload: (diagnostate.patientDataId = res.data.patientData.id),
          });
          setIsDisabled(false);
          setValue(value + 1);
        } else {
          setIsDisabled(false);
        }
      });
    } else {
      update_patientData(
        diagnostate.patientDataId,

        patientData.current.first_name,
        patientData.current.last_name,

        patientData.current.phone,

        patientData.current.birthday,
        patientData.current.gender,
        patientData.current.weight,
        patientData.current.neck_size_inch,
        patientData.current.last_medical_exam,
        patientData.current.last_dental_exam,
        patientData.current.country,
        patientData.current.city,
        patientData.current.medical_history,
        patientData.current.dental_history,
        patientData.current.explanation,
        patientData.current.current_medication,
        patientData.current.biphosphonate_medication,
        patientData.current.name_biphosphonate_medication,
        patientData.current.date_last_dose,
        patientData.current.how_you_take_it,
        patientData.current.allergies,
        patientData.current.teeth_prefs,
        patientData.current.more_about_teeth
      ).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: SET_PATIENTDATA_ID,
            payload: (diagnostate.patientDataId = res.data.id),
          });
          setIsDisabled(false);
          setValue(value + 1);
        } else {
          setIsDisabled(false);
        }
      });
    }
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography variant={"h5"} className={classes.title}>
          <Box fontWeight={700} textAlign={"center"}>
            Please add your patient's informations:
          </Box>
        </Typography>

        <Grid container>
          <Typography variant={"h6"} color={"primary"} gutterBottom>
            <Box fontWeight={700}>General section</Box>
          </Typography>
        </Grid>

        <Grid container>
          <Grid
            container
            className={classes.paddingRight}
            direction={"column"}
            xs={6}
          >
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>First name: *</Box>
              <TextField
                required
                id="first_name"
                fullWidth
                label=""
                onChange={handleInputChange}
                variant="outlined"
              />
            </Typography>

            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Last name: *</Box>
              <TextField
                required
                id="last_name"
                fullWidth
                label=""
                onChange={handleInputChange}
                variant="outlined"
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
                  disableFuture
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                  onChange={handleChangeBirthday}
                />
              </MuiPickersUtilsProvider>
            </Typography>

            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Gender:</Box>

              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  onChange={handleGenderRadioChange}
                >
                  <FormControlLabel
                    value="F"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="M"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="NT"
                    control={<Radio />}
                    label="Not telling"
                  />
                </RadioGroup>
              </FormControl>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Weight:</Box>
              <TextField
                id="weight"
                onChange={handleInputChange}
                fullWidth
                label=""
                variant="outlined"
              />
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Neck size in inches:</Box>
              <TextField
                id="neck_size"
                onChange={handleInputChange}
                fullWidth
                label=""
                variant="outlined"
              />
            </Typography>
          </Grid>
          <Grid container xs={6} direction={"column"}>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Last medical exam:</Box>

              <MuiPickersUtilsProvider
                id="last_medical_exam"
                variant="outlined"
                utils={DateFnsUtils}
              >
                <DatePicker
                  id="birthday"
                  fullWidth
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Last dental exam:</Box>

              <MuiPickersUtilsProvider
                id="last_dental_exam"
                variant="outlined"
                utils={DateFnsUtils}
              >
                <DatePicker
                  id="birthday"
                  fullWidth
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Patient's country :</Box>

              <Autocomplete
                id="country"
                // defaultValue={localProfileData.current.country}
                onChange={handleCountryChange}
                options={countries}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="country"
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Patient's city</Box>

              <Autocomplete
                id="city"
                // defaultValue={localProfileData.current.city}
                options={cities}
                freeSolo
                onChange={handleCityChange}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} fullWidth variant="outlined" />
                )}
              />
            </Typography>

            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>phone:</Box>
              <TextField
                required
                id="phone"
                fullWidth
                label=""
                onChange={handleInputChange}
                variant="outlined"
              />
            </Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />
        <Grid container>
          <Typography variant={"h6"} gutterBottom color={"primary"}>
            <Box fontWeight={700}>Medical & Dental History</Box>
          </Typography>
        </Grid>

        <Grid container>
          <Grid
            container
            className={classes.paddingRight}
            direction={"column"}
            xs={6}
            xl={6}
          >
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Medical history:</Box>
            </Typography>
            <Typography>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={medicalHistoryList}
                freeSolo
                getOptionLabel={(option) => option}
                filterSelectedOptions
                onChange={(event, value) => handleChangeMedicalHistory(value)} // prints the selected value
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add condition(s)"
                  />
                )}
              />
            </Typography>

            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Dental history:</Box>
            </Typography>
            <Typography>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={dentalHistoryList}
                freeSolo
                getOptionLabel={(option) => option}
                onChange={(event, value) => handleChangeDentalHistory(value)}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add condition(s)"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Explanation of marked conditions:</Box>
            </Typography>
            <Typography>
              <TextField
                fullWidth
                id="explanation"
                onChange={handleInputChange}
                multiline
                rows={4}
                label=""
                variant="outlined"
              />
            </Typography>

            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>List of all known allergies:</Box>
            </Typography>
            <Typography>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={allergyList}
                freeSolo
                // getOptionLabel={(option) => option.name}
                getOptionLabel={(option) => option}
                onChange={(event, value) => handleChangeAllergy(value)}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add condition(s)"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Dental preferences:</Box>
            </Typography>
            <Typography>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={prefs}
                freeSolo
                onChange={(event, value) => handleChangeDentalPrefs(value)}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add detail(s)"
                  />
                )}
              />
            </Typography>

            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Explanation of dental preferences:</Box>
            </Typography>
            <Typography>
              <TextField
                fullWidth
                id="more_about_teeth"
                onChange={handleInputChange}
                label=""
                variant="outlined"
              />
            </Typography>
          </Grid>
          <Grid container xs={6} xl={6} direction={"column"}>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                List of all of the medications and supplements you patient is
                currently taking:
              </Box>
            </Typography>
            <Typography>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={drugs}
                freeSolo
                onChange={(event, value) => handleChangeMedications(value)}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add detail(s)"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                Is your patient taking any medications containing biphosphonates
                for osteoporosis:
              </Box>

              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="is_biphosphonates"
                  name="is_biphosphonates"
                  //   defaultValue={localProfileData.current.gender}
                  //   onChange={handleRGChange}
                  onChange={handleIsBiphosphonateRadioChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                List of taken medication containing biphosphonates for
                osteoporosis:
              </Box>
              <Autocomplete
                className={classes.paragraph}
                multiple
                fullWidth
                id="tags-outlined"
                options={biphosphonateDrugs}
                freeSolo
                // getOptionLabel={(option) => option.name}
                getOptionLabel={(option) => option}
                onChange={(event, value) => handleChangeBiphosphonateMed(value)}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add medication(s)"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>Date of last dose:</Box>
              <MuiPickersUtilsProvider
                id="date_last_dose"
                variant="outlined"
                utils={DateFnsUtils}
              >
                <DatePicker
                  id="date_last_dose_picker"
                  fullWidth
                  inputVariant="outlined"
                  format="MM/dd/yyyy"
                />
              </MuiPickersUtilsProvider>
            </Typography>
            <Typography className={classes.marginTopTitle}>
              <Box fontWeight={700}>
                How your patient takes the biphosphonates medications:
              </Box>
              <TextField
                fullWidth
                id="biphosphonate_way"
                onChange={handleInputChange}
                label=""
                variant="outlined"
              />
            </Typography>
          </Grid>
        </Grid>

        <Divider className={classes.divider} />
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
          disabled={isDisabled}
          onClick={handleNextClick}
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

const medicalHistoryList = [
  "Addiction",
  "Anemia",
  "Anxiety",
  "Arthritis",
  "Asthma",
  "Bipolar",
  "Colon Disease ",
  "Congestive Heart Failure ",
  "COPD/Emphysema ",
  "Dementia ",
  "Depression ",
  "Diabetes Mellitus ",
  "Enlarged Prostate ",
  " Reflux/GERD ",
  " Blood Clot ",
  " Heart Attack ",
  " Hepatitis ",
  " Hyperlipidemia (High Cholesterol)  ",
  " Hypertension (High BP)  ",
  " Irritable Bowel Syndrome (IBS)  ",
  " Kidney Disease ",
  " Kidney Stones ",
  " Liver Disease ",
  " Migraine ",
  " Osteoporosis ",
  " Parkinson’s Disease ",
  " Pulmonary Embolism ",
  " Schizophrenia ",
  " Seizures/Epilepsy",
  " Skin Disease",
  "  TIA/CVA (Stroke)",
  "Thyroid Disease",
  "Appendectomy",
  "Coronary Artery Bypass (Open Heart)",
  "Carotid Endarterectomy",
  "Cholecystectomy (Gallbladder)",
  "Bariatric -(Gastric Bypass, Lap Banding)",
  " Hysterectomy(Partial or Total)",
  " Nephrectomy",
  " Splenectomy",
  " Tonsillectomy, Adenoidectomy",
  " COPD/ Emphysema",
  " Alcoholism",
  " Anemia",
  " Asthma",
  " Blood Disorder",
  " Cerebral Infarction ",
  " Dementia ",
  " Diabetes ",
  " Genetic Disease (sickle cell, cystic fibrosis)  ",
  " Osteoporosis  ",
  " Dysthyroidia  ",
];

const dentalHistoryList = [
  "Periodontal bone loss",
  "Caries",
  "Cavity",
  "Periapical lesion",
  "Residual root",
  "Crown",
  "Implant",
  "Primary dentition",
  "Third molar position",
  "Ectopic and supernumerary teeth",
  "Missing teeth",
  "Filling",
  "Endodontically treated teeth",
  "Post",
];

const allergyList = [
  "Food Allergy",
  "Insect Allergy",
  "Latex Allergy",
  "Mold Allergy",
  "Pet Allergy",
  "Pollen Allergy",
];
const drugs = ["Aspirin"];
const biphosphonateDrugs = ["Aspirin"];

const prefs = [
  "I want my teeth to look whiter",
  "I want my teeth to be straight",
  "I like to feel more confident",
  "I like to have a sexy smile",
  "I just want to have beautiful and healthy teeth",
  "I prefer natural straighthening of my teeth",
  "I want braces",
  "I prefer aligners over braces",
  "I prefer procelain veneers",
  "I prefer metal free dentistry",
  "I prefer stronger & more permanent fillings",
  "I like to show more teeth",
  "I want to show less gums",
  "I like to have a broader smile",
  "I want to have a full mouth smile makeover",
];
