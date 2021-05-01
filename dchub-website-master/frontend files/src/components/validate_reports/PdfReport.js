import { makeStyles } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router";
import DiagnobotReport from "./diagnobot/DiagnobotReport";
import FullMouthReport from "./full_mouth/FullMouthReport";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4),
  },
}));

export default function PdfReport() {
  const location = useLocation();
  let fullInfo = location.state;

  const classes = useStyles();

  switch (fullInfo.type) {
    case "LIMITED_EVALUATION":
      return <FullMouthReport fullInfo={fullInfo} />;
    case "CONSULTATION":
      return<FullMouthReport fullInfo={fullInfo} />;
      case "DIAGNOBOT":
        return <DiagnobotReport fullInfo={fullInfo} />;
  
    default:
      return <h4>404 </h4>;
  }
}
