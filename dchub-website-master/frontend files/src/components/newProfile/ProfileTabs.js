import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BackupTwoToneIcon from "@material-ui/icons/BackupTwoTone";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import HistoryIcon from "@material-ui/icons/History";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PropTypes from "prop-types";
import React from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import Dashboard from "./Dashboard/Dashboard";
import AdminsPanel from "./forAdmins/AdminsPanel";
import InfoTab from "./info/InfoTab";
import ActivityHistory from "./medical_history/ActivityHistory";
import Submissions from "./submissions/Submissions";
import Subscriptions from "./subscription/Subscriptions";
const TabIcons = {
  Reports: BackupTwoToneIcon,
  Profile: AccountCircleTwoToneIcon,
  // 'Files': AttachFileTwoToneIcon,
  Dashboard: DesktopWindowsIcon,
  "Activity history": HistoryIcon,
  Payments: AttachMoneyIcon,
  Admins: VerifiedUserIcon,
};
const PatientTabs = {
  Reports: Submissions,
  Profile: InfoTab,
  // 'Files': Files,
  "Activity history": ActivityHistory,
  Payments: Subscriptions,
};
const DoctorTabs = {
  Reports: Submissions,
  Profile: InfoTab,
  // 'Files': Files,
  Dashboard: Dashboard,
  "Activity history": ActivityHistory,
  Payments: Subscriptions,
};
const AdminTabs = {
  Reports: Submissions,
  Profile: InfoTab,
  // 'Files': Files,
  // 'Dashboard': Dashboard,
  Admins: AdminsPanel,
  "Activity history": ActivityHistory,
  // 'Subscriptions': Subscriptions,
};

function TabPanel(props) {
  const { path, value, tabMap, tabKey, ...other } = props;
  const ToRender = tabMap[tabKey];
  // value === tabKey ?
  return (
    <Route
      path={path}
      role="tabpanel"
      id={`simple-tabpanel-${tabKey}`}
      aria-labelledby={`simple-tab-${tabKey}`}
      {...other}
    >
      <Box p={3}>
        <ToRender />
      </Box>
    </Route>
  );
  // : null;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },

  appBar: {
    backgroundColor: theme.palette.background.default,
  },
}));

function GetTabs(role) {
  switch (role) {
    case "doctor":
      return DoctorTabs;
    case "Patient":
      return PatientTabs;
    case "Admin":
      return AdminTabs;
    default:
      return PatientTabs;
  }
}
export default function ProfileTabs() {
  const [profileData] = useProfileData();

  const classes = useStyles();
  let TabsMap = null;

  if (profileData.profile.user.is_superuser) {
    TabsMap = GetTabs("Admin");
  } else {
    TabsMap = GetTabs(profileData.profile.user.account_type.toLowerCase());
  }

  const { path } = useRouteMatch();
  const location = useLocation();
  const panel = location.pathname.split("/").pop();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} elevation={0}>
        <Tabs
          value={panel}
          // onChange={handleChange}
          indicatorColor={"primary"}
          textColor={"primary"}
          className={classes.root}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable auto tabs example"
        >
          {Object.keys(TabsMap).map((t, index) => {
            const Icon = TabIcons[t];
            return (
              <Tab
                component={Link}
                to={`${path}/${t}`}
                icon={<Icon />}
                value={t}
                label={t}
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      </AppBar>

      <Divider />
      <Switch>
        {Object.keys(TabsMap).map((t) => (
          <TabPanel
            path={`${path}/${t}`}
            tabKey={t}
            tabMap={TabsMap}
            // value={value}
          />
        ))}
      </Switch>
    </div>
  );
}
