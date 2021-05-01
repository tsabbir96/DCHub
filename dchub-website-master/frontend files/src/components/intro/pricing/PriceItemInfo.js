import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import React from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 2),
    marginTop: theme.spacing(8),
    width: "100%",
    maxWidth: "400px",
  },
  header: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  dollar: {
    position: "absolute",
    fontSize: "60px",
    fontWeight: "600",
    transform: "translateX(340% )",
    color: theme.palette.background.paper,
    zIndex: "0",
  },
  price: {
    marginTop: theme.spacing(4),
    zIndex: "1",
  },
  check: {
    color: green["A700"],
  },
  close: {
    color: red["A700"],
  },
  list: {
    margin: theme.spacing(2, 0),
  },
}));

const listItems = (allowedFeatures, classes) => {
  const items = [];

  for (let entry of allowedFeatures) {
    items.push(
      <Grid container className={classes.list}>
        <Grid container item xs={1}>
          <ListItemIcon>
            <CheckCircleTwoToneIcon className={classes.check} />
          </ListItemIcon>
        </Grid>

        <Grid container item xs={11}>
          <ListItemText className={classes.listText} primary={entry} />
        </Grid>
      </Grid>
    );
  }
  return items;
};
const listNotAllowedItems = (notAllowed, classes) => {
  const items = [];

  for (let entry of notAllowed) {
    items.push(
      <Grid container className={classes.list}>
        <Grid container item xs={1}>
          <ListItemIcon>
            <HighlightOffTwoToneIcon className={classes.close} />
          </ListItemIcon>
        </Grid>

        <Grid container item xs={11}>
          <ListItemText className={classes.listText} primary={entry} />
        </Grid>
      </Grid>
    );
  }
  return items;
};
export default function PriceItemInfo({
  title,
  price,
  description,
  allowedFeatures,
  notAllowed,
  reccurence
}) {
  const classes = useStyles();
  let items = listItems(allowedFeatures, classes);
  let notAlloweditems = listNotAllowedItems(notAllowed, classes);
  let history = useHistory();

  const handleChoosePlan = () => {
    history.push("/login");
  };
  return (
    <Card className={classes.root} elevation="10" variant="elevation">
      <Grid
        container
        justify="center"
        className={classes.header}
        direction="column"
      >
        <Typography>
          <Box fontSize="24px" fontWeight="600" textAlign="center">
            {title}
          </Box>
        </Typography>
        <Typography className={classes.price}>
          <Box fontSize="40px" fontWeight="600" textAlign="center">
            {price > 0 ? price : "DENTAL  TOURISM"}
          </Box>
        </Typography>
        <Typography gutterBottom>
          <Box textAlign="center">{reccurence}</Box>
        </Typography>
        <Typography gutterBottom>
          <Box textAlign="center">{description}</Box>
        </Typography>
        <Typography className={classes.dollar}>$</Typography>
      </Grid>
      <CardContent>
        <List component="nav" aria-label="main mailbox folders">
          {items}
          {notAlloweditems}
        </List>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleChoosePlan}
          fullWidth
          color="primary"
          variant="outlined"
        >
          Select plan
        </Button>
      </CardActions>
    </Card>
  );
}
