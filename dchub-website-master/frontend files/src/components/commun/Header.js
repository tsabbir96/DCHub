import { Switch } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Slide from "@material-ui/core/Slide";
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HomeIcon from "@material-ui/icons/Home";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import logoheader from '../../assets/commun/logoheader.webp';
import { MyThemeContext } from "../context/MyThemeContext";
import { logout } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
//make label at the bottom
const useStyles = makeStyles((theme) =>
  createStyles({
    grow: {
      display:'flex',
      flexGrow: 1,
      justifyContent:'center'
    },
    muiIconButtonLabel: {
      display: "flex",
      flexDirection: "column",
    },
    menuButton: {
      height: "40px",
    },
    horizentalSpacing: {
      marginLeft: "24px",
      marginRight: "8px",
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    profile_img: {
      border: `2px solid white`,
    },

    logo:{
      height:'50px'
    }
  })
);

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
const Header = (props) => {
  const [state, dispatch] = useProfileData();

  const profile = state.profile;

  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

  // HANDLERS
  const logout_user = () => {
    logout(dispatch);
    setRedirect(true);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHomeClick = () => {
    history.push("/home");
  };

  const handleProfileClick = () => {
    history.push("/profile/Reports");
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleOpenSupport = () => {
    
    setAnchorEl(null);
    handleMobileMenuClose();
    alert('Please contact us at contact@dentistconsultationhub.com if you need any help')
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [isDark, setIsDark] = React.useContext(MyThemeContext);

  const handleChange = (event) => {
    setIsDark(event.target.checked);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Settings</MenuItem> */}
            <MenuItem onClick={handleOpenSupport}>Support</MenuItem>

      <MenuItem>
        Dark theme
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </MenuItem>

      <MenuItem onClick={logout_user}>Log out</MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*   <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
 */}

      <MenuItem>
        Light theme
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </MenuItem>

      <MenuItem onClick={logout_user}>Log out</MenuItem>
    </Menu>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            {/* <Hidden smDown>
              <img
                className={classes.menuButton}
                src={logo}
                onClick={handleHomeClick}
                alt="logo"
              />
            </Hidden> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} >
                    <img
                    src={logoheader}
                    className={classes.logo}
                      alt='logo'
                    />

            </div>




            <div className={classes.sectionDesktop}>
              <IconButton
                // className={classes.muiIconButtonLabel}
                onClick={handleHomeClick}
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> */}
              <IconButton
                className={classes.muiIconButtonLabel}
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileClick}
              >
                <Avatar
                  src={profile.profile_img}
                  className={classes.profile_img}
                  alt="profileImage"
                />
                <div>
                  <Typography
                    className={classes.horizentalSpacing}
                    variant={"body1"}
                  >
                    {profile.first_name + " " + profile.last_name}
                  </Typography>
                </div>
              </IconButton>
              <IconButton
                className={classes.horizentalSpacing}
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ArrowDropDownIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {renderMobileMenu}
      {renderMenu}
      {redirect && <Redirect to="/login" />}
    </React.Fragment>
  );
};

export default Header;
