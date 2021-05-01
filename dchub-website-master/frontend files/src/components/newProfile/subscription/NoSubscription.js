import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import dch_logo from "../../../assets/dch_logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    padding: theme.spacing(6, 6),
  },
  img: {
    width: "60px",
    height: "60px",
  },
  marginTop: {
    marginTop: theme.spacing(6),
  },
  marginLeft: {
    marginLeft: "auto",
  },
  notsubscribed: {
    color: red[500],
    marginTop: theme.spacing(2),
  },
}));
export default function NoSubscription() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
          <Grid container xs={6} direction={"column"}>
            <img className={classes.img} src={dch_logo} alt="logo" />
            <Typography>
              <Box>www.dentistconsultationhub.com</Box>
            </Typography>
          </Grid>
          <Grid container xs={6} direction={"column"}>
            <Typography variant={"h4"} className={classes.notsubscribed}>
              <Box textAlign={"right"} fontWeight={900}>
                Not subscribed
              </Box>
            </Typography>
            {/* <Typography className={classes.invoiceId}>
              <Box textAlign={"right"}>Invoice: #q54acb5az7c68aab5747l23</Box>
            </Typography> */}
          </Grid>
        </Grid>
        <Grid container className={classes.marginTop}>
          <Grid container xs={4} direction={"column"}>
            <Typography>
              <Box>
              7582 Las Vegas Blvd. South Las Vegas, Nevada 89123


              </Box>
            </Typography>
          </Grid>
          <Grid container xs={4} direction={"column"}>
            <Typography>
              <Box textAlign={"center"}>
              A venture of Nazeri & Company Co., Ltd.


              </Box>
            </Typography>
          </Grid>
          <Grid container xs={4} direction={"column"}>
            <Typography>
              <Box textAlign={"right"}>
              Email: contact@dentistconsultationhub.com <br />
                Tel: + 66 90 514 5965


              </Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
