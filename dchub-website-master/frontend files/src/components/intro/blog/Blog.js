import {
  AppBar,
  Box,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import BlogCategory from "./BlogCategory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  backgroundRoot: {
    color: "black",
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: "white",
  },
  selected: {
    color: theme.palette.primary.main,
    fontWeight:'800'
  },
}));

export default function Blog() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.backgroundRoot}
        elevation={0}
      >
        <Tabs
          inkBarStyle={{ background: "blue" }}
          className={classes.tabs}
          classes={{
            indicator: classes.indicator,
          }}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            classes={{ selected: classes.selected }}
            label="All posts"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ selected:classes.selected }}
            label="Preventive dentistry"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ selected:classes.selected}}
            label="Denture"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ selected:classes.selected}}
            label="Dental product reviews"
            {...a11yProps(3)}
          />
          <Tab
            classes={{ selected:classes.selected}}
            label="Dental tourism"
            {...a11yProps(4)}
          />
  
  
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

            <BlogCategory/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
