import {
  Box,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";

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
  title: {
    marginTop: theme.spacing(8),
  },
}));
export default function FMRPage06({
  reportTextfields,
  // , setReportTextfields
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    switch (event.target.id) {
      case "advantages":
        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_advantages: event.target.value,
        // });

        reportTextfields.recommendations_advantages = event.target.value;

        break;

      case "disadvantages":
        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_disadvantages: event.target.value,
        // });
        reportTextfields.recommendations_disadvantages = event.target.value;

        break;

      case "risks":
        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_risks: event.target.value,
        // });
        reportTextfields.recommendations_risks = event.target.value;

        break;

      case "cosmetic":
        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_cosmetic_considerations: event.target.value,
        // });
        reportTextfields.recommendations_cosmetic_considerations =
          event.target.value;

        break;
      case "qualification":
        reportTextfields.recommendations_dentist_required_qualification =
          event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_dentist_required_qualification: event.target.value,
        // });
        break;
      case "time_req":
        reportTextfields.recommendations_ttt_time_requirements =
          event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_ttt_time_requirements: event.target.value,
        // });
        break;
      case "fee_guidelines":
        reportTextfields.recommendations_fee_guidelines = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_fee_guidelines: event.target.value,
        // });
        break;
      case "plan_options":
        reportTextfields.recommendations_payment_plan_options =
          event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_payment_plan_options: event.target.value,
        // });
        break;
      case "dentist_name":
        reportTextfields.recommendations_dentist_name = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_dentist_name: event.target.value,
        // });
        break;
      case "speciality":
        reportTextfields.recommendations_speciality = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_speciality: event.target.value,
        // });
        break;

      case "exp":
        reportTextfields.recommendations_years_of_experience =
          event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_years_of_experience: event.target.value,
        // });
        break;
      case "clinic_name":
        reportTextfields.recommendations_clinic_name = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_clinic_name: event.target.value,
        // });
        break;

      case "phone":
        reportTextfields.recommendations_phone = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_phone: event.target.value,
        // });
        break;

      case "email":
        reportTextfields.recommendations_email = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_email: event.target.value,
        // });
        break;
      case "website":
        reportTextfields.recommendations_website = event.target.value;

        // setReportTextfields({
        //   ...reportTextfields,
        //   recommendations_website: event.target.value,
        // });
        break;

      default:
        break;
    }
  };

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} gutterBottom variant="h4">
        <Box textAlign="center" fontWeight="500">
          Recommendations
        </Box>
      </Typography>
      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Advantages:</Box>
      </Typography>

      <TextField
        id="advantages"
        label=""
        fullWidth
        multiline
        defaultValue={reportTextfields.recommendations_advantages}
        onChange={(event) => {
          handleChange(event);
        }}
        rows={4}
        variant="outlined"
      />
      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Disadvantages:</Box>
      </Typography>

      <TextField
        id="disadvantages"
        label=""
        fullWidth
        multiline
        onChange={(event) => {
          handleChange(event);
        }}
        defaultValue={reportTextfields.recommendations_disadvantages}
        rows={4}
        variant="outlined"
      />

      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Risks:</Box>
      </Typography>

      <TextField
        id="risks"
        label=""
        fullWidth
        onChange={(event) => {
          handleChange(event);
        }}
        multiline
        defaultValue={reportTextfields.recommendations_risks}
        rows={4}
        variant="outlined"
      />

      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Cosmetic Considerations:</Box>
      </Typography>

      <TextField
        id="cosmetic"
        label=""
        fullWidth
        onChange={(event) => {
          handleChange(event);
        }}
        defaultValue={reportTextfields.recommendations_cosmetic_considerations}
        multiline
        rows={4}
        variant="outlined"
      />

      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Dentist Required Qualification:</Box>
      </Typography>

      <TextField
        id="qualification"
        label=""
        fullWidth
        onChange={(event) => {
          handleChange(event);
        }}
        multiline
        defaultValue={
          reportTextfields.recommendations_dentist_required_qualification
        }
        rows={4}
        variant="outlined"
      />

      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Treatment Time Requirements:</Box>
      </Typography>

      <TextField
        id="time_req"
        label=""
        onChange={(event) => {
          handleChange(event);
        }}
        fullWidth
        defaultValue={reportTextfields.recommendations_ttt_time_requirements}
        multiline
        rows={4}
        variant="outlined"
      />

      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Treatment Fee Guidelines:</Box>
      </Typography>

      <TextField
        id="fee_guidelines"
        label=""
        fullWidth
        onChange={(event) => {
          handleChange(event);
        }}
        multiline
        defaultValue={reportTextfields.recommendations_fee_guidelines}
        rows={4}
        variant="outlined"
      />
      <Typography
        gutterBottom
        className={classes.marginTop}
        color="textSecondary"
      >
        <Box fontWeight="500">Payment Plan Options:</Box>
      </Typography>

      <TextField
        id="plan_options"
        label=""
        onChange={(event) => {
          handleChange(event);
        }}
        fullWidth
        defaultValue={reportTextfields.recommendations_payment_plan_options}
        multiline
        rows={4}
        variant="outlined"
      />

      <Typography className={classes.title} gutterBottom variant="h4">
        <Box textAlign="center" fontWeight="500">
          Dentist/Clinic Recommendation
        </Box>
      </Typography>

      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Dentist Name:</Box>
        </Typography>
        <TextField
          id="dentist_name"
          label=""
          fullWidth
          multiline
          onChange={(event) => {
            handleChange(event);
          }}
          defaultValue={reportTextfields.recommendations_dentist_name}
          rows={2}
          variant="outlined"
        />
      </Grid>
      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Specialty:</Box>
        </Typography>
        <TextField
          id="speciality"
          label=""
          fullWidth
          multiline
          onChange={(event) => {
            handleChange(event);
          }}
          defaultValue={reportTextfields.recommendations_speciality}
          rows={2}
          variant="outlined"
        />
      </Grid>
      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Year of Experience:</Box>
        </Typography>
        <TextField
          id="exp"
          label=""
          fullWidth
          onChange={(event) => {
            handleChange(event);
          }}
          multiline
          defaultValue={reportTextfields.recommendations_years_of_experience}
          rows={2}
          variant="outlined"
        />
      </Grid>

      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Clinic Name:</Box>
        </Typography>
        <TextField
          id="clinic_name"
          label=""
          fullWidth
          multiline
          onChange={(event) => {
            handleChange(event);
          }}
          rows={2}
          defaultValue={reportTextfields.recommendations_clinic_name}
          variant="outlined"
        />
      </Grid>

      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Phone:</Box>
        </Typography>
        <TextField
          id="phone"
          label=""
          onChange={(event) => {
            handleChange(event);
          }}
          fullWidth
          multiline
          rows={2}
          defaultValue={reportTextfields.recommendations_phone}
          variant="outlined"
        />
      </Grid>

      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Email:</Box>
        </Typography>
        <TextField
          id="email"
          label=""
          onChange={(event) => {
            handleChange(event);
          }}
          fullWidth
          defaultValue={reportTextfields.recommendations_email}
          multiline
          rows={2}
          variant="outlined"
        />
      </Grid>
      <Grid container className={classes.marginTop}>
        <Typography color="textSecondary">
          <Box fontWeight="500">Website:</Box>
        </Typography>
        <TextField
          id="website"
          label=""
          onChange={(event) => {
            handleChange(event);
          }}
          fullWidth
          multiline
          defaultValue={reportTextfields.recommendations_website}
          rows={2}
          variant="outlined"
        />
      </Grid>
    </Container>
  );
}
