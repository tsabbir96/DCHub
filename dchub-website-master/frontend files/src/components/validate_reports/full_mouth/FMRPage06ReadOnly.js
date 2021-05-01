import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import AssignmentTurnedInTwoToneIcon from "@material-ui/icons/AssignmentTurnedInTwoTone";
import BusinessTwoToneIcon from "@material-ui/icons/BusinessTwoTone";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "284mm",
    height: "284mm",
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
    marginTop: theme.spacing(4),
  },
  title: {
    marginTop: theme.spacing(8),
  },
  gridColumn: {
    padding: theme.spacing(1),
  },
  cardColumn: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "#FAF9F5",
    width: "100%",
  },
  cardDoc: {
    width: "100%",
    borderColor: theme.palette.primary.main,
  },
  divDoc: {
    margin: theme.spacing(1),
  },
  titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));
export default function FMRPage06ReadOnly({
  reportTextfields,
  fullInfo,
  // , setReportTextfields
}) {
  const classes = useStyles();
  var mdate = new Date(fullInfo.creation_date);

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.titleStyle} color="primary">
        <Box fontWeight="800"> XIV. Recommendations </Box>
      </Typography>
      <Divider />

      <Grid container>
        <Grid item container className={classes.gridColumn} xs={6}>
          <Card variant="outlined" className={classes.cardColumn}>
            <CardContent>
              <Grid container alignItems="center">
                <AssignmentTurnedInTwoToneIcon />
                <Typography>
                  <Box textAlign="center" fontWeight="800">
                    Treatment recommendations
                  </Box>
                </Typography>
              </Grid>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Advantages:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_advantages}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Disadvantages:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_disadvantages}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Risks:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_risks}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Cosmetic Considerations:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_cosmetic_considerations}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Dentist Required Qualification:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {
                    reportTextfields.recommendations_dentist_required_qualification
                  }
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Treatment Time Requirements:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_ttt_time_requirements}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Treatment Fee Guidelines:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_fee_guidelines}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Payment Plan Options:</Box>
              </Typography>
              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_payment_plan_options}
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item container className={classes.gridColumn} xs={6}>
          <Card className={classes.cardColumn} variant="outlined">
            <CardContent>
              <Grid container alignItems="center">
                <BusinessTwoToneIcon />
                <Typography>
                  <Box textAlign="center" fontWeight="800">
                    -Dentist/Clinic recommendations
                  </Box>
                </Typography>
              </Grid>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Dentist Name:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_dentist_name}
                </Box>
              </Typography>
              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Specialty:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_speciality}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Year of Experience:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_years_of_experience}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Clinic Name:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_clinic_name}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Phone:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_phone}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Email:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_email}
                </Box>
              </Typography>

              <Typography className={classes.marginTop} color="textPrimary">
                <Box fontWeight="700">-Website:</Box>
              </Typography>

              <Typography color="textPrimary">
                <Box fontWeight="500">
                  {reportTextfields.recommendations_website}
                </Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className={classes.divDoc}>
        <Card className={classes.cardDoc} variant="outlined">
          <CardContent>
            <Grid container>
              <Grid container direction="column" item xs={6}>
                <Typography
                  className={classes.marginTop}
                  gutterBottom
                  color="textPrimary"
                >
                  <Box fontWeight="700">-Consulting Dentist Name:</Box>
                </Typography>

                <Typography>
                  <Box fontWeight="500">
                    {fullInfo.verifier.first_name +
                      " " +
                      fullInfo.verifier.last_name}
                  </Box>
                </Typography>
              </Grid>
              <Grid container item direction="column" xs={6}>
                <Typography
                  className={classes.marginTop}
                  gutterBottom
                  color="textPrimary"
                >
                  <Box fontWeight="700">-Creation date:</Box>
                </Typography>

                <Typography>
                  <Box fontWeight="500">{mdate.toLocaleString()}</Box>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
