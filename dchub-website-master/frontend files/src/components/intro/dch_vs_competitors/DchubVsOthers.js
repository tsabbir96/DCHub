import { Box, Container, Divider, Grid,  makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ComparisonRow from "./ComparisonRow";
 import HeaderComparisonRow from "./HeaderComparisonRow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
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
}));

export default function DchubVsOthers() {
  const classes = useStyles();

  return (
    <div>
      <Grid xs={12} container>
        <Typography
          className={classes.title}
          variant={"h4"}
          // color = {'primary'}
        >
          <Box fontWeight={900} textAlign={"center"}>
            DCHub vs all competitors combined
          </Box>
        </Typography>
      </Grid>

      <Container>
      <HeaderComparisonRow/>
      <Divider/>
      <ComparisonRow feature='An AI supported xray analysis' us='Yes' them='Yes'/>
      <Divider/>
      <ComparisonRow feature='An AI supported image analysis' us='Yes' them='Yes'/>
      <Divider/>
      <ComparisonRow feature='Secure storage system' us='Yes' them='Yes'/>
      <Divider/>
      <ComparisonRow feature='X-ray evaluation report' us='Yes' them='Yes'/>
      <Divider/>
      <ComparisonRow feature='Support available 7 days/week' us='Yes' them='Yes'/>
      <Divider/>
      <ComparisonRow feature='AI free self service consultation' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Human verification of every analysis' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Custom Treatment Recommendation' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Treatment cost estimate' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Dentist Matching' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Geographic-specific dental community' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Analytics dashboard for doctors' us='Yes' them='No'/>
      <Divider/>
      <ComparisonRow feature='Most affordable price' us='Yes' them='No'/>
      <Divider/>

      </Container>
  


    </div>
  );
}
