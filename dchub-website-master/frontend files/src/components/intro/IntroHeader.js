import {
  Button,
  ButtonBase,
  Divider,
  Hidden,
  makeStyles,



  Tabs
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";
import smallSearch from "../../assets/landing/smallsearch.svg";
import logoHeader from "./../../assets/landing/logoHeader.svg";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  logo: {
    // maxWidth: "400px",
    height: "13px",
  },
  tabBar: {
    padding: theme.spacing(2, 0),
    backdropFilter: 'blur(5px)',
    backgroundColor: "rgba(255,255,255, 0.8)",
  },

  appbar: {
    backgroundColor: "transparent",
  },
  tabs: {
    marginLeft: theme.spacing(4),
    color: "black",
  },
  tab: {
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "none",
  },
  loginBtn: {
    margin: theme.spacing(0, 3),
    textTransform: "none",
    whiteSpace:'nowrap',

  },
  asDoctor: {
    marginRight: theme.spacing(2),
    textTransform: "none",
    padding: theme.spacing(1, 3),
    borderRadius: "20px",
    whiteSpace:'nowrap',
  },
  divider: {
    backgroundColor: "black",
    width: "2px",
    margin: theme.spacing(1, 0),
  },
  icon: {
    maxWidth: "20px",
    maxHeight: "20px",
    marginLeft: "auto",
    marginRight: theme.spacing(4),
  },
}));
export default function ElevateAppBar(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };
  const handleLogin = () => {
    history.push("/login");
  };
  const handleHomeClick = () => {
    history.push("/");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.tabBar}>
          <Toolbar className={classes.appbar}>
            <Hidden mdDown>
            <img onClick={handleHomeClick} className={classes.logo} src={logoHeader} alt="logo" />

            </Hidden>

            <Tabs
              className={classes.tabs}
              value={props.value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              {/* <Tab className={classes.tab} label="Home" {...a11yProps(0)} /> */}
              {/* <Tab
                className={classes.tab}
                label="Dental services"
                {...a11yProps(1)}
              /> */}
              {/* <Tab
                className={classes.tab}
                label="Dental videos"
                {...a11yProps(1)}
              /> */}
              {/* <Tab className={classes.tab} label="Pricing" {...a11yProps(2)} /> */}
            </Tabs>

            <Hidden lgDown>
              <ButtonBase className={classes.icon}>
                <img 
                  wrapperClassName={classes.icon}
                  src={smallSearch}
                  alt="search"
                  loading='lazy'
                />
              </ButtonBase>

              <Divider
                orientation="vertical"
                flexItem
                className={classes.divider}
              />
            </Hidden>



            <Hidden smDown>
            <Button onClick={handleLogin} className={classes.loginBtn}>
              <Typography color="primary">
                <Box fontSize="14px" fontWeight={600}>
                  Join as Patient
                </Box>
              </Typography>
            </Button>

            <Button
              className={classes.asDoctor}
              onClick={handleLogin}
              color="primary"
              variant="contained"
            >
              <Typography>
                <Box fontSize="14px" fontWeight={400}>
                  Are you a Doctor?
                </Box>
              </Typography>
            </Button>
            </Hidden>
           
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
