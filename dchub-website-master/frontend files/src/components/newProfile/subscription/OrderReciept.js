import {
    Box,
    Card,
    Grid,
    Link,
    makeStyles,
    Typography
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // padding: theme.spacing(6, 6),
    margin: theme.spacing(6, 0),
  },
  icon: {
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: green[500],
  },
  content: {
    padding: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
  amount:{
    padding: theme.spacing(2, 0),

  }
}));
const getDate = (secs) => {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t.toString();
};
export default function OrderReciept({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <Grid container>
        <Grid container item xs={1}>
          <MonetizationOnTwoToneIcon className={classes.icon} />
        </Grid>
        <Grid
          container
          item
          xs={10}
          direction="column"
          className={classes.content}
        >
          <Typography>
            <Box fontSize="18px" fontWeight="700">
              {item.description}
            </Box>
          </Typography>
          <Typography className={classes.marginTop}>
            <Box fontSize="18px">Issue date: {getDate(item.created)}</Box>
          </Typography>
          <Typography>
            <Link target="_blank" href={item.charges.data[0].receipt_url}>
              
              Receipt link
            </Link>
          </Typography>
        </Grid>

        <Grid container item xs={1}>
          <Typography className={classes.amount}> <Box fontWeight='700' fontSize="18px">Amount</Box></Typography>
          <Typography>{item.amount / 100} USD</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
