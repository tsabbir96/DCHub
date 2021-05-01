import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Annotator } from "../../report_viewer/teeth_list/annotator/Annotator";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "285mm",
    maxHeight: "285mm",
  },
  marginTop: {
    marginTop: theme.spacing(8),
  },
  img: {
    width: "100%",
    // height: "100%",
    objectFit: "contain",
  },
  xray: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  infoItem: {
    padding: theme.spacing(1),
  },  titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));
const keyFromUrl = (url) => {
  return url.match(/\/mouth_images\/(.*)\.(png|jpg|jpeg|webp)/)[1];
};
export default function Page04Image02({ fullInfo }) {
  const classes = useStyles();
  const bull = <span>•</span>;
  const _containerRef = React.useRef();
  const imageSrc = fullInfo.mouth_images.closed_left;

  const annotations = React.useMemo(() => {
    let annotations = [];
    for (const quad of fullInfo.mouth_images.report.quadrants) {
      for (const tooth of quad.teeth_array) {
        for (const pos of tooth.position) {
          if (keyFromUrl(pos.src) === keyFromUrl(imageSrc))
            annotations.push(pos);
        }
      }
    }
    return annotations;
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.titleStyle} color="primary">
        
        <Box fontWeight="800">IV. Left Side View </Box>

      </Typography>
      <Divider />
      <div
        style={{ width: "100%", height: "80%" }}
        ref={_containerRef}
        className={classes.overlayFilter}
      >
        <Annotator
          readOnly={true}
          setSharedImage={() => {}}
          annotations={annotations}
          src={imageSrc}
          containerRef={_containerRef}
        />
      </div>
    </div>
  );
}
