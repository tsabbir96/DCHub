import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import PatientDiagnoProfile from "./PatientDiagnoProfile";
import SetPatientData from "./SetPatientData.js";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 4),
  },
  cardContent: {
    // width: '80%',
  },
  title: {
    margin: theme.spacing(6, 0),
  },
  divider: {
    margin: theme.spacing(6, 0),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  marginTopTitle: {
    marginTop: theme.spacing(4),
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
  marginLeftAuto: {
    marginLeft: "auto",
    marginRight: theme.spacing(8),
  },
  paragraph: {
    marginRight: theme.spacing(8),
  },
  icon: {
    marginLeft: theme.spacing(6),
  },
}));
const MedicalHistoryDiagno = ({ value, setValue }) => {
  const [state] = useProfileData();

  const profile = state.profile;

  const handleClick = () => {
    setValue(value + 1);
  };
  const handleBackClick = () => {
    setValue(value - 1);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = (value) => {
    setOpen(false);
  };
  const handleOpenDialog = () => {
    setOpen(true);
  };

  if (profile.user.account_type.toLowerCase() === "patient") {
    return (
      <PatientDiagnoProfile
        profile={profile}
        open={open}
        handleClose={handleClose}
        handleOpenDialog={handleOpenDialog}
        handleBackClick={handleBackClick}
        handleClick={handleClick}
      />
    );
  } else {
    return (
      <SetPatientData
        handleBackClick={handleBackClick}
        value={value}
        setValue={setValue}
      />
    );
  }
};
export default MedicalHistoryDiagno;
