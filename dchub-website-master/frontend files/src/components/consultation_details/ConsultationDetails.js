import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import QueuePlayNextTwoToneIcon from "@material-ui/icons/QueuePlayNextTwoTone";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import React from "react";
import { useLocation } from "react-router";
import Header from "../commun/Header";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import {
  get_doctor_profile,
  get_patient_profile
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { update_submission_meeting_info } from "../context/submission/SubmissionsActions";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    width: "100%",
  },
  cardContent: {
    // width: '80%',
  },
  paragraph: {
    marginTop: theme.spacing(4),
    // maxWidth: '60%'
  },
  divider: {
    marginTop: theme.spacing(4),
  },
  btn: {
    // marginLeft: "auto",
    margin: theme.spacing(4),
  },
  mouth_img: {
    width: "80%",
    // marginLeft:'auto',
    padding: theme.spacing(8),
  },
  leftBorder: {
    backgroundColor: theme.palette.info.light,
    height: "340px",
  },
  icon: {
    width: "100%",
    height: "140px",
  },
  recommendation: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(4),

    marginLeft: theme.spacing(4),
  },
  Preliminary: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  list: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(16),
  },
  dateinput: {
    maxWidth: "80%",
  },
}));
export default function ConsultationDetails() {
  const classes = useStyles();
  const [profileData] = useProfileData();
  const location = useLocation();
  const fullInfo = location.state;
  const { open } = useAlertSnackbarContext();
  const [clientInfo, setClientInfo] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (fullInfo.owner.account_type.toLowerCase() === "doctor") {
      get_doctor_profile(fullInfo.owner.id).then((res) => {
        if (res.status === 200) {
 
          setClientInfo(res.data[0]);
          setLoading(false);
        }
      });
    } else {
      get_patient_profile(fullInfo.owner.id).then((res) => {
        if (res.status === 200) {
           setClientInfo(res.data[0]);

          setLoading(false);
        }
      });
    }
  }, []);

  const [meeting, setMeeting] = React.useState({
    meeting_date: fullInfo.meeting_date,
    meeting_link: fullInfo.meeting_link,
    meeting_recording: fullInfo.meeting_recording,
  });

  const handleMeetingDate = (value) => {
     setMeeting({
      ...meeting,
      meeting_date: value,
    });
  };

  const handleChage = (e) => {
    switch (e.target.id) {
      case "meeting_link":
        // code block
        setMeeting({ ...meeting, meeting_link: e.target.value });
        break;
      case "meeting_recording":
        setMeeting({ ...meeting, meeting_recording: e.target.value });

        // code
        break;
      default:
      // code block
    }
  };

  const handleUpdateSubmission = () => {
    update_submission_meeting_info(
      fullInfo.id,
      meeting.meeting_link,
      meeting.meeting_date,
      meeting.meeting_recording,
      profileData.profile.first_name + " " + profileData.profile.last_name
    ).then((res) => {
      if (res.status === 200) {
        open("success", "Update successful");
      }
    });
  };
  if (profileData.profile.user.is_superuser) {
    // if (false) {
    if (loading) return <h4>LOADING...</h4>;
    return (
      <div>
        <Header />

        <Container>
          <Card className={classes.root} variant="outlined">
            <Grid container>
              <Grid
                container
                alignItems="center"
                className={classes.leftBorder}
                xs={2}
              >
                <QueuePlayNextTwoToneIcon className={classes.icon} />
              </Grid>
              <Grid container direction={"column"} xs={10}>
                <Typography variant={"h6"} className={classes.title}>
                  <Box fontWeight={700}>Video consultation schedule</Box>
                </Typography>
                <Divider className={classes.divider} />
                <Grid container className={classes.Preliminary}>
                  <Typography
                  // variant = {'h6'}
                  >
                    The meeting with patient:
                  </Typography>
                  <Typography fontWeight="700">
                    <Box fontWeight="700">
                      &nbsp;
                      {clientInfo.first_name + " " + clientInfo.last_name}
                      &nbsp;
                    </Box>
                  </Typography>

                  <Typography
                  // variant = {'h6'}
                  >
                    from &nbsp;
                  </Typography>

                  <Typography fontWeight="700">
                    <Box fontWeight="700">
                      {clientInfo.country + ", " + clientInfo.city}
                    </Box>
                  </Typography>

                  <Typography
                  // variant = {'h6'}
                  >
                    &nbsp; is planned for &nbsp;
                  </Typography>

                  <MuiPickersUtilsProvider
                    variant="outlined"
                    utils={DateFnsUtils}
                  >
                    <DateTimePicker
                      id="medical_exam"
                      fullWidth
                      className={classes.dateinput}
                      inputVariant="outlined"
                      defaultValue={meeting.meeting_date}
                      value={meeting.meeting_date}
                      onChange={handleMeetingDate}
                      format="yyyy-MM-dd HH:mm zzz"
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid
                  container
                  direction="column"
                  className={classes.Preliminary}
                >
                  <Typography> The meeting link is :</Typography>

                  <TextField
                    id="meeting_link"
                    onChange={(e) => {
                      handleChage(e);
                    }}
                    className={classes.dateinput}
                    defaultValue={meeting.meeting_link}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid
                  container
                  direction="column"
                  className={classes.Preliminary}
                >
                  <Typography>
                    The meeting will be recorded and then sent to you, so that
                    you can review whenever you want. <br />
                    Feel free to ask the dentist about all your concerns
                  </Typography>
                  <Divider />

                  <Typography className={classes.Preliminary}>
                    Consultation recording:
                  </Typography>

                  <TextField
                    className={classes.dateinput}
                    id="meeting_recording"
                    onChange={(e) => {
                      handleChage(e);
                    }}
                    defaultValue={meeting.meeting_recording}
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <div className={classes.btn}>
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={handleUpdateSubmission}
                  >
                    Save
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <Header />

      <Container>
        <Card className={classes.root} variant="outlined">
          <Grid container>
            <Grid
              container
              alignItems="center"
              className={classes.leftBorder}
              xs={2}
            >
              <QueuePlayNextTwoToneIcon className={classes.icon} />
            </Grid>
            <Grid container direction={"column"} xs={8}>
              <Typography variant={"h6"} className={classes.title}>
                <Box fontWeight={700}>Video consultation </Box>
              </Typography>
              <Divider className={classes.divider} />

              {fullInfo.meeting_recording === "" ? (
                <Grid container className={classes.Preliminary}>
                  <Typography
                  // variant = {'h6'}
                  >
                    Your meeting is scheduled for &nbsp;
                  </Typography>

                  <Typography>
                    <Box fontWeight="700">{fullInfo.meeting_date}</Box>
                  </Typography>

                  <Typography>, &nbsp;with Doctor &nbsp;</Typography>
                  <Typography>
                    <Box fontWeight="700"> {fullInfo.meeting_doctor}</Box>
                  </Typography>
                  <Typography> &nbsp; through this link:</Typography>
                  <Typography>
                    <Box fontWeight="700"> &nbsp;{fullInfo.meeting_link} </Box>
                  </Typography>
                  <Typography>
                    <br /> It will be recorded and then sent to you, so that you
                    can review whenever you want. <br /> Feel free to ask the
                    dentist about all your concerns
                  </Typography>
                </Grid>
              ) : (
                <>
                  <Grid container className={classes.Preliminary}>
                    <Typography
                    // variant = {'h6'}
                    >
                      We hope that you enjoyed your meeting with our dentist,
                      the recording can be found here: &nbsp; <br />
                    </Typography>

                    <Typography>
                      <Box fontWeight="700">
                        &nbsp;{fullInfo.meeting_recording}
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid container className={classes.Preliminary}>
                    <Typography>
                      only this email is allowed to see it:
                    </Typography>
                    <Typography>
                      <Box fontWeight="700">
                        &nbsp;{profileData.profile.user.email}
                      </Box>
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}
