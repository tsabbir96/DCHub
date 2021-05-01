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
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { editMedicalHistory } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_MH_PROFILE_SUCCESS } from "../context/profile_data/types";

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(2),
  },
  marginTopSubtitle: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(0, 2),
  },
}));

export default function MedicalHistoryEdit({
  steps,
  activeStep,
  handleNext,
  isStepOptional,
  handleSkip,
  handleBack,
}) {
  const [state, dispatch] = useProfileData();
  const profile = state.profile;
  const { open } = useAlertSnackbarContext();
  const [isDisabled, setDisabled] = React.useState(false);
  const classes = useStyles();
  const [myLocalMedicalHistory, setMyLocalMedicalHistory] = React.useState({
    medical_history: profile.medical_history,
    dental_history: profile.dental_history,
    explanation: profile.explanation,
    current_medication: profile.current_medication,
    biphosphonate_medication: profile.biphosphonate_medication,
    name_biphosphonate_medication: profile.name_biphosphonate_medication,
    date_last_dose: profile.date_last_dose,

    allergies: profile.allergies,
  });

  const handleChangeDentalHistory = (value) => {
    setMyLocalMedicalHistory({
      ...myLocalMedicalHistory,
      dental_history: value,
    });
  };

  const handleChangeMedications = (value) => {
    setMyLocalMedicalHistory({
      ...myLocalMedicalHistory,
      current_medication: value,
    });
  };

  const handleChangeMedicalHistory = (value) => {
    setMyLocalMedicalHistory({
      ...myLocalMedicalHistory,
      medical_history: value,
    });
  };

  const handleClick = () => {
    setDisabled(true);

    editMedicalHistory(
      profile.id,
      myLocalMedicalHistory.medical_history,
      myLocalMedicalHistory.dental_history,
      myLocalMedicalHistory.explanation,
      myLocalMedicalHistory.current_medication,
      myLocalMedicalHistory.biphosphonate_medication,
      myLocalMedicalHistory.name_biphosphonate_medication,
      myLocalMedicalHistory.date_last_dose,
      myLocalMedicalHistory.allergies
    )
      .then((data) => {
         if (data.status === 200) {
          dispatch({ type: EDIT_MH_PROFILE_SUCCESS, payload: data.data });

          open("success", "edit successful");
          setDisabled(false);

          handleNext();
        }
      })
      .catch((error) => {
        setDisabled(false);

        open("error", "error");
      });
  };

  const handleRBClick = (event) => {
    if (event.target.value === "yes") {
      setMyLocalMedicalHistory({
        ...myLocalMedicalHistory,
        biphosphonate_medication: true,
      });
    } else {
      setMyLocalMedicalHistory({
        ...myLocalMedicalHistory,
        biphosphonate_medication: false,
      });
    }
  };

  const handleChangeAllergy = (value) => {
    setMyLocalMedicalHistory({ ...myLocalMedicalHistory, allergies: value });
  };

  const handleBiphosphonateTTT = (value) => {
    setMyLocalMedicalHistory({
      ...myLocalMedicalHistory,
      name_biphosphonate_medication: value,
    });
  };

  const handleSelectedLastTimeTaken = (value) => {
    setMyLocalMedicalHistory({
      ...myLocalMedicalHistory,
      date_last_dose: value.toISOString().split("T")[0],
    });
  };

  const handleInputChange = (event) => {
    switch (event.target.id) {
      case "explanation":
        setMyLocalMedicalHistory({
          ...myLocalMedicalHistory,
          explanation: event.target.value,
        });

        break;

      default:
        return;
    }
  };

  return (
    <Grid container>
      <Grid container className={classes.grid} direction={"column"} xs={6}>
        <Typography className={classes.marginTopTitle}>
          <Box fontWeight={700}>Medical history:</Box>

          <Autocomplete
            className={classes.paragraph}
            multiple
            id="tags-outlined"
            options={medicalHistoryList}
            freeSolo
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            onChange={(event, value) => handleChangeMedicalHistory(value)}
            defaultValue={myLocalMedicalHistory.medical_history}
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
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>Dental history:</Box>

          <Autocomplete
            className={classes.paragraph}
            multiple
            id="tags-outlined"
            options={dentalHistoryList}
            freeSolo
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            onChange={(event, value) => handleChangeDentalHistory(value)}
            defaultValue={myLocalMedicalHistory.dental_history}
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
        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>
            Tell us more about your medical and dental history:
          </Box>
          <TextField
            fullWidth
            id="explanation"
            multiline
            rows={3}
            defaultValue={profile.explanation}
            variant="outlined"
            onChange={handleInputChange}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>
            List of all of the medications and supplements you are currently
            taking:
          </Box>

          <Autocomplete
            className={classes.paragraph}
            multiple
            id="tags-outlined"
            options={treatmentsList}
            freeSolo
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            onChange={(event, value) => handleChangeMedications(value)}
            defaultValue={myLocalMedicalHistory.current_medication}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label=""
                placeholder="Add treatment(s)"
              />
            )}
          />
        </Typography>
      </Grid>
      <Grid container className={classes.grid} xs={6} direction={"column"}>
        <Typography className={classes.marginTopTitle}>
          <Box fontWeight={700}>Known allergies:</Box>

          <Autocomplete
            className={classes.paragraph}
            multiple
            id="tags-outlined"
            options={allergyList}
            freeSolo
            // getOptionLabel={(option) => option.name}
            getOptionLabel={(option) => option}
            onChange={(event, value) => handleChangeAllergy(value)}
            defaultValue={myLocalMedicalHistory.allergies}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label=""
                placeholder="Add allergy(ies)"
              />
            )}
          />
        </Typography>

        <Typography className={classes.marginTopSubtitle}>
          <Box fontWeight={700}>
            Have you ever taken any medication contraining biophosphanates for
            Osteoprosis?:
          </Box>

          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="isBiphosphonate"
              name="isBiphosphonate"
              defaultValue={
                myLocalMedicalHistory.biphosphonate_medication ? "yes" : "no"
              }
              onChange={handleRBClick}
            >
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            </RadioGroup>
          </FormControl>
        </Typography>

        {myLocalMedicalHistory.biphosphonate_medication ? (
          <>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>
                Medication containing biphosphonates for osteoporosis:
              </Box>

              <Autocomplete
                className={classes.paragraph}
                multiple
                id="tags-outlined"
                options={BiphosphnateTreatmentsList}
                freeSolo
                // getOptionLabel={(option) => option.name}
                getOptionLabel={(option) => option}
                onChange={(event, value) => handleBiphosphonateTTT(value)}
                defaultValue={
                  myLocalMedicalHistory.name_biphosphonate_medication
                }
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label=""
                    placeholder="Add treatment(s)"
                  />
                )}
              />
            </Typography>
            <Typography className={classes.marginTopSubtitle}>
              <Box fontWeight={700}>Date of late dose: </Box>

              <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
                <DatePicker
                  disableFuture
                  fullWidth
                  inputVariant="outlined"
                  defaultValue={myLocalMedicalHistory.date_last_dose}
                  value={myLocalMedicalHistory.date_last_dose}
                  onChange={handleSelectedLastTimeTaken}
                  format="dd-MMM-yyyy"
                />
              </MuiPickersUtilsProvider>
            </Typography>
          </>
        ) : null}
      </Grid>

      <div>
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
      </div>
    </Grid>
  );
}

const treatmentsList = [
  "Aspirin",
  "acetaminophen and codeine	",
  "albuterol aerosol",
  "albuterol HFA",
  "alendronate",
  "allopurinol",
  "alprazolam",
  "amitriptyline",
  "amoxicillin and clavulanate K+	",
  "amoxicillin",
  "amphetamine and dextroamphetamine XR",
  "atenolol",
  "atorvastatin",
  "azithromycin",
  "benazepril and amlodipine	",
  "carisoprodol",
  "carvedilol",
  "cefdinir",
  "celecoxib",
  "cephalexin",
  "ciprofloxacin",
  "citalopram",
  "clonazepam",
  "clonidine HCl",
  "clopidogrel",
  "cyclobenzaprine",
  "diazepam",
  "diclofenac sodium",
  "Duloxetine",
  "doxycycline hyclate",
  "enalapril",
  "escitalopram",
  "esomeprazole",
  "ezetimibe",
  "fenofibrate",
  "fexofenadine",
  "fluconozole",
  "fluoxetine HCl",
  "fluticasone",
  "folic acid	",
  "furosemide",
  "gabapentin",
  "glimepiride",
  "glyburide",
  "glipizide",
  "hydrochlorothiazide",
  "ibuprophen",
  "lantus ",
  "lansoprazole",
  "levofloxacin",
  "levothyroxine sodium	",
  "lisinopril",
  "lorazepam",
  "losartan",
  "lovastatin",
  "meloxicam",
  "metformin HCl	",
  "methylprednisone",
  "metoprolol tartrate	",
  "omeprazole",
  "paroxetine",
  "pioglitazone",
  "potassium Chloride	",
  "pravastatin",
  "prednisone",
  "pregabalin",
  "promethazine",
  "quetiapine",
  "ranitidine",
  "rosuvastatin",
  "sertraline",
  "viagra ",
  "topiramate",
  "tramadol",
  "valaciclovir",
  "valsartan",
  "verapamil ",
  "zolpidem",
];
const BiphosphnateTreatmentsList = [
  "Risedronate (Actonel)",
  "Alendronate (Fosamax)",
  "Ibandronate (Boniva)",
  "Zoledronic Acid (Reclast)",
  "Pamidronate (Aredia)",
  "Etidronate (Didronel)",
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
