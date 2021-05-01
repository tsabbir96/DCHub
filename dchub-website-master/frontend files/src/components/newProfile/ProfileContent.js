import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import ProfileInfoDialog from "../dialogs/profile_data/ProfileInfoDialog";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfileProgress from "./submissions/ProfileProgress";

const useStyles = makeStyles((theme) => ({
  label: {
    margin: theme.spacing(2, 0),
  },
  sideBar: {
    // position:'absolute',
    marginTop: "309px",
    // marginLeft: theme.spacing(2),
  },
}));
const ProfileContent = () => {
  const classes = useStyles();
  const [profileData] = useProfileData();
  const [open, setOpen] = React.useState(profileData.profile.is_New);
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid
        item
        container
        className={classes.sideBar}
        xs={2}
        direction={"column"}
      >
        <ProfileProgress open={open} setOpen={setOpen} />
      </Grid>

      <Grid item xs={10} xl={9}>
        <ProfileHeader />
        <ProfileTabs />
      </Grid>
      <ProfileInfoDialog open={open} onClose={handleClose} />
    </Grid>
  );
};
export default ProfileContent;
