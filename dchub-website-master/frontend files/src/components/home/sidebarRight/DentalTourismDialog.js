import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  img: {
    width: "100%",
    //   position:'absolute',
    //   zIndex:-1
  },
  title: {
    fontSize: "40px",
    color: theme.palette.primary.main,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: "26px",
  },
}));
export default function DentalTourismDialog({ handleClose, open }) {
  const classes = useStyles();

  return (
    <Dialog
      scroll="paper"
      maxWidth="xl"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle> Dental tourism</DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Typography className={classes.title}>Why bangkok?</Typography>
          <Typography className={classes.description}>
            The cost of a full mouth jaw dental implant in Thailand can range
            from USD $20,000-$25,000, where the same treatment back in Australia
            or united states can be $50,000-$75,000. Are you interested?
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography className={classes.title}>
            Popular Treatments in Thailand
          </Typography>
          <Typography className={classes.description}>
            Patients travel to Thailand for variety of dental treatments. Some
            patients just want to have a basic dental check up and a dental
            cleaning in Bangkok, Phuket or Pattaya. Others contact
            DentistConsultationHub for more moderate to complex dental
            treatments that can save them thousands of dollars from seeing a
            dentist locally. Some of the most popular treatments and costs are
            listed below.
          </Typography>
          <br />
          <Typography className={classes.description}>
            Dental Cleaning From $20​
          </Typography>
          <Typography className={classes.description}>
            Dental Fillings From $25
          </Typography>
          <Typography className={classes.description}>
            Dental Crowns From $200
          </Typography>
          <Typography className={classes.description}>
            Dental Implants From $500
          </Typography>
          <Typography className={classes.description}>
            Dentures From $400
          </Typography>
          <Typography className={classes.description}>
            All On 4 From $9000
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Typography className={classes.title}>
            Finding a Dentist in Thailand
          </Typography>
          <Typography className={classes.description}>
            If you are considering to travel to Thailand to fix your teeth, you
            have certainly picked a right location. Thailand is one of the top
            dental tourism destinations. However, not all of the dentist or
            dental clinics in major cities such as Bangkok, Pattaya, Phuket,
            Chiang Mai and Chiang Rai are equally skilled.
            DentistConsultationHub is headquartered in Thailand and thus have
            screened dentists and dental clinics as well as individual
            practicing dentists in different specialties. Our internal team as
            well as our proprietary AI system is capable of evaluating dental
            conditions, offering various treatment options and finally match you
            to a qualified dentist in Thailand. ​ Some of the leading dental
            clinics in Thailand are Bangkok Smile MALO Dental, Bangkok
            International Dental Hospital, MOS Dental, Dental Joy and Ivory
            Dental Clinic. All of these clinics have good international
            reputation but not every dentist at these clinics have similar
            qualifications. This is why it is important for patients to contact
            our team as our team of dentists have extensive experience working
            and teaching dentistry in Thailand. Unlike dental agencies such as
            dental departure who have no clinical background and are merely
            referring patients to clinics and coordinating their appointments,
            our AI along with our internal dentist team is able to identify the
            most qualified dentist as well as perform a post-treatment
            evaluation upon request.
          </Typography>
          <br />
          <Typography className={classes.title}>
            Are you interested ?
          </Typography>
          <Grid container>
            <Typography className={classes.description}>
              Feel free to contact us at &nbsp;
            </Typography>
            <Typography className={classes.description}>
              <Box fontWeight="800">contact@dentistconsultationhub.com </Box>
            </Typography>
            <Typography className={classes.description}>
              &nbsp; for more informations
            </Typography>
          </Grid>
          <br /> <br /> <br /> <br /> <br />
          <img
            className={classes.img}
            src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1323&q=80"
            alt="bg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
