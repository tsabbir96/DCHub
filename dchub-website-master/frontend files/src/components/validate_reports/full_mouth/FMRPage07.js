import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { patch_submission_recs } from "../../context/submission/SubmissionsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },

  vipLogo: {
    width: "100%",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    width: "30%",
    borderTop: `5px solid ${theme.palette.primary.main}`,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  marginTop: {
    marginTop: theme.spacing(8),
  },
  marginBottom: {
    marginBottom: theme.spacing(21),
  },
}));
export default function FMRPage07({ reportTextfields, fullInfo }) {
  const classes = useStyles();
  const { open } = useAlertSnackbarContext();
  const [value, setValue] = React.useState(fullInfo.status);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    patch_submission_recs(
      fullInfo.id,
      value,
      reportTextfields.recommendations_advantages,
      reportTextfields.recommendations_disadvantages,
      reportTextfields.recommendations_risks,
      reportTextfields.recommendations_cosmetic_considerations,
      reportTextfields.recommendations_dentist_required_qualification,
      reportTextfields.recommendations_ttt_time_requirements,
      reportTextfields.recommendations_fee_guidelines,
      reportTextfields.recommendations_payment_plan_options,
      reportTextfields.recommendations_dentist_name,
      reportTextfields.recommendations_speciality,
      reportTextfields.recommendations_years_of_experience,
      reportTextfields.recommendations_clinic_name,
      reportTextfields.recommendations_phone,
      reportTextfields.recommendations_email,
      reportTextfields.recommendations_website
    ).then((res) => {
      if (res.status === 200) {
        open("success", "Update saved");
      }
    });
  };

  return (
    <Container className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Status</FormLabel>
        <RadioGroup
          aria-label="status"
          name="status"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="PENDING"
            control={<Radio />}
            label="PENDING"
          />

          <FormControlLabel value="READY" control={<Radio />} label="READY" />
          <FormControlLabel
            value="MISSING_INFO"
            control={<Radio />}
            label="MISSING_INFO"
          />
          <FormControlLabel
            value="MISSING_XRAY"
            control={<Radio />}
            label="MISSING_XRAY"
          />
          <FormControlLabel
            value="MISSING_MOUTH_IMAGES"
            control={<Radio />}
            label="MISSING_MOUTH_IMAGES"
          />
          <FormControlLabel
            value="WRONG_INFO"
            control={<Radio />}
            label="WRONG_INFO"
          />
          <FormControlLabel
            value="WRONG_XRAY"
            control={<Radio />}
            label="WRONG_XRAY"
          />
          <FormControlLabel
            value="WRONG_IMAGES"
            control={<Radio />}
            label="WRONG_IMAGES"
          />
          <FormControlLabel value="OTHER" control={<Radio />} label="OTHER" />
        </RadioGroup>
      </FormControl>
      <Typography
        className={classes.marginTop}
        gutterBottom
        color="textSecondary"
      >
        <Box fontWeight="500">Consulting Dentist Name:</Box>
      </Typography>

      <Typography>
        <Box fontWeight="500">
          {fullInfo.verifier.first_name + " " + fullInfo.verifier.last_name}
        </Box>
      </Typography>

      <Typography
        className={classes.marginTop}
        gutterBottom
        color="textSecondary"
      >
        <Box fontWeight="500">Verification date:</Box>
      </Typography>

      <Typography>
        <Box fontWeight="500">{fullInfo.verification_date}</Box>
      </Typography>

      <Button
        className={classes.marginBottom}
        fullWidth
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        save
      </Button>
    </Container>
  );
}
