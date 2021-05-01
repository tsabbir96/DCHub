import Grid from "@material-ui/core/Grid";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../commun/Header";
import AnnotatorProvider from "../context/annotator/AnnotatorContext";
import { get_xray } from "../context/submission/XrayReportActions";
import { ImageConfigProvider } from "./main_panel/ImageConfigContext";
import Panel from "./main_panel/Panel";
import TeethList from "./teeth_list/TeethList";

const ReportViewer = () => {
  const location = useLocation();
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    /** @TODO Fetch submission by id here */
    get_xray(location.state.xrayId).then((res) => {
      if (res.status === 200) {
        setState(res.data);
      }
    });
  }, []);
  return state === null ? (
    <h1>Loading ..</h1>
  ) : (
    <AnnotatorProvider>
      <ImageConfigProvider>
        <div>
          <Header />
          <Grid container>
            <Grid xs={8} item>
              <Panel xrayInfo={state} verifierId={location.state.verifierId} />
            </Grid>
            <Grid xs={4} item>
              <TeethList xrayInfo={state} />
            </Grid>
          </Grid>
        </div>
      </ImageConfigProvider>
    </AnnotatorProvider>
  );
};
export default ReportViewer;
