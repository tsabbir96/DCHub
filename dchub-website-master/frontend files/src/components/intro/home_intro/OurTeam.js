import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import drallen from '../../../assets/landing/drallen.webp'
import drleo from '../../../assets/landing/drleo.webp'
import drbhawna from '../../../assets/landing/drbhawna.webp'
import me from '../../../assets/landing/me.webp'
import drlani from '../../../assets/landing/drlani.webp'
import MemberCard from "./MemberCard";
const useStyles = makeStyles((theme) => ({
  subTitle: {
    color: "lightgray",
    marginTop:theme.spacing(12)
  } 
}));
export default function OurTeam() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography className={classes.subTitle}>
          <Box textAlign="center" fontSize="18px">
            OUR TEAM
          </Box>
        </Typography>
      </Grid>
      <Grid item  xs={12}>
        <Typography
        
        color='primary'
        >
          <Box
          textAlign="center" 
          fontWeight='800'
          fontSize='32px'
          >Our Workaholic & Obsessed Team</Box>
        </Typography>
      </Grid>

      <Grid container justify="center">
        <MemberCard
        avatar={me }
          isVIP={false}
          name={"Dr. Farhat Maher"}
          education={"MD"}
          position={"CO-Founder"}
          role={"Full Stack Developer"}
        />
        <MemberCard
                avatar={ drbhawna}

          isVIP={false}
          name={"Dr. Bhawna  Nigam "}
          education={"Ph.D"}
          position={"Co-Founder & CTO"}
          role={"AI Technology"}
        />
        <MemberCard
          isVIP={false}
          avatar={ drleo}


          name={"Dr. Leonardo Aranguiz"}
          education={"DDS"}
          position={"CO-Founder"}
          role={"Head of Patient Services"}
        />
        <MemberCard
                avatar={ drallen}

          isVIP={true}
          name={"Dr. Allen Nazeri"}
          education={"DDS | MBA"}
          position={"Founder"}
          role={"CEO & Chief Clinical Officer"}
        />
        <MemberCard
                avatar={ drlani}

          isVIP={false}
          name={"Dr. Leilani Sanchez"}
          education={"DDS"}
          position={"Diagnostic Services"}
          role={"Head of Content"}
        />
      </Grid>
    </Grid>
  );
}
