import { Box, Button, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import writeReport from "../../../assets/profile_data/write_report.svg";
import { useAlertSnackbarContext } from '../../context/AlertSnackbarContext';
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import DialogToolChoice from "../../dialogs/tool_choice/DialogToolChoice";
const useStyles = makeStyles((th) => ({
  root: {
    minWidth: 275,
    padding: th.spacing(3, 6),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  illustration: {
    verticalAlign: "middle",
    width: 350,
  },
  marginFirstLane: {},
  marginSecondtLane: {
    margin: th.spacing(3, 0),
  },
  maginLeft: {
    marginLeft: "32px",
  },
}));


const calculateScore = (profile)=>{
  if (profile.user.account_type.toLowerCase() === "patient") {
    let score = 0;
    if (profile.gender === "NT") {
      score++;
    }
    if (
      !profile.birthday ||
      profile.birthday === "NT" ||
      profile.birthday === ""
    ) {
      score++;
    }
    if (!profile.country || profile.country === "") {
      score++;
    }
    if (!profile.city || profile.city === "") {
      score++;
    }
    if (!profile.phone) {
      score++;
    }
    if (!profile.weight) {
      score++;
    }
    if (
      !profile.last_medical_exam ||
      profile.last_medical_exam === ""
    ) {
      score++;
    }
    if (
      !profile.last_dental_exam ||
      profile.last_dental_exam === ""
    ) {
      score++;
    }
    return score;
  }else{
    return 0
  }
}
export default function NoFilesInfo() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [profileData,] = useProfileData()
  const { open } = useAlertSnackbarContext();

  const handleClickOpenDialog = () => {
    
    if(calculateScore(profileData.profile)<1){
      setOpenDialog(true);
    }else{
      open('warning', 'Please complete your profile to start a consultation')

    }
  };
  const handleCloseDialog = (value ) => {
    setOpenDialog(false);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <Grid justify={"space-between"} alignItems={"center"} container>
        <Grid container direction={"column"} item sm={6} xs={12}>
          <Grid item>
            <Typography
              color={"secondary"}
              className={classes.marginFirstLane}
              variant={"h5"}
            >
              <Box fontWeight={700}>
                Tell us what's going on with your mouth
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              className={classes.marginSecondtLane}
              color={"textSecondary"}
            >
              Let's talk about your concerns we are confident that we can help
              you
            </Typography>
          </Grid>
          <Grid item>
            <Button
              color={"primary"}
              onClick={handleClickOpenDialog}
              fullWidth
              variant={"outlined"}
            >
              Start your consultation
            </Button>
            <DialogToolChoice openDialog={openDialog} onClose={handleCloseDialog} />
          </Grid>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img
            className={classes.illustration}
            src={writeReport}
            alt="illustration"
            loading="lazy"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
