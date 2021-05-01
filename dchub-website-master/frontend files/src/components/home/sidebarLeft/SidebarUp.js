import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "8px",
    position: "sticky",
    borderRadius: "10px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  Avatar: {
    marginTop: "30%",
    height: "80px",
    width: "80px",
    //border: `2px solid ${theme.palette.primary.light}`,
    border: `3px solid white`,
    boxShadow: theme.shadows[3],
  },
  backgroundImage: {
    width: "100%",
    height: "30%",
    position: "absolute",
    //  ,
    //maskImage:'linear-gradient(rgba(0, 0, 0, 1.0), transparent)',
    filter: "brightness(60%)  ",
    // filter: 'brightness(80%) blur(2px) ',

    objectFit: "cover",
  },
  horizentalStretch: {
    width: "100%",
  },
  desc: {
    marginTop: "24px",
  },
  options: {
    marginTop: "16px",
  },
  optionItem: {
    padding: "8px",
  },
}));

export default function SideabrUp() {
  const classes = useStyles();
  const [state, dispatch] = useProfileData();
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/profile/Reports");
  };
  const profile = state.profile;
  return (
    <Card className={classes.root} variant="outlined">
      <Grid container direction="column" alignItems="center">
        <Grid item container justify="center">
          <img
            src={profile.banner_img}
            className={classes.backgroundImage}
            alt="banner"
            loading="lazy"
          />

          <Avatar
            className={classes.Avatar}
            src={profile.profile_img}
            alt="profileImage"
          />
        </Grid>

        <Grid
          className={classes.desc}
          item
          container
          direction="column"
          alignItems="center"
        >
          <Grid container item direction={"column"} alignItems="center">
            <Grid item>
              <Typography variant={"h5"}>
                {profile.first_name + " " + profile.last_name}
              </Typography>
            </Grid>
          </Grid>

          <Grid container item className={classes.options}>
            <Grid
              spacing={1}
              className={classes.optionItem}
              container
              item
              direction="row"
              justify="space-between"
              xs={12}
            >
              <Grid item>
                <Typography color={"textSecondary"} variant="subtitle2">
                  Account type:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="primary">
                  {state.profile.user.account_type}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              className={classes.optionItem}
              spacing={1}
              container
              item
              direction="row"
              justify="space-between"
              xs={12}
            >
              <Grid item>
                <Typography color={"textSecondary"} variant="subtitle2">
                  Is verified?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="primary">
                  {state.profile.is_verified.toString()}
                </Typography>
              </Grid>
            </Grid>

            {/* <Grid
              className={classes.optionItem}
              spacing={1}
              container
              item
              direction="row"
              justify="space-between"
              xs={12}
            >
              <Grid item>
                <Typography color={"textSecondary"} variant="subtitle2">
                  {" "}
                  Waiting Patients
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle2" color="primary">
                  40
                </Typography>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
      <CardActions>
        <Button
          color={"primary"}
          onClick={handleRedirect}
          className={classes.horizentalStretch}
        >
          Show all
        </Button>
      </CardActions>
    </Card>
  );
}
