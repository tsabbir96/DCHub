import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../../commun/Header";
import { ReportContent } from "./ReportContent";

const useStyles = makeStyles((theme) => ({
  vipLogo: {
    width: "100%",
  },
  btn:{
    margin:theme.spacing(4,0)
  }
}));

export default function FullMouthReport({ fullInfo }) {
  const classes = useStyles();
  const [printIntent, setPrintIntent] = React.useState(false);
  const componentRef = React.useRef();
 
  const reportTextfields = React.useRef({
    recommendations_advantages: fullInfo.recommendations_advantages,
    recommendations_disadvantages: fullInfo.recommendations_disadvantages,
    recommendations_risks: fullInfo.recommendations_risks,
    recommendations_cosmetic_considerations:
      fullInfo.recommendations_cosmetic_considerations,
    recommendations_dentist_required_qualification:
      fullInfo.recommendations_dentist_required_qualification,
    recommendations_ttt_time_requirements:
      fullInfo.recommendations_ttt_time_requirements,
    recommendations_fee_guidelines: fullInfo.recommendations_fee_guidelines,
    recommendations_payment_plan_options:
      fullInfo.recommendations_payment_plan_options,
    recommendations_dentist_name: fullInfo.recommendations_dentist_name,
    recommendations_speciality: fullInfo.recommendations_speciality,
    recommendations_years_of_experience:
      fullInfo.recommendations_years_of_experience,
    recommendations_clinic_name: fullInfo.recommendations_clinic_name,
    recommendations_phone: fullInfo.recommendations_phone,
    recommendations_email: fullInfo.recommendations_email,
    recommendations_website: fullInfo.recommendations_website,
  });
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setPrintIntent(true);
    },

    onPrintError: () => {
      setPrintIntent(false);
    },
    onAfterPrint: () => {
      setPrintIntent(false);
    },
  });

  return (
 
    <div className={classes.root}>
      <Header />
      <Container>
      <Button color='primary' className={classes.btn}   variant='contained' onClick={handlePrint}>Print your report</Button>

        <ReportContent
          printIntent={printIntent}
          fullInfo={fullInfo}
          reportTextfields={reportTextfields}
          ref={componentRef}
        />
      </Container>
    </div>
 
  );
}
