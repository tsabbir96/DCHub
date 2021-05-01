import { Box, Button, Hidden, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router";
import bg_shape from "../../../assets/landing/bg_shape.svg";
import img01 from "../../../assets/landing/screen01img01.webp";
import img02 from "../../../assets/landing/screen01img02.webp";

const useStyles = makeStyles((theme) => ({
  bgShape: {
    width: "60vw",
    height: "110vh",
    position: "absolute",
    top: "0",
    zIndex: "0",
  },
  bigImg01: {
    maxWidth: "420px",
    width: "420px",
    height: "550px",
    maxHeight: "550px",
    objectFit: "cover",
    borderRadius: "16px",
    zIndex: "10",
    // transform:'translate(-100px,100px)'
  },
  bigImg02: {
    position: "absolute",
    maxWidth: "420px",
    width: "420px",
    height: "550px",
    maxHeight: "550px",
    objectFit: "cover",
    borderRadius: "16px",
    zIndex: "5",
    transform: "translate(350px,-120px)",
  },
  leftSide: {
    zIndex: "1",
  },
  parentGrid: {
    paddingLeft: theme.spacing(20),
  },
  container: {
    paddingLeft: theme.spacing(10),
    marginTop: theme.spacing(20),
  },
  btn: {
    borderRadius: "0",
    textTransform: "none",
    fontSize: "16px",
    padding: theme.spacing(1, 4),
    marginRight: theme.spacing(4),
  },
  gridBtn: {
    margin: theme.spacing(4, 0),
  },
}));
const ScreenOne = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };



  return (
    <div>
      <div className={classes.bgShape}>
        <img
          wrapperClassName={classes.bgShape}
          src={bg_shape}
              loading='lazy'
              alt='bg'
          />
      </div>

      <Container className={classes.container} maxWidth={"xl"}>
        <Grid container>
          <Grid
            md={6}
            sm={12}
            direction="column"
            className={classes.leftSide}
            item
            container
          >
            <Typography>
              <Box fontWeight="500" fontSize="34px">
                We are here for you!
              </Box>
            </Typography>
            <Typography>
              <Box fontWeight="500" fontSize="54px">
                Get an Unbiased
              </Box>
            </Typography>
            <Typography>
              <Box fontWeight="500" fontSize="54px">
                Evaluation supported by
              </Box>
            </Typography>
            <Typography color="primary">
              <Box fontWeight="500" fontSize="54px">
                Artificial Intelligence
              </Box>
            </Typography>

            <Grid container className={classes.gridBtn}>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={handleLogin}
              >
                Consult for Free
              </Button>
              <Button
                className={classes.btn}
                variant="outlined"
                color="primary"
                onClick={handleLogin}

              >
                Join as a Patient
              </Button>
            </Grid>
          </Grid>
          <Grid md={6} sm={0} item container>
            <Hidden smDown>
              <img
                className={classes.bigImg01}
                src={img01}
                loading="lazy"
                effect="blur"
                alt="people"
              />
            </Hidden>

            <Hidden mdDown>
              <img
                className={classes.bigImg02}
                src={img02}
                loading="lazy"
                effect="blur"
                alt="people"
              />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default ScreenOne;
