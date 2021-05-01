import {
  Box,
  Card,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import drAllen from "../../../assets/landing/drAllen.webp";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: theme.spacing(16),
  },
  title: {
    // marginTop:theme.spacing(4),
    color: "white",
    width: "100%",
    height: "80px",
    padding: theme.spacing(2),
    margin: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.main,
  },
  doctorVid: {
    marginTop: theme.spacing(24),
  },
  btn: {
    margin: theme.spacing(4, 2),
  },
  img: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
}));

export default function FounderMessage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid xs={12} container>
        <Typography
          className={classes.title}
          variant={"h4"}
          // color = {'primary'}
        >
          <Box fontWeight={900} textAlign={"center"}>
            OUR IDEA YOUR COMPANY
          </Box>
        </Typography>
      </Grid>
      <Container>
        <Grid container>
          <Grid container xs={6}>
            <Card elevation={20}>
              <img className={classes.img} src={drAllen} alt="drAllen" />
            </Card>
          </Grid>

          <Grid container item xs={6}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              <Box>
                "Majority of patients delay seeing a dentist because the
                consultations are often inconsistent confusing, rushed and
                costly. We are disrupting the status quo through the power of
                AI"
              </Box>
            </Typography>
            <Typography className={classes.title} variant="h5">
              <Box fontWeight={600}>Dr. Allen Nazeri DDS MBA CEO/Founder</Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
