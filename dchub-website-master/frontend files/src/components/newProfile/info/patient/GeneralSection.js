import { Divider } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { PhoneTwoTone } from "@material-ui/icons";
import CakeTwoToneIcon from "@material-ui/icons/CakeTwoTone";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import LanguageTwoToneIcon from "@material-ui/icons/LanguageTwoTone";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import WcIcon from "@material-ui/icons/Wc";
import React from "react";
import weight from "../../../../assets/profile_data/weight.svg";
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
export default function GeneralSection({ open, setOpen }) {
  const [state] = useProfileData();
  const profile = state.profile;
  const classes = useStyles();

  const showDialog = () => {
    setOpen(!open);
  };

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
            last NAME 
             */}
            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PermIdentityTwoToneIcon className={classes.icon} /> &nbsp;
                <Box fontWeight={700}>Full name:</Box>
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
            WEIGHT 
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <img src={weight} className={classes.customicon} alt="weight" />
                &nbsp;
                <Box fontWeight={700}>Weight:</Box>
              </Typography>

              <Typography>
                <Box> {profile.weight}</Box>
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
                <Box> {profile.neck_size_inch}</Box>
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
                {profile.last_medical_exam === null ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.last_medical_exam}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
          <Grid container md={6} sm={12} direction={"column"}>
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
                {profile.last_dental_exam === null ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.last_dental_exam}</Box>
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
                {profile.country === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.country}</Box>
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
                {profile.city === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.city}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Name of your dentist
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PersonAddTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Name of your dentist:</Box>
              </Typography>

              <Typography>
                {profile.current_dentist_name === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.current_dentist_name}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Your Dentist's Phone Number
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <PhoneTwoTone className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Your Dentist's Phone Number:</Box>
              </Typography>

              <Typography>
                {profile.current_dentist_phone === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.current_dentist_phone}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Your dentist's email
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <EmailTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Your dentist's email:</Box>
              </Typography>

              <Typography>
                {profile.current_dentist_email === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.current_dentist_email}</Box>
                )}
              </Typography>
            </Grid>

            {/* 
            Your dentist's email
             */}

            <Grid container direction="column">
              <Typography className={classes.itemRow}>
                <LanguageTwoToneIcon className={classes.icon} />
                &nbsp;
                <Box fontWeight={700}>Your dentist's website:</Box>
              </Typography>

              <Typography>
                {profile.current_dentist_website === "" ? (
                  <Box>Not telling</Box>
                ) : (
                  <Box> {profile.current_dentist_website}</Box>
                )}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
