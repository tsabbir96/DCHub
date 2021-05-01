import {
  Box,
  Container,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import Header from "../commun/Header";
import Examination from "./tabs/examination/Examination";
import IntroTab from "./tabs/introduction/IntroTab";
import MedicalHistoryDiagno from "./tabs/medical_history/MedicalHistoryDiagno";
import Results from "./tabs/results/Results";
import Symptoms from "./tabs/symptoms/Symptoms";

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
export default function DiagnoTemplate() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Header />
      <Container maxWidth={"lg"} className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          scrollButtons={"off"}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            disableRipple
            label={
              <Typography className={classes.alignStart}>
                Introduction
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.alignStart}>
                Medical history
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.alignStart}>Conditions</Typography>
            }
            {...a11yProps(2)}
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.alignStart}>
                Examination
              </Typography>
            }
            {...a11yProps(3)}
          />

          <Tab
            disableRipple
            label={
              <Typography className={classes.alignStart}>Summary</Typography>
            }
            {...a11yProps(4)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <IntroTab type="DIAGNOBOT" value={value} setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MedicalHistoryDiagno
            submissionId
            value={value}
            setValue={setValue}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Symptoms value={value} setValue={setValue} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Examination value={value} setValue={setValue} type="DIAGNOBOT" />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Results value={value} setValue={setValue} type="DIAGNOBOT" />
        </TabPanel>
      </Container>
    </div>
  );
}
