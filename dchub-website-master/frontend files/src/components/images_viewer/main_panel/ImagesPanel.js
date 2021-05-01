import { ButtonBase, createStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { useImagesAnnotatorState } from "../../context/annotator/ImagesAnnotatorContext";
import { Annotator } from "../../report_viewer/teeth_list/annotator/Annotator";
import { useImageMouthConfig } from "../ImagesMouthConfigContext";
import MouthMenuPanel from "./image_section/MouthMenuPanel";
import ImagesInfoPanel from "./info_section/ImagesInfoPanel";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: theme.spacing(2),
      position: "fixed",
      width: "65%",
      height: "90%",
      // maxHeight:'80ùm'
    },
    image: {
      maxWidth: "80%",
      maxHeight: "80%",
    },
    main: {
      display: "flex",
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    btnbase: { height: "100%" },
  })
);

const ImagesPanel = ({ imagesInfo }) => {
  const classes = useStyles();
  const _containerRef = React.useRef();
  const [annotationState, dispatchAnnotations] = useImagesAnnotatorState();
  const [imageFilterState, dispatch] = useImageMouthConfig();
  const setSharedImage = (image, scale) => {
    dispatchAnnotations({ type: "SET_IMAGE_BASE", payload: { image, scale } });
  };
  const onAnnotationChange = (data) => {
    dispatchAnnotations({
      type: "UPDATE_TOOTH_ANNOTATION",
      payload: data,
    });
  };

  const onDeleteAnnotation = (annotationId) => {
    dispatchAnnotations({
      type: "DELETE_ANNOTATION",
      payload: annotationId,
    });
  };

  const handlePrevious = () => {
    dispatchAnnotations({ type: "CHANGE_ACTIVE_IMAGE", payload: -1 });
  };

  const handleNext = () => {
    dispatchAnnotations({ type: "CHANGE_ACTIVE_IMAGE", payload: 1 });
  };

  return (
    <Card className={classes.root}>
      <CardContent
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <ImagesInfoPanel imagesInfo={imagesInfo} />
        <MouthMenuPanel
          image={annotationState.images[annotationState.activeImageIndex]}
        />

        <div className={classes.main}>
          <ButtonBase onClick={handlePrevious} className={classes.btnbase}>
            <ChevronLeftIcon />
          </ButtonBase>
          <div
            ref={_containerRef}
            className={classes.btnbase}
            style={{
              flex: 1,
              backgroundColor: "#f7f7f7",
            }}
          >
            <Annotator
              onDeleteAnnotation={onDeleteAnnotation}
              setSharedImage={setSharedImage}
              onAnnotationChange={onAnnotationChange}
              annotations={annotationState.activeAnnotationList}
              src={annotationState.images[annotationState.activeImageIndex]}
              containerRef={_containerRef}
              {...imageFilterState}
            />
          </div>
          <ButtonBase onClick={handleNext} className={classes.btnbase}>
            <ChevronRightIcon />
          </ButtonBase>
        </div>

        {/* <MouthPanel /> */}
      </CardContent>
    </Card>
  );
};
export default React.memo(ImagesPanel);
