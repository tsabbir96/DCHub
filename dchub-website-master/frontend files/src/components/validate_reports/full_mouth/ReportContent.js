import { makeStyles } from "@material-ui/core";
import React from "react";
import { get_patient_profile } from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import CoverPage from "../commun/CoverPage";
import Page02Info from "../commun/Page02Info";
import Page03ReportedConditions from "../commun/Page03ReportedConditions";
import Page04Image01 from "../commun/Page04Image01";
import Page04Image02 from "../commun/Page04Image02";
import Page04Image03 from "../commun/Page04Image03";
import Page04Image04 from "../commun/Page04Image04";
import Page04Image05 from "../commun/Page04Image05";
import Page04Image06 from "../commun/Page04Image06";
import Page04Image07 from "../commun/Page04Image07";
import Page05Table01 from "../commun/Page05Table01";
import Page05Table02 from "../commun/Page05Table02";
import Page05Table03 from "../commun/Page05Table03";
import Page05Table04 from "../commun/Page05Table04";
import PageSummary from "../commun/PageSummary";
import FMRPage06 from "./FMRPage06";
import FMRPage06ReadOnly from "./FMRPage06ReadOnly";
import FMRPage07 from "./FMRPage07";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    width: "22cm",
  },
 
   
   
   
}));
 

export const ReportContent = React.forwardRef((props, ref) => {
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
        <CoverPage type={'COMPREHENSIVE'} ownerData={ownerData} />
        <PageSummary type={'COMPREHENSIVE'}
          anamensisPages={parseInt(
            Math.floor(
              props.fullInfo.diagnobot.added_recommendations.length / 3
            ) + 1
          )}
        />
        {/* page2 */}

        <Page02Info ownerData={ownerData} />

        <Page03ReportedConditions fullInfo={props.fullInfo} />

        {/* page 04 */}

        <Page04Image01 fullInfo={props.fullInfo} />
        <Page04Image02 fullInfo={props.fullInfo} />
        <Page04Image03 fullInfo={props.fullInfo} />
        <Page04Image04 fullInfo={props.fullInfo} />
        <Page04Image05 fullInfo={props.fullInfo} />
        <Page04Image06 fullInfo={props.fullInfo} />
        <Page04Image07 fullInfo={props.fullInfo} />

        <Page05Table01 fullInfo={props.fullInfo} />
        <Page05Table02 fullInfo={props.fullInfo} />
        <Page05Table03 fullInfo={props.fullInfo} />
        <Page05Table04 fullInfo={props.fullInfo} />

        

        {profileData.profile.user.account_type.toLowerCase() === "patient" || props.printIntent===true ? (
        
            <FMRPage06ReadOnly
              reportTextfields={props.reportTextfields.current}
              fullInfo={props.fullInfo}
            />
           
        ) : (
          <>
            <FMRPage06 reportTextfields={props.reportTextfields.current} />
            <FMRPage07
              fullInfo={props.fullInfo}
              reportTextfields={props.reportTextfields.current}
            />
          </>
        )}
      </div>
    );
  } else {
    return <h4>Loading...</h4>;
  }
});
