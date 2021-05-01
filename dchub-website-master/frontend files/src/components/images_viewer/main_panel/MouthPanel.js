import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useImageMouthConfig } from "../ImagesMouthConfigContext";
import mouthfront from "../../../assets/images_panel/mouthtest.png";
import mouthtop from "../../../assets/images_panel/mouthTop.png";
import mouthbot from "../../../assets/images_panel/mouthbot.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Card, CardContent } from "@material-ui/core";
import { AnnotationViewer } from "../../report_viewer/AnnotationViewer";
import MouthMenuPanel from "./image_section/MouthMenuPanel";

const imagesBundle = [
  {
    label: "FRONT CLOSED",
    imgPath: mouthfront,
  },
  {
    label: "LEFT",
    imgPath: mouthtop,
  },
  {
    label: "TOP OPENED ",
    imgPath: mouthbot,
  },
  {
    label: "TOP CLOSED",
    imgPath: mouthtop,
  },
  {
    label: "BOTTOM OPENED",
    imgPath: mouthfront,
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    flexGrow: 1,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    overflow: "hidden",
    // display: 'block',
    maxWidth: "80%",
    maxHeight: "80%",
  },
}));
export default function MouthPanel() {
  const [imageFilterState, dispatch] = useImageMouthConfig();
  const classes = useStyles();

  const AnnotationViewerRef = React.useRef();
  const _containerRef = React.useRef();

 
  
  return (
    <div
      ref={_containerRef}
      className={classes.overlayFilter}
      style={{
        width:'100%', 
        height:'100%',
        flex: 1,
        backgroundColor: "#f7f7f7",
        filter: `contrast(${imageFilterState.contrast}%)  brightness(${imageFilterState.brightness}%) invert(${imageFilterState.invert})`,
      }}
    >
      <Button
        onClick={() => {
          AnnotationViewerRef.current.Add();
        }}
      >
        add
      </Button>

      <MouthMenuPanel />

      <AnnotationViewer
        parentContainer={_containerRef}
        ref={AnnotationViewerRef}
        imageUrl={mouthfront}
        annotations={[]}
      />
    </div>
  );
}
