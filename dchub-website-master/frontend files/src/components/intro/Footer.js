import {
  Box,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#EBEFFB",
    marginTop: theme.spacing(24),
    height: "50vh",
  },
  img: {
    maxHeight: "200px",
    width: "100%",
    objectFit: "cover",
    filter: "brightness(50%)",
    // position: "absolute",
  },
  
  columns: {
    marginTop: theme.spacing(4),
    background: "#EBEFFB",
  },

  icons: {
    margin: theme.spacing(2),
    height: "32px",
    width: "32px",
    color: "gray",
  },
  gridBottom: {
    backgroundColor: theme.palette.primary.main,
  },
  whiteText: {
    color: "white",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="banner"
        loading="lazy"
      />

   

      <Container className={classes.columns}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Typography color="primary" gutterBottom>
              <Box fontWeight="800" fontSize="24px">
                DentistConsultationHub
              </Box>
            </Typography>
            <Typography gutterBottom>
              <Box>
                All Copyrights Reserved. This site is a property and a
                registered trade mark of Nazeri & Company Co. Ltd.
              </Box>
            </Typography>
            <Typography>
              <Box>Las Vegas | Bangkok</Box>
            </Typography>

            <Grid container>
              <ButtonBase>
                <FacebookIcon className={classes.icons} />
              </ButtonBase>
              <ButtonBase>
                <InstagramIcon className={classes.icons} />
              </ButtonBase>
            </Grid>
          </Grid>

          <Grid xs={2} item direction="column">
            <Typography color="primary">
              <Box fontWeight="800">FOR DENTISTS</Box>
            </Typography>

            <Typography>
              <Box>Our solutions</Box>
            </Typography>

            <Typography>
              <Box>Peer Support</Box>
            </Typography>
            <Typography>
              <Box>Pricing</Box>
            </Typography>
          </Grid>

          <Grid xs={2} item direction="column">
            <Typography color="primary">
              <Box fontWeight="800">FOR PATIENTS</Box>
            </Typography>

            <Typography>
              <Box>Our solutions</Box>
            </Typography>

            <Typography>
              <Box>Peer Support</Box>
            </Typography>
            <Typography>
              <Box>Pricing</Box>
            </Typography>
          </Grid>

          <Grid xs={2} item direction="column">
            <Typography color="primary">
              <Box fontWeight="800">INFORMATION</Box>
            </Typography>

            <Typography>
              <Box>Our solutions</Box>
            </Typography>

            <Typography>
              <Box>Peer Support</Box>
            </Typography>
            <Typography>
              <Box>Pricing</Box>
            </Typography>
          </Grid>

          <Grid xs={2} item direction="column">
            <Typography color="primary">
              <Box fontWeight="800">ABOUT</Box>
            </Typography>

            <Typography>
              <Box>Testimonials</Box>
            </Typography>
            <Typography>
              <Box>Team</Box>
            </Typography>
            <Typography>
              <Box>Contact us</Box>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider />

  

      <Grid className={classes.gridBottom} direction="column" container>
        <Typography className={classes.whiteText}>
          <Box textAlign="center">@DentistConsultationHub 2021</Box>
        </Typography>
        <Typography className={classes.whiteText}>
          <Box fontSize="14px" textAlign="center">
            All Copyrights Reserved. This site is a property and a registered
            trade mark of Nazeri & Company Co. Ltd.
          </Box>
        </Typography>
      </Grid>
    </div>
  );
};
export default Footer;
