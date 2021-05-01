import React from "react";
import { useHistory } from "react-router";
import Header from "../commun/Header";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import DoctorsPlan from "./DoctorsPlan";
import PatientPlan from "./PatientPlan";

export default function ChoosePlan() {
  const [profileData] = useProfileData();
  let history = useHistory();
  if(profileData.profile.user.account_type.toLowerCase()==="patient"){
    return (
      <div>
        <Header />
        <PatientPlan/>

      </div>
    );
  }else{
    return (
      <div>
        <Header />
        <DoctorsPlan/>
      </div>
    );
  }
 
}
