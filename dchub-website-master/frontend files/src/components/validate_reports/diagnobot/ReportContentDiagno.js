import { makeStyles } from "@material-ui/core";
import React from "react";
import { get_patient_profile } from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import CoverPage from "../commun/CoverPage";
import Page02Info from "../commun/Page02Info";
import Page03ReportedConditions from "../commun/Page03ReportedConditions";
import PageSummary from "../commun/PageSummary";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "22cm",
  },
}));

export const ReportContentDiagno = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const [profileData] = useProfileData();
  const [ownerData, setOwnerData] = React.useState();

  React.useEffect(() => {
    if (profileData.profile.user.account_type.toLowerCase() === "patient") {
      setOwnerData(profileData.profile);
     } else if (
      profileData.profile.user.account_type.toLowerCase() === "doctor"
    ) {
      if (props.fullInfo.patientData) {
        setOwnerData(props.fullInfo.patientData);
      } else {
        get_patient_profile(props.fullInfo.owner.id).then((res) => {
          if (res.status === 200) {
             setOwnerData(res.data[0]);
          }
        });
      }
    }
  }, []);

  if (ownerData) {
    return (
      <div ref={ref} className={classes.root}>
        <CoverPage type={"DIAGNOBOT"} ownerData={ownerData} />
        <PageSummary
          type={"DIAGNOBOT"}
          anamensisPages={parseInt(
            Math.floor(
              props.fullInfo.diagnobot.added_recommendations.length / 3
            ) + 1
          )}
        />
                        <Page02Info ownerData={ownerData} />
                        <Page03ReportedConditions fullInfo={props.fullInfo} />


      </div>
    );
  } else {
    return <h4>Loading...</h4>;
  }
});
