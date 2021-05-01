import ButtonBase from "@material-ui/core/ButtonBase";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InvertColorsOutlinedIcon from "@material-ui/icons/InvertColorsOutlined";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import React, { useState } from "react";
import brightness from "../../../../assets/xray_panel/brightness.svg";
import contrast from "../../../../assets/xray_panel/contrast.svg";
import fullscreen from "../../../../assets/xray_panel/fullscreen.svg";
import { AT, useImageConfig } from "../ImageConfigContext";
import BrightnessMenu from "./OldBrightnessMenu";
import ContrastMenu from "./oldContrastMenu";
import FullscreenDialog from "./oldFullscreenDialog";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // backgroundColor:theme.palette.background.paper,
      backdropFilter: "blur(60px)",
      backgroundColor: "#1A1A1B",
      marginLeft: theme.spacing(2),
      border: "solid",
      borderColor: "white",
      borderWidth: "1px",
      borderRadius: "8%",
      position: "fixed",
      width: "auto",
      zIndex: "1",
    },
    icon: {
      color: "white",
      fill: "white",
      height: "20px",
      width: "20px",
      margin: theme.spacing(1, 1),
    },
  })
);
const ImageOptions = ({ xrayImg }) => {
  const [state, dispatch] = useImageConfig();
  const [openFS, setOpenFS] = useState(false);
  const [openContrast, setOpenContrast] = useState(false);
  const anchorRefContrast = React.useRef(null);
  const [openBrightness, setOpenBrightness] = useState(false);
  const anchorRefBrightness = React.useRef(null);
  const classes = useStyles();
  const handleClickOpenFS = () => {
    setOpenFS(true);
  };
  const handleInvert = () => {
    const payload = state.invert === 0 ? 1 : 0;
    dispatch({ type: AT.INVERT, payload });
  };
  const handleReset = () => {
    dispatch({ type: AT.RESET });
  };
  const handleCloseFS = (value) => {
    setOpenFS(false);
  };
  const handleToggleContast = () => {
    setOpenContrast((prevOpen) => !prevOpen);
  };
  const handleToggleBrightness = () => {
    setOpenBrightness((prevOpen) => !prevOpen);
  };
  const handleCloseContrast = (event) => {
    if (
      anchorRefContrast.current &&
      anchorRefContrast.current.contains(event.target)
    ) {
      return;
    }
    setOpenContrast(false);
  };
  const handleCloseBrightness = (event) => {
    if (
      anchorRefBrightness.current &&
      anchorRefBrightness.current.contains(event.target)
    ) {
      return;
    }
    setOpenBrightness(false);
  };
   return (
    <div className={classes.root}>
      <ButtonBase onClick={handleClickOpenFS}>
        <img src={fullscreen} className={classes.icon} alt='fullscreenbtn' />
      </ButtonBase>
      <ButtonBase ref={anchorRefContrast} onClick={handleToggleContast}>
        <img src={contrast} className={classes.icon}  alt='contrastbtn'  />
      </ButtonBase>
      <ButtonBase ref={anchorRefBrightness} onClick={handleToggleBrightness}>
        <img src={brightness} className={classes.icon}   alt='brightnesstbtn' />
      </ButtonBase>
      <ButtonBase onClick={handleInvert}>
        <InvertColorsOutlinedIcon className={classes.icon} />
      </ButtonBase>
      <ButtonBase onClick={handleReset}>
        <RotateLeftIcon className={classes.icon} />
      </ButtonBase>
      <FullscreenDialog
        handleClose={handleCloseFS}
        open={openFS}
        xrayimg={xrayImg}
      />
      <ContrastMenu
        open={openContrast}
        anchorRef={anchorRefContrast}
        handleClose={handleCloseContrast}
        value={state.contrast}
        setValue={(payload) => dispatch({ type: AT.SET_CONTRAST, payload })}
      />
      <BrightnessMenu
        open={openBrightness}
        anchorRef={anchorRefBrightness}
        handleClose={handleCloseBrightness}
        value={state.brightness}
        setValue={(payload) => dispatch({ type: AT.SET_BRIGHTNESS, payload })}
      />
    </div>
  );
};
export default React.memo(ImageOptions, () => false);
