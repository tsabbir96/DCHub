import {
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import t38 from "../../../assets/teeth/t38.svg";
import featuresBg from "../../../assets/landing/featurecardbg.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "451px",
    width: "340px",
    backgroundColor: "#FAFBFF",

    margin: theme.spacing(8, 4),
    borderRadius: "16px",
  },
  rootSP: {
    height: "451px",
    width: "340px",
    borderRadius: "16px",

    backgroundColor: "#4360D6",

    margin: theme.spacing(8, 4),
  },
  logoCard: {
    width: "80%",
    height: "100px",
    marginTop: "25%",
  },
  logoCardSP: {
    width: "80%",
    height: "100px",
    marginTop: "25%",
    // backgroundColor: "#5BC199",
  },
  logo: {
    // width: "100%",
    height: "100%",
    objectFit:'cover',

  },
  title: {
    marginTop: theme.spacing(2),
  },
  titleSP: {
      color:'white', 
    marginTop: theme.spacing(2),
  },
  subtitle: {
    marginTop: theme.spacing(1),
  },
  subtitleSP: {
    color:'white', 

    marginTop: theme.spacing(1),
  },
  link: {
    marginTop: theme.spacing(6),
    color: "#2986FF",
  },
  linkSP: {
    marginTop: theme.spacing(6),
    color: "white",
  },
}));

export default function FeatureElement({ logo, isSpecial }) {
  const classes = useStyles();

  return (
    <Card variant='outlined' elevation="0" className={isSpecial ? classes.rootSP : classes.root}>
      <CardContent>
        <Grid container direction="column" alignItems="center" justify="center">
          <Card
            className={isSpecial ? classes.logoCardSP : classes.logoCard}
            elevation="10"
          >
            <img
             className={classes.logo}
              src={logo} 
              alt="logo" />
          </Card>

          <Typography variant="h6" className={isSpecial ?classes.titleSP:classes.title}>
            <Box fontWeight={800}>X-Ray Verify</Box>
          </Typography>
          <Typography  className={isSpecial ? classes.subtitleSP:classes.subtitle}>
            <Box fontWeight={500} textAlign="center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolot
            </Box>
          </Typography>

          <Link className={isSpecial ? classes.linkSP:classes.link}>
            <Typography>
              <Box fontWeight="500">KNOW MORE</Box>
            </Typography>
          </Link>
        </Grid>
      </CardContent>
    </Card>
  );
}
