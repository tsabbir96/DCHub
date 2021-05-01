import { makeStyles } from "@material-ui/core";
import React from "react";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import ProfileInfoDialog from "../../dialogs/profile_data/ProfileInfoDialog";
import DocAboutPractice from "./doctor/DocAboutPractice";
import DocGeneralSection from "./doctor/DocGeneralSection";
import FilesSection from "./doctor/FilesSection";
import AboutYourTeeth from "./patient/AboutYourTeeth";
import GeneralSection from "./patient/GeneralSection";
import KnowYou from "./patient/KnowYou";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));
const InfoTab = () => {
  const [profileData] = useProfileData();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = (value) => {
    setOpen(false);
  };
  return profileData.profile.user.account_type.toLowerCase() === "patient" ? (
    <div>
      <GeneralSection open={open} setOpen={setOpen} />
      <KnowYou open={open} setOpen={setOpen} />
      <AboutYourTeeth open={open} setOpen={setOpen} />
      <ProfileInfoDialog open={open} onClose={handleClose} />
    </div>
  ) : (
    <div className={classes.root}>
      <DocGeneralSection open={open} setOpen={setOpen} />
      <DocAboutPractice open={open} setOpen={setOpen} />
      <FilesSection open={open} setOpen={setOpen} />
      <ProfileInfoDialog open={open} onClose={handleClose} />
    </div>
  );
};
export default InfoTab;
