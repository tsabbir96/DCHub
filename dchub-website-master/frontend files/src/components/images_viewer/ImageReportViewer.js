import { Grid } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import Header from "../commun/Header";
import ImagesAnnotatorProvider from "../context/annotator/ImagesAnnotatorContext";
import { get_mouthimages } from "../context/submission/XrayReportActions";
import { ImageMouthConfigProvider } from "./ImagesMouthConfigContext";
import ImagesPanel from "./main_panel/ImagesPanel";
import MouthTeethList from "./teeth_list/MouthTeethList";
const ImageReportViewer = () => {
  const location = useLocation();
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    /** @TODO Fetch submission by id here */
    get_mouthimages(location.state).then((res) => {
      if (res.status === 200) {
        setState(res.data);
      }
    });
  }, []);

  return state === null ? (
    <h1>Loading ..</h1>
  ) : (
    <ImagesAnnotatorProvider>
      <ImageMouthConfigProvider>
        <div>
          <Header />
          <Grid container>
            <Grid xs={8} item>
              <ImagesPanel imagesInfo={state} />
            </Grid>
            <Grid xs={4} item>
              <MouthTeethList imagesInfo={state} />
            </Grid>
          </Grid>
        </div>
      </ImageMouthConfigProvider>
    </ImagesAnnotatorProvider>
  );
};
export default ImageReportViewer;
