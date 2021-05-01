import {
  Box,
  Card,
  CardContent,

  Divider,

  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import CallTwoToneIcon from "@material-ui/icons/CallTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import WcTwoToneIcon from "@material-ui/icons/WcTwoTone";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
 
    maxHeight:'284mm'
    ,height:'284mm', 

  },

  marginTop: {
    marginTop: theme.spacing(8),
  },
  nameCard: {
    borderColor: theme.palette.primary.main,
    backgroundColor: "#FAF9F5",
    margin: theme.spacing(1),
  },
  gridItem: {
    padding: theme.spacing(1),
  },
  infoCard: {
    borderColor: theme.palette.primary.main,
    margin: theme.spacing(1),
    width: "100%",
  },
  infoItem: {
    padding: theme.spacing(1),
  },
  titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));

function Adress({ profileData }) {
   if (profileData.country !== "") {
    return (
      <Box fontWeight="500">{profileData.country + "," + profileData.city}</Box>
    );
  } else {
    return <Box fontWeight="500">Not telling</Box>;
  }
}
export default function Page02Info({ ownerData }) {
  const classes = useStyles();
  const bull = <span>•</span>;

  return (
    <div className={classes.root}>
         <Typography variant="h5" className={classes.titleStyle}  >
           <Box fontWeight='800'>
           I. General informations

           </Box>
            </Typography>
            <Divider/>
      <Card variant="outlined" className={classes.nameCard}>
     
        <CardContent>
          <Grid container>
            <Grid
              className={classes.gridItem}
              container
              item
              xs={6}
              alignItems="center"
            >
              <AccountCircleTwoToneIcon />
              <Typography color="textSecondary">
                <Box fontWeight="500">Patient name:</Box>
              </Typography>

              <Typography>
                <Box fontWeight="500">
                  {ownerData.first_name + " " + ownerData.last_name}
                </Box>
              </Typography>
            </Grid>
            <Grid
              className={classes.gridItem}
              container
              xs={6}
              alignItems="center"
              item
            >
              <WcTwoToneIcon />
              <Typography color="textSecondary">
                <Box fontWeight="500">Gender:</Box>
              </Typography>

              <Typography>
                <Box fontWeight="500">{ownerData.gender}</Box>
              </Typography>
            </Grid>

            <Grid
              className={classes.gridItem}
              container
              xs={6}
              alignItems="center"
              item
            >
              <CallTwoToneIcon />
              <Typography color="textSecondary">
                <Box fontWeight="500">Phone:</Box>
              </Typography>

              <Typography>
                <Box fontWeight="500">
                  {ownerData.phone === "" || !ownerData.phone
                    ? "No data"
                    : ownerData.phone}
                </Box>
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.gridItem}
              xs={6}
              alignItems="center"
              item
            >
              <TodayTwoToneIcon />
              <Typography color="textSecondary">
                <Box fontWeight="500">Birthday:</Box>
              </Typography>

              <Typography>
                <Box fontWeight="500">
                  {ownerData.birthday === "" || !ownerData.birthday
                    ? "No data"
                    : ownerData.birthday}
                </Box>
              </Typography>
            </Grid>

            <Grid
              container
              className={classes.gridItem}
              xs={12}
              alignItems="center"
              item
            >
              <LocationOnTwoToneIcon />
              <Typography color="textSecondary">
                <Box fontWeight="500">Adress:</Box>
              </Typography>

              <Typography>
                <Adress profileData={ownerData} />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container>
        <Grid container xs={6} item>
          <Card variant="outlined" className={classes.infoCard}>
            <CardContent>
              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Weight in Kg:</Box>
                </Typography>
                <Typography>
                  <Box fontWeight="500">{ownerData.weight}</Box>
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Neck size in inches:</Box>
                </Typography>

                <Typography>
                  <Box fontWeight="500">{ownerData.neck_size_inch}</Box>
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Last medical exam:</Box>
                </Typography>

                <Typography>
                  <Box fontWeight="500">
                    {ownerData.last_medical_exam === "" ||
                    !ownerData.last_medical_exam
                      ? "No data"
                      : ownerData.last_medical_exam}
                  </Box>
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Last dental exam:</Box>
                </Typography>

                <Typography>
                  <Box fontWeight="500">
                    {ownerData.last_dental_exam === "" ||
                    !ownerData.last_dental_exam
                      ? "No data"
                      : ownerData.last_dental_exam}
                  </Box>
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Your dental preferences:</Box>
                </Typography>
                {ownerData.teeth_prefs.length === 0 && (
                  <Typography>No data</Typography>
                )}
                <Typography>
                  { 
                    ownerData.teeth_prefs.map((item) => {
                      return (
                        <Box fontWeight="500">
                          {bull}
                          {item}
                        </Box>
                      );
                    })}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid container xs={6} item>
          <Card variant="outlined" className={classes.infoCard}>
            <CardContent>
              <div className={classes.infoItem}>
                {" "}
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Medical history:</Box>
                </Typography>
                <Typography>
                  {ownerData.medical_history.length === 0 && (
                    <Typography>No data</Typography>
                  )}
                  {ownerData.medical_history.map((item) => {
                    return (
                      <Box fontWeight="500">
                        {bull}
                        {item}
                      </Box>
                    );
                  })}
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">-Dental history:</Box>
                </Typography>

                {ownerData.dental_history.length === 0 && (
                  <Typography>No data</Typography>
                )}
                <Typography>
                  {ownerData.dental_history.map((item) => {
                    return (
                      <Box fontWeight="500">
                        {bull}
                        {item}
                      </Box>
                    );
                  })}
                </Typography>
              </div>
              <div className={classes.infoItem}>
                {" "}
                <Typography color="textSecondary">
                  <Box fontWeight="500">
                    -Explanation of medical & dental history:
                  </Box>
                </Typography>
                <Typography>
                  <Box fontWeight="500">
                    {ownerData.explanation === "" || !ownerData.explanation
                      ? "No data"
                      : ownerData.explanation}
                  </Box>
                </Typography>
              </div>
              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">
                    - List of all of the medications and supplements you
                    are currently taking:
                  </Box>
                </Typography>
                {ownerData.current_medication.length === 0 && (
                  <Typography>No data</Typography>
                )}
                <Typography>
                  {ownerData.current_medication.map((item) => {
                    return (
                      <Box fontWeight="500">
                        {bull}
                        {item}
                      </Box>
                    );
                  })}
                </Typography>
              </div>

              <div className={classes.infoItem}>
                <Typography color="textSecondary">
                  <Box fontWeight="500">
                    - Medication containing biphosphonates for
                    osteoporosis:
                  </Box>
                </Typography>
                {ownerData.name_biphosphonate_medication.length === 0 && (
                  <Typography>No data</Typography>
                )}
                <Typography>
                  {ownerData.name_biphosphonate_medication.map((item) => {
                    return (
                      <Box fontWeight="500">
                        {bull}
                        {item}
                      </Box>
                    );
                  })}
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
