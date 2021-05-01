import { Fab } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import DialogToolChoice from "../../dialogs/tool_choice/DialogToolChoice";
import PostContainer from "./PostContainer";
import Poster from "./top/Poster";

const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      position: "fixed",
      right: "10%",
      bottom: "40px",
      zIndex: 2,
    },
    root:{
    width:'100%' ,

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0,0)
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(0,20)
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(0,20)
    },
  
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0,0)
    },
     }
  })
);
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
const Feed = (props) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [profileData] = useProfileData()
  const { open } = useAlertSnackbarContext();

  const handleClickOpenDialog = () => {

    if(calculateScore(profileData.profile)<1){
      setOpenDialog(true);
    }else{
      open('warning', 'Please complete your profile to start a consultation')

    }  };
  const handleCloseDialog = (value) => {
    setOpenDialog(false);
  };

  return (
    <div className={classes.root}>
      <Poster />
      <PostContainer />
      <Fab
        onClick={handleClickOpenDialog}
        className={classes.fab}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <DialogToolChoice openDialog={openDialog} onClose={handleCloseDialog} />
    </div>
  );
};

export default Feed;
