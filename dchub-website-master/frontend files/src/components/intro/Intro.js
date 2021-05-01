import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { lazy, Suspense } from "react";
import Blog from "./blog/Blog";
import HomeIntro from "./home_intro/HomeIntro";
import IntroHeader from "./IntroHeader";
import Pricing from "./pricing/Pricing";

const  Footer = lazy(()=>import( "./Footer"));

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    overflow: "hidden",

  },
  tabPanel: {
    marginLeft: 0,
    padding: 0,
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
 
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <> {children}</>}
    </div>
  );
}

const Intro = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    window.location.href = "https://www.dentistconsultationhub.com/";
  }, []);
  return (
 
    <div className={classes.root}>
      <IntroHeader value={value} setValue={setValue} />

      <TabPanel className={classes.tabPanel} value={value} index={0}>
        <HomeIntro />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Blog/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Pricing />
      </TabPanel>
      <Suspense fallback={<h4>Loading...</h4>}>
      <Footer />

      </Suspense>

    </div>    
   
  );
};
export default Intro;
