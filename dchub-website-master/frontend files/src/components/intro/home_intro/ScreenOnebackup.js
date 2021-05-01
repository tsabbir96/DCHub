import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Card, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Particles from "react-particles-js";
import triangle from "../../../assets/landing/triangle.svg";
import circle from "../../../assets/landing/circle.svg";
import rect from "../../../assets/landing/rect.svg";
import hero from "../../../assets/landing/hero.jpg";
import bg_shape from "../../../assets/landing/bg_shape.svg";

// noinspection Annotator
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width:'110vw',
    display: "flex",
    background: theme.palette.background.paper,
  },
  fullHeight: {
    height: "60%",
    // backgroundColor:'red'
  },
  illustration: {
    position: "absolute",
    zIndex: "0",
    width: "100%",
    height: "100vh",
    filter: " brightness(70%)",

    // filter: "opacity(50%)",

    objectFit: "cover",
    objectPosition: "0 0 ",
  },
  illustration02: {
    position: "absolute",
    zIndex: "0",
    width: "100%",
    height: "100vh",
    //  filter:' brightness(50%)',

    // filter: "opacity(50%)",

    objectFit: "cover",
    objectPosition: "0 0 ",
  },
  moto: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
    marginTop: theme.spacing(10),

    color: "white",
    width: "400px",
    transform: "skewX(-12deg) ",
  },

  container: {
    zIndex: 10,
  },
  particles: {
    position: "absolute",
    zIndex: 0,
    width: "100vw",
    height: "100vh",
  },
  paragraph: {
    marginTop: theme.spacing(6),
  },
  cat: {
    marginTop: theme.spacing(4),
  },
  emailField: {
    padding: theme.spacing(0, 2),
  },

  bgShape: {
    position:'absolute',
    // heigt: "110vh",
    width: "80vw",
  },
}));
const ScreenOne = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bgShape}>
{/* 
        <LazyLoadImage
          // wrapperClassName={classes.bgShape}
          src={bg_shape}
          effect="blur"
        /> */}

        <img 
        src={bg_shape}
        alt='blob'/>
      </div>










      {/* <Particles
        className={classes.particles}
        params={{
          particles: {
            number: {
              value: 8,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              out_mode: "out",
            },
            shape: {
              type: ["image", "circle"],
              image: [
                {
                  src: triangle,
                  height: 20,
                  width: 23,
                },
                {
                  src: rect,
                  height: 20,
                  width: 20,
                },
                {
                  src: circle,
                  height: 20,
                  width: 20,
                },
              ],
            },
            color: {
              value: "#CCC",
            },
            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
          },
          retina_detect: false,
        }}
      /> */}
      {/* <Container className={classes.container}>
        <Grid container className={classes.fullHeight}>
          <Grid
            // className = {classes.fullHeight}
            item
            direction={"column"}
            container
            xs={6}
            // alignItems = {'center'}
            justify={"center"}
          >
            <Typography variant="h3" className={classes.moto}>
              <Box fontWeight="800" className={classes.box}>
                With Knowledge,{" "}
              </Box>
            </Typography>
            <Typography variant="h3" color="primary">
              <Box fontWeight="800">
                changing traditional dental consultation
              </Box>
            </Typography>

            <Typography
              variant="h5"
              color="textSecondary"
              className={classes.paragraph}
            >
              <Box fontWeight="600">
                We offer tele-dental evaluations using AI technology by removing
                traditional barriers that prevent patients to seek a dental
                consultation while increasing their trust in their providers.
              </Box>
            </Typography>

            <Button
              variant={"contained"}
              color={"primary"}
              className={classes.cat}
            >
              <Typography variant="h5">
                <Box fontWeight="800">Get Started For Free</Box>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
      */}






    </div> 
  );
};
export default ScreenOne;
