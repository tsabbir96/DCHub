import {
  Box,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import WcIcon from "@material-ui/icons/Wc";
import React from "react";
import weight from "../../assets/profile_data/weight.svg";
import { get_patient_profile } from "../context/profile_data/ProfileDataActions";
import KnowYouDiagno from "./KnowYouDiagno";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
  },
  marginTop: {
    marginTop: theme.spacing(8),
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
  icon: {
    color: theme.palette.text.secondary,
  },
  itemRow: {
    marginTop: theme.spacing(4),
    display: "flex",
  },
  customicon: {
    maxHeight: "20px",
    maxWidth: "20px",
  },
}));
export default function GeneralSectionDiagno({ localPatientData, data, type }) {
  const [fetchedPatientData, setFetchedPatientData] = React.useState(null);
  const classes = useStyles();
  React.useEffect(() => {
    if (type === "fetch") {
      if (data.account_type.toLowerCase() === "patient") {
        get_patient_profile(data.id).then((res) => {
          if (res.status === 200) {
            setFetchedPatientData(res.data[0]);
          }
        });
      } else {
        setFetchedPatientData(localPatientData);
      }
    }
  }, []);
  if (type === "local") {
    return (
      <CardContent className={classes.marginTop}>
        <Typography variant={"h5"}>
          <Box fontWeight={700}>General section</Box>
        </Typography>
        <Divider />

        <Grid container>
          <Grid container direction={"column"} xs={6}>
            {/* 
                  first NAME 
                   */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>First name:</Box>
              </Typography>

              <Typography>
                <Box>{data.first_name}</Box>
              </Typography>
            </Grid>

            {/* 
                  last NAME 
                   */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Last name:</Box>
              </Typography>

              <Typography>
                <Box>{data.last_name}</Box>
              </Typography>
            </Grid>

            {/* 
                  BIRTHDAY 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <CakeTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Birthday:</Box>
              </Typography>

              <Typography>
                {data.birthday === null ? (
                  <Box> Not telling </Box>
                ) : (
                  <Box>{data.birthday} </Box>
                )}
              </Typography>
            </Grid>

            {/* 
                  PHONE 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <CallTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Phone:</Box>
              </Typography>

              <Typography>
                {data.phone === null || data.phone === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box>{data.phone}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
                  GENDER 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <WcIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Gender:</Box>
              </Typography>

              <Typography>
                <Box> {data.gender}</Box>
              </Typography>
            </Grid>

            {/* 
                  WEIGHT 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <img src={weight} className={classes.customicon} alt="weight" />
                &nbsp;
                <Box fontWeight={700}>Weight:</Box>
              </Typography>

              <Typography>
                <Box> {data.weight}</Box>
              </Typography>
            </Grid>

            {/* 
                  NECK SIZE IN INCHES 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <SettingsEthernetIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Neck size in inches:</Box>
              </Typography>

              <Typography>
                <Box> {data.neck_size_inch}</Box>
              </Typography>
            </Grid>

            {/* 
                  LAST MEDICAL EXAM 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <TodayTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Last medical exam:</Box>
              </Typography>

              <Typography>
                {data.last_medical_exam === null ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {data.last_medical_exam}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={6} direction={"column"}>
            {/* 
                  LAST DENTAL  EXAM 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <TodayTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Last date of dental exam:</Box>
              </Typography>

              <Typography>
                {data.last_dental_exam === null ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {data.last_dental_exam}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
                  Country you live in 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PublicTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Country you live in:</Box>
              </Typography>

              <Typography>
                {data.country === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {data.country}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
                  City you live in 
                   */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <LocationCityTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>City you live in:</Box>
              </Typography>

              <Typography>
                {data.city === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {data.city}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <KnowYouDiagno data={data} />
      </CardContent>
    );
  } else {
    if (fetchedPatientData) {
      return (
        <CardContent className={classes.marginTop}>
          <Typography variant={"h5"}>
            <Box fontWeight={700}>General section</Box>
          </Typography>
          <Divider />

          <Grid container>
            <Grid container direction={"column"} xs={6}>
              {/* 
                  FIRST NAME 
                   */}
              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                  <Box fontWeight={700}>First name:</Box>
                </Typography>

                <Typography>
                  <Box>{fetchedPatientData.first_name}</Box>
                </Typography>
              </Grid>

              {/* 
                  last  NAME 
                   */}
              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                  <Box fontWeight={700}>Last name:</Box>
                </Typography>

                <Typography>
                  <Box>{fetchedPatientData.last_name}</Box>
                </Typography>
              </Grid>

              {/* 
                  BIRTHDAY 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <CakeTwoToneIcon className={classes.icon} /> &nbsp;
                  <Box fontWeight={700}>Birthday:</Box>
                </Typography>

                <Typography>
                  {data.birthday === null ? (
                    <Box> Not telling </Box>
                  ) : (
                    <Box>{fetchedPatientData.birthday} </Box>
                  )}
                </Typography>
              </Grid>

              {/* 
                  PHONE 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <CallTwoToneIcon className={classes.icon} /> &nbsp;
                  <Box fontWeight={700}>Phone:</Box>
                </Typography>

                <Typography>
                  {fetchedPatientData.phone === null || data.phone === "" ? (
                    <Box>Not telling</Box>
                  ) : (
                    <Box>{fetchedPatientData.phone}</Box>
                  )}
                </Typography>
              </Grid>

              {/* 
                  GENDER 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <WcIcon className={classes.icon} /> &nbsp;
                  <Box fontWeight={700}>Gender:</Box>
                </Typography>

                <Typography>
                  <Box> {fetchedPatientData.gender}</Box>
                </Typography>
              </Grid>

              {/* 
                  WEIGHT 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <img
                    src={weight}
                    className={classes.customicon}
                    alt="weight"
                  />
                  &nbsp;
                  <Box fontWeight={700}>Weight:</Box>
                </Typography>

                <Typography>
                  <Box> {fetchedPatientData.weight}</Box>
                </Typography>
              </Grid>

              {/* 
                  NECK SIZE IN INCHES 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <SettingsEthernetIcon className={classes.icon} />
                  &nbsp;
                  <Box fontWeight={700}>Neck size in inches:</Box>
                </Typography>

                <Typography>
                  <Box> {fetchedPatientData.neck_size_inch}</Box>
                </Typography>
              </Grid>

              {/* 
                  LAST MEDICAL EXAM 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <TodayTwoToneIcon className={classes.icon} />
                  &nbsp;
                  <Box fontWeight={700}>Last medical exam:</Box>
                </Typography>

                <Typography>
                  {fetchedPatientData.last_medical_exam === null ? (
                    <Box>Not telling</Box>
                  ) : (
                    <Box> {fetchedPatientData.last_medical_exam}</Box>
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={6} direction={"column"}>
              {/* 
                  LAST DENTAL  EXAM 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <TodayTwoToneIcon className={classes.icon} />
                  &nbsp;
                  <Box fontWeight={700}>Last date of dental exam:</Box>
                </Typography>

                <Typography>
                  {fetchedPatientData.last_dental_exam === null ? (
                    <Box>Not telling</Box>
                  ) : (
                    <Box> {fetchedPatientData.last_dental_exam}</Box>
                  )}
                </Typography>
              </Grid>

              {/* 
                  Country you live in 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <PublicTwoToneIcon className={classes.icon} />
                  &nbsp;
                  <Box fontWeight={700}>Country you live in:</Box>
                </Typography>

                <Typography>
                  {fetchedPatientData.country === "" ? (
                    <Box>Not telling</Box>
                  ) : (
                    <Box> {fetchedPatientData.country}</Box>
                  )}
                </Typography>
              </Grid>

              {/* 
                  City you live in 
                   */}

              <Grid container direction="column">
                <Typography className={classes.itemRow}>
                  <LocationCityTwoToneIcon className={classes.icon} />
                  &nbsp;
                  <Box fontWeight={700}>City you live in:</Box>
                </Typography>

                <Typography>
                  {fetchedPatientData.city === "" ? (
                    <Box>Not telling</Box>
                  ) : (
                    <Box> {fetchedPatientData.city}</Box>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <KnowYouDiagno data={fetchedPatientData} />
        </CardContent>
      );
    } else {
      return <h4>LOADING...</h4>;
    }
  }
}
