import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import EmailTwoToneIcon from "@material-ui/icons/EmailTwoTone";
import PhoneTwoToneIcon from "@material-ui/icons/PhoneTwoTone";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import React from "react";
import ContactCard from "./ContactCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(16),
  },

  bgImg: {
    position: "absolute",

    maxHeight: "60%",
    objectFit: "cover",
    // width: "100%",
    filter: "grayscale(1) brightness(30%)",
    borderRadius: "16px",
  },
  card: {
    borderRadius: "16px",
  },
  title: {
    color: "white",
    // marginTop:'auto',
  },
  motoGrid: {
    zIndex: "20",
    padding: theme.spacing(6),
  },
  description: {
    marginTop: theme.spacing(4),
  },
  email: {
    marginTop: theme.spacing(8),
  },
  row: {
    marginTop: theme.spacing(4),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default function ContactUs02() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid direction="column" container xs={6}>
        <Typography color="primary">
          <Box fontWeight="800" fontSize="24px">
            GET IN TOUCH
          </Box>
        </Typography>
        <Typography className={classes.description}>
          <Box>
    
          Just send us your questions or concerns 
          </Box>
        </Typography>
        <Grid container item className={classes.email}>
          <EmailTwoToneIcon
          className={classes.icon}
          
          />
          <Typography>
            <Box>email</Box>
          </Typography>
        </Grid>
        <Grid container item className={classes.row}>
          <PhoneTwoToneIcon 
                    className={classes.icon}

/>
          <Typography>
            <Box>+66 90 514​ 5965</Box>
          </Typography>
        </Grid>

        <Grid container item className={classes.row}>
     
            <RoomTwoToneIcon
                      className={classes.icon}
                      />
           <Grid item xs={11}>
   
            <Typography>
              <Box>
                South Asia 30th Floor Bhiraj Tower 689-Sukhumvit Soi 35 Bangkok,
                Thailand 10110
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={6}>
  
        <ContactCard/>
      </Grid>
    </Container>
  );
}
