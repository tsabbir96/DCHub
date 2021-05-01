import { Link } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import logo from "../../../assets/dch_logo.svg";
import {
  makeInvoice,
  retrieveSub
} from "../../context/profile_data/ProfileDataActions";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    padding: theme.spacing(6, 6),
  },
  img: {
    width: "60px",
    // marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: "60px",
  },
  marginTop: {
    marginTop: theme.spacing(6),
  },
  marginLeft: {
    marginLeft: "auto",
  },
  subscribed: {
    color: green[500],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
const getDate = (secs) => {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t.toString();
};
export default function OutlinedCard() {
  const classes = useStyles();
  const [profileData] = useProfileData();
  const [loading, setLoading] = React.useState(true);
  const [link, setLink] = React.useState();
  const [invoiceInfo, setInvoiceInfo] = React.useState({
    current_period_start: "",
    current_period_end: "",
    created: "",
  });
  React.useEffect(() => {
    if (profileData.profile.customer_id !== "") {
      retrieveSub(profileData.profile.customer_id).then((res) => {
        if (res.status === 200) {
          setInvoiceInfo({
            current_period_start:
              res.data.data[res.data.data.length - 1].current_period_start,
            current_period_end:
              res.data.data[res.data.data.length - 1].current_period_end,
            created: res.data.data[res.data.data.length - 1].created,
          });

          makeInvoice(
            res.data.data[res.data.data.length - 1].latest_invoice
          ).then((res02) => {
            if (res02.status === 200) {
              setLink(res02.data.hosted_invoice_url);
              setLoading(false);
            }
          });
        }
      });
    }
  }, []);

  if (loading) {
    return <h4>Loading...</h4>;
  } else
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Grid container>
            <Grid container xs={6} direction={"column"}>
              <img className={classes.img} src={logo} alt="logo" />
              <Typography>
                <Box>dentistconsultationhub</Box>
              </Typography>
            </Grid>
            <Grid container xs={6} direction={"column"}>
              <Typography variant={"h4"} className={classes.subscribed}>
                <Box textAlign={"right"} fontWeight={900}>
                  Subscribed
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.marginTop}>
            <Grid container xs={4} direction={"column"}>
              <Typography>
                <Box>7582 Las Vegas Blvd. South Las Vegas, Nevada 89123</Box>
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
          <Grid container className={classes.marginTop}>
            <Grid container xs={4} direction={"column"}>
              <Typography>
                <Box fontWeight={700}>Due date</Box>
                <Box>{getDate(invoiceInfo.current_period_start)}</Box>
              </Typography>
            </Grid>
            <Grid container xs={4} direction={"column"}>
              <Typography>
                <Box textAlign={"center"} fontWeight={700}>
                  Issue date
                </Box>
                <Box textAlign={"center"}> {getDate(invoiceInfo.created)}</Box>
              </Typography>
            </Grid>
            <Grid container xs={4} direction={"column"}>
              <Typography>
                <Box textAlign={"right"} fontWeight={700}>
                  Expiration date
                </Box>
                <Box textAlign={"right"}>
                  {getDate(invoiceInfo.current_period_end)}
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.marginTop}>
            <Grid container direction={"column"}>
              <Typography>
                <Box fontWeight={700}>Billed to</Box>
                <Box>{profileData.profile.user.email}</Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="column" className={classes.marginTop}>
            <Typography>
              <Box fontWeight={700}>Detailed invoice</Box>
            </Typography>
            <Link rel="noopener noreferrer" href={link} target="_blank">
              Invoice
            </Link>
          </Grid>
        </CardContent>
      </Card>
    );
}
