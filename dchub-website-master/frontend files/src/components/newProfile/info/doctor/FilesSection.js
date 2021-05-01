import {
  Box,
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Link,
  makeStyles,
  Typography
} from "@material-ui/core";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import GavelTwoToneIcon from "@material-ui/icons/GavelTwoTone";
import React from "react";
import ProgressDialog from "../../../commun/ProgressDialog";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  titles: {
    fontWeight: 700,
  },
  icon: {
    color: theme.palette.text.secondary,
  },
  itemRow20: {
    marginTop: theme.spacing(20),
    // display: "flex",
  },  itemRow8: {
    marginTop: theme.spacing(8),
    // display: "flex",
  },
  input: {
    display: "none",
  },
  img: {
    width: "60%",
  },
  btnDiv: {
    position: "absolute",
  },
}));
export default function FilesSection({ open, setOpen }) {
  const classes = useStyles();
  const [profileData, dispatch] = useProfileData();

  const [openLoading, setOpenLoading] = React.useState(false);
  const handleClose = (value) => {
    setOpenLoading(false);
  };
  const showDialog = () => {
    setOpen(!open);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography variant={"h5"} color={"primary"}>
            <Box fontWeight={700}>Legal documents</Box>
          </Typography>
        }
        action={
          <ButtonBase onClick={showDialog}>
            <EditTwoToneIcon className={classes.actionBtn} />
          </ButtonBase>
        }
      />
      <CardContent>
        <Divider />
        <Grid container>
          <Grid
            container
            item
            md={6}
            sm={12}
            direction="column"
            className={classes.itemRow8}
          >
            <Grid container>
              <GavelTwoToneIcon className={classes.icon} />

              <Typography className={classes.titles}>Goverment id:</Typography>
            </Grid>
            <Typography>
              {profileData.profile.gov_id ? (
                <Grid container direction="column" item xs={12}>
                  <img
                    className={classes.img}
                    loading="lazy"
                    src={profileData.profile.gov_id}
                    alt="gov_id"
                  />
                </Grid>
              ) : (
                <Grid container direction="column">
                  <Typography>Not provided</Typography>
                </Grid>
              )}
            </Typography>
          </Grid>
          <Grid
            container
            className={classes.itemRow8}
            direction="column"
            item
            md={6}
            sm={12}
          >
            <Grid container>
              <AssignmentIndTwoToneIcon className={classes.icon} />

              <Typography className={classes.titles}>
                Dental license:
              </Typography>
            </Grid>
            <Typography>
              {profileData.profile.dental_license ? (
                <Grid container direction="column" item xs={12}>
                  <img
                    className={classes.img}
                    src={profileData.profile.dental_license}
                    loading="lazy"
                    alt="dental_license"
                  />
                </Grid>
              ) : (
                <Grid container direction="column">
                  <Typography>Not provided</Typography>
                </Grid>
              )}
            </Typography>
          </Grid>

          <Grid
            container
            item
            md={12}
            sm={12}
            direction="column"
            className={classes.itemRow20}
          >
            <Grid container item >
              <DescriptionTwoToneIcon className={classes.icon} />

              <Typography className={classes.titles}>cv resume:</Typography>
            </Grid>
            <Typography>
              {profileData.profile.cv_resume ? (
                <Grid container direction="column" item xs={12}>
                  <Link target="_blank" href={profileData.profile.cv_resume}>
                    CV
                  </Link>
                </Grid>
              ) : (
                <Grid container direction="column">
                  <Typography>Not provided</Typography>
                </Grid>
              )}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <ProgressDialog open={openLoading} onClose={handleClose} />
    </Card>
  );
}
