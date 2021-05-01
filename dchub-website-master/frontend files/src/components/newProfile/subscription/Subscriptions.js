import { lightGreen } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import DoctorSubscriptionPage from "./DoctorSubscriptionPage";
import PatientSubscriptionPage from "./PatientSubscriptionPage";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    width: "80%",
    display: "flex",
    alignItems: "center",
  },
  subscribtionIcon: {
    width: "40px",
    height: "40px",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: lightGreen[400],
    borderRadius: "50%",
  },
}));
const Subscriptions = () => {
  const classes = useStyles();
  const [profileData] = useProfileData();

  if(profileData.profile.user.account_type.toLowerCase()==='patient'){
    return <PatientSubscriptionPage/>
  }else{
    return  <DoctorSubscriptionPage/>
  }






};
export default Subscriptions;
