import { Button, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useReactToPrint } from "react-to-print";
import Header from "../../commun/Header";
import { ReportContentDiagno } from "./ReportContentDiagno";
const useStyles = makeStyles((theme) => ({
  vipLogo: {
    width: "100%",
  },
}));
export default function DiagnobotReport({ fullInfo }) {
  const classes = useStyles();
  const [printIntent, setPrintIntent] = React.useState(false);
  const componentRef = React.useRef();
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
      <Button onClick={handlePrint}>Print this out!</Button>
      <Container>
        <ReportContentDiagno
          printIntent={printIntent}
          fullInfo={fullInfo}
          ref={componentRef}
        />

      </Container>
    </div>
  );
}
