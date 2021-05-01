import { Box, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import React from "react";
import reportLogo from "../../../assets/report/reportLogo.webp";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "285mm",
    height: "285mm",
  },
  vipLogo: {
    zIndex: 10,
    objectFit: "contain",
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
  bg_img: {
    // position:'absolute',
    height: "50mm",
    marginTop: "auto",
    width: "50mm",
    // left:'0', bottom:'0',
    // objectFit:'cover',
    zIndex: 0,
  },
  gridImg: {
    marginTop: "8mm",
    marginLeft: "8mm",
  },
  gridInfo: {
    paddingLeft: "5mm",
    marginLeft: "auto",
    borderLeft: "3px solid lightgray",
    marginTop: "1cm",
  },
  title: {
    marginTop: "3cm",
  },
  cardName: {
    margin: theme.spacing(0, 4),

    marginTop: theme.spacing(8),
    width: "100%",
  },
  gridBg: {
    backgroundColor: "red",
    width: "100%",
  },
  caption: {
    marginTop: "5cm",
    textAlign: "center",
    width: "100%",
  },
}));
export default function CoverPage({ type, ownerData }) {
  const classes = useStyles();
  const [profileData] = useProfileData();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid className={classes.gridImg} container xs={3} item>
          <img
            className={classes.vipLogo}
            src={reportLogo}
            alt="clinical_img"
          />
        </Grid>

        <Grid container className={classes.gridInfo} item xs={4}>
          <Grid item container>
            <Typography color="textSecondary">
              <Box fontWeight="700">CONTACT US</Box>
            </Typography>
          </Grid>
          <Grid item container>
            <CallTwoToneIcon />
            <Typography color="textSecondary">
              <Box>+ 1 702 605 0555</Box>
            </Typography>
          </Grid>

          <Grid item container>
            <LocationCityTwoToneIcon />
            <Typography color="textSecondary">
              <Box>
                7582 Las Vegas Blvd. <br />
                South Las Vegas, <br />
                Nevada 89123
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Typography className={classes.title} color="primary">
        <Box fontWeight="800" fontSize="60px" textAlign="center">
          CONFIDENTIAL
        </Box>

        <Box fontWeight="500" fontSize="38px" textAlign="center">
          {type==='DIAGNOBOT'? "": 'COMPREHENSIVE'} REPORT
        </Box>
      </Typography>

      <hr className={classes.divider} />

      <Grid container>
        <Card className={classes.cardName} variant="outlined">
          <Typography gutterBottom variant="h4" color="textSecondary">
            <Box textAlign="center" fontWeight="500">
              Prepared for:
            </Box>
          </Typography>

          <Typography variant="h4">
            <Box textAlign="center" fontWeight="700">
              {profileData.profile.user.account_type.toLowerCase() === "patient"
                ? "Mr(s). "
                :  "Mr(s). "}

              {ownerData.first_name + " " + ownerData.last_name}
            </Box>
          </Typography>
        </Card>
      </Grid>

      <Grid container>
        <Typography
          color="textSecondary"
          className={classes.caption}
          variant="caption"
        >
          * This report is generated from dentistconsultationhub, please visit
          us for more details.
        </Typography>
      </Grid>
    </div>
  );
}
