import { Grid, Hidden } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Redirect } from "react-router";
import Header from "../commun/Header";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import ProfileInfoDialog from "../dialogs/profile_data/ProfileInfoDialog";
import Feed from "./feed/Feed";
import Sidebar from "./sidebarLeft/SideBar";
import SideBarR02 from "./sidebarRight/SideBarR02";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
      backgroundColor: theme.palette.background.default,
    },
    feed: {
      [theme.breakpoints.up("md")]: {
        padding: "40px 8px 0 8px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "40px 8px 0 8px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "40px 8px 0 8px",
      },
    },
    mainGrid: {
      marginTop: theme.spacing(10),
    },
  })
);
const Home = () => {
  const [state] = useProfileData();
  const classes = useStyles();
  const [profileData] = useProfileData();

  const [open, setOpen] = React.useState(profileData.profile.is_New);
  const handleClose = (value) => {
    setOpen(false);
  };

  if (!state.isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
      <Grid container className={classes.mainGrid} direction={"row"}>
        <Grid item md={4} lg={2}>
          <Hidden smDown>
            <Sidebar
            //     className={classes.sideBar}
            />
          </Hidden>
        </Grid>
        <Grid container justify='center' item xs={12} sm={12} md={8} lg={8}>
          <Feed  />
        </Grid>
        <Grid item md={2} lg={2}>
          <Hidden mdDown>
            {/* <SidebarRight /> */}

            <SideBarR02 />
            {/* <SideBarR /> */}
          </Hidden>
        </Grid>
        <ProfileInfoDialog open={open} onClose={handleClose} />
      </Grid>
    </div>
  );
};

export default Home;
