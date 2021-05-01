import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { useLocation } from "react-router";
import DiagnobotTemplate from "./DiagnoTemplate";
import LimitedTemplate from "./LimitedTemplate";
import VideoConsultationTemplate from "./OneConditionTemplate";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      className={classes.fillAvailable}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  fillAvailable: {
    width: "-webkit-fill-available",
  },
  root: {
    marginTop: theme.spacing(8),
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.default,
    minWidth: "180px",
  },
  alignStart: {
    alignSelf: "start",
  },
}));
export default function Diagnobot() {
  const location = useLocation();
  const type = location.state;
  if (type === "DIAGNOBOT") {
    return <DiagnobotTemplate />;
  } else if (type === "LIMITED_EVALUATION") {
    return <LimitedTemplate />;
  } else if (type === "CONSULTATION") {
    return <VideoConsultationTemplate />;
  }
}
