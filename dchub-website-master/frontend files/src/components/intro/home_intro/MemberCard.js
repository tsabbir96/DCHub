import {
  Avatar,
  Box,
  Card,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";

import facebook from "../../../assets/landing/facebook.svg";
import insta from "../../../assets/landing/insta.svg";
import linkedin from "../../../assets/landing/linkedin.svg";

const useStyles = makeStyles((theme) => ({
  subTitle: {
    color: "lightgray",
  },
  avatar: {
    height: "120px",
    width: "120px",
    border: `4px solid white`,
    boxShadow: theme.shadows[3],
    margin: theme.spacing(2, 0),
  },
  logo: {
    width: "28px",
    height: "28px",
    fill: "lightgray",

    margin: theme.spacing(0, 2),
  },
  root: {
    width: "240px",
    // height: "320px",
    margin: theme.spacing(4, 2),
  },
  rootVIP: {
    width: "240px",
    // height: "320px",
    background: "#EBEFFB",
    margin: theme.spacing(4, 2),
  },
  position: {
    marginTop: theme.spacing(2),
  },
  social: {
    margin: theme.spacing(4, 0),
  },
}));
export default function MemberCard({  avatar , isVIP, name, education, position, role }) {
  const classes = useStyles();

  return (
    <Card
      className={isVIP ? classes.rootVIP : classes.root}
      variant={isVIP ? "elevation" : "outlined"}
      elevation={isVIP ? 8 : 0}
    >
      <Grid container direction="column" alignItems="center">
        <Avatar className={classes.avatar} src={avatar} alt="person" />
        <Typography>
          <Box fontWeight={800}>{name}</Box>
        </Typography>

        <Typography color="textSecondary">
          <Box>{education}</Box>
        </Typography>
        <Typography className={classes.position}>
          <Box>{position}</Box>
        </Typography>
        <Typography>
          <Box fontSize="14px">{role}</Box>
        </Typography>
        <Grid container className={classes.social} justify={"center"}>
          <img
            loading="lazy"
            className={classes.logo}
            src={facebook}
            alt="facebook"
          />

          <img
            loading="lazy"
            className={classes.logo}
            src={insta}
            alt="insta"
          />

          <img
            loading="lazy"
            className={classes.logo}
            src={linkedin}
            alt="linkedIn"
          />
        </Grid>
      </Grid>
    </Card>
  );
}
