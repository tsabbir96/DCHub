import {
  ButtonBase,
  Divider,
  Grid,
  makeStyles,
  Tooltip
} from "@material-ui/core";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import InvertColorsOutlinedIcon from "@material-ui/icons/InvertColorsOutlined";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import React from "react";
import FullScreenDialog from "../../FullScreenDialog";
import { AT, useImageConfig } from "../ImageConfigContext";
import BrightnessSlider from "./BrightnessSlider";
import ContrastSlider from "./ContrastSlider";
import SharpnessSlider from "./SharpnessSlider";

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: theme.spacing(1, 1),
  },
}));

export default function MenuPanel({ xrayInfo }) {
  const classes = useStyles();
  const [state, dispatch] = useImageConfig();
  const [isShown, setIsShown] = React.useState(false);
  const handleInvert = () => {
    dispatch({ type: AT.INVERT, payload: !state.invert });
  };
  const handleReset = () => {
    dispatch({ type: AT.RESET });
  };

  const handleFullScreen = () => {
    setIsShown(true);
  };
  return (
    <Grid container justify="center">
      {/* <ButtonBase className={classes.icon}>
        <ZoomOutIcon />
      </ButtonBase>
      <Divider orientation="vertical" flexItem />

      <ButtonBase className={classes.icon}>
        <ZoomInIcon />
      </ButtonBase>
      <Divider orientation="vertical" flexItem />
      <ButtonBase className={classes.icon}>
        <Typography>1&nbsp; :&nbsp; 1</Typography>
      </ButtonBase> */}
      <Divider orientation="vertical" flexItem />
      <ContrastSlider
        value={state.contrast}
        setValue={(payload) => dispatch({ type: AT.SET_CONTRAST, payload })}
      />
      <Divider orientation="vertical" flexItem />

      <BrightnessSlider
        value={state.brightness}
        setValue={(payload) => dispatch({ type: AT.SET_BRIGHTNESS, payload })}
      />

      <Divider orientation="vertical" flexItem />

      <SharpnessSlider
        value={state.sharpness}
        setValue={(payload) => dispatch({ type: AT.SHARPEN, payload })}
      />

      <Divider orientation="vertical" flexItem />
      <ButtonBase onClick={handleInvert} className={classes.icon}>
        <Tooltip title="Negative" placement="top">
          <InvertColorsOutlinedIcon />
        </Tooltip>
      </ButtonBase>

      <Divider orientation="vertical" flexItem />

      <ButtonBase onClick={handleReset} className={classes.icon}>
        <Tooltip title="Reset" placement="top">
          <RotateLeftIcon />
        </Tooltip>
      </ButtonBase>

      {/* <Divider orientation="vertical" flexItem /> */}

      {/* <ButtonBase className={classes.icon}>
        <VisibilityOffIcon />
      </ButtonBase> */}

      <Divider orientation="vertical" flexItem />

      <ButtonBase onClick={handleFullScreen} className={classes.icon}>
        <Tooltip title="Full screen" placement="top">
          <AspectRatioIcon  />
        </Tooltip>
      </ButtonBase>
      <FullScreenDialog
        open={isShown}
        src={xrayInfo.xray_image}
        setOpen={setIsShown}
      />
    </Grid>
  );
}
