import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import LanguageTwoToneIcon from "@material-ui/icons/LanguageTwoTone";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import SchoolTwoToneIcon from "@material-ui/icons/SchoolTwoTone";
import StreetviewTwoToneIcon from "@material-ui/icons/StreetviewTwoTone";
import WcIcon from "@material-ui/icons/Wc";
import WorkTwoToneIcon from "@material-ui/icons/WorkTwoTone";
import React from "react";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
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

export default function DocGeneralSection({ open, setOpen }) {
  const classes = useStyles();
  const [state] = useProfileData();

  const showDialog = () => {
    setOpen(!open);
  };
  const profile = state.profile;
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography variant={"h5"} color={"primary"}>
            <Box fontWeight={700}>General section</Box>
          </Typography>
        }
        action={
          <ButtonBase onClick={showDialog}>
            <EditTwoToneIcon className={classes.actionBtn} />
          </ButtonBase>
        }
      />
      <CardContent>
        <Divider />

        <Grid container>
          <Grid container direction={"column"} md={6} sm={12}>
            {/* 
              first NAME 
               */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>First name:</Box>
              </Typography>

              <Typography>
                <Box>{profile.first_name}</Box>
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
                <Box>{profile.last_name}</Box>
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
                {profile.birthday === null ? (
                  <Box> Not telling </Box>
                ) : (
                  <Box>{profile.birthday} </Box>
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
                {profile.phone === null || profile.phone === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box>{profile.phone}</Box>
                )}
              </Typography>
            </Grid>
            {/* 
              EMAIL 
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <EmailTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Email:</Box>
              </Typography>

              <Typography>
                <Box>{profile.user.email}</Box>
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
                <Box> {profile.gender}</Box>
              </Typography>
            </Grid>

            {/* 
              Degree 
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <SchoolTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Degree:</Box>
              </Typography>

              <Typography>
                {profile.degree === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.degree}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={6} sm={12} direction={"column"}>
            {/* 
              dental_speciality 
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <InfoTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Dental speciality:</Box>
              </Typography>

              <Typography>
                {profile.dental_speciality === null ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.dental_speciality}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
              name of practice 
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <WorkTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Name of practice:</Box>
              </Typography>

              <Typography>
                {profile.name_of_practice === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.name_of_practice}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
             License country 
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PublicTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>License country:</Box>
              </Typography>

              <Typography>
                {profile.license_country === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.license_country}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
              practice_city
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <LocationCityTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Practice city:</Box>
              </Typography>

              <Typography>
                {profile.practice_city === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.practice_city}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
              practice zipcode
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <StreetviewTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Practice zipCode:</Box>
              </Typography>

              <Typography>
                {profile.practice_zip_code === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.practice_zip_code}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
              practice website
               */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <LanguageTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Practice website:</Box>
              </Typography>

              <Typography>
                {profile.practice_website === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.practice_website}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
