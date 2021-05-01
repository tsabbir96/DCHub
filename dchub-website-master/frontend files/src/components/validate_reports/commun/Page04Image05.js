import { Box, Divider, Grid, makeStyles, Typography } from "@material-ui/core";
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
  },titleStyle: {
    padding: theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:'white'
  },
}));

const keyFromUrl = (url) => {
  return url.match(/\/mouth_images\/(.*)\.(png|jpg|jpeg|webp)/)[1];
};
export default function Page04Image05({ fullInfo }) {
  const classes = useStyles();
  const bull = <span>•</span>;
  const imageSrc = fullInfo.mouth_images.opened_down;

  const _containerRef = React.useRef();
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
    <Grid className={classes.root} direction="column" justify="flex-start">
      <Typography variant="h5" className={classes.titleStyle} color="primary">
      <Box fontWeight="800">     VII. Lower Jaw  </Box>
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
    </Grid>
  );
}
