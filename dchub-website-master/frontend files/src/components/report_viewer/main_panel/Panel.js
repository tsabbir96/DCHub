import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useAnnotatorState } from "../../context/annotator/AnnotatorContext";
import { Annotator } from "../teeth_list/annotator/Annotator";
import { useImageConfig } from "./ImageConfigContext";
import MenuPanel from "./image_section/MenuPanel";
import InfoPanel from "./info_section/InfoPanel";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(2),
      position: "fixed",
      width: "65%",
      height: "90%",
    },
    image: {
      width: "100%",
    },
    overlayFilter: {
      backgroundColor: "transparent",
      flex: 1,
      width: "100%",
      height: "100%",
    },
  })
);
const Panel = ({ xrayInfo, verifierId }) => {
  const classes = useStyles();

  const [imageFilterState, dispatch] = useImageConfig();
  const _containerRef = React.useRef();
  const [annotationState, dispatchAnnotations] = useAnnotatorState();
  const onDeleteAnnotation = (annotationId) => {
    dispatchAnnotations({
      type: "DELETE_ANNOTATION",
      payload: annotationId,
    });
  };
  const onAnnotationChange = (data) => {
    dispatchAnnotations({
      type: "UPDATE_TOOTH_ANNOTATION",
      payload: data,
    });
  };

  const setSharedImage = (image, scale) => {
    dispatchAnnotations({ type: "SET_IMAGE_BASE", payload: { image, scale } });
  };
  // #####################

  return (
    <Card className={classes.root}>
      <CardContent
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <InfoPanel xrayInfo={xrayInfo} verifierId={verifierId} />
        <MenuPanel xrayInfo={xrayInfo} />

        <div ref={_containerRef} className={classes.overlayFilter}>
          <Annotator
            onDeleteAnnotation={onDeleteAnnotation}
            setSharedImage={setSharedImage}
            onAnnotationChange={onAnnotationChange}
            annotations={annotationState.annotations}
            src={xrayInfo.xray_image}
            containerRef={_containerRef}
            {...imageFilterState}
          />
        </div>
      </CardContent>
    </Card>
  );
};
export default Panel;
