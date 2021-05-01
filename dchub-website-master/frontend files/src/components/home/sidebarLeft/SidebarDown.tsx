import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router";
import diagno from "../../../assets/diagnobot/diagnologo.svg";
import consultation from "../../../assets/plans_choices/consultation.svg";
import full from "../../../assets/plans_choices/one_condition.svg";
const useStyles = makeStyles({
  root: {
    top: "104",
    position: "sticky",

    margin: "8px",
    borderRadius: "10px",

    marginTop: "24px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  horizentalStretch: {
    width: "100%",
  },
  img: {
    // background:'white',
    width: "40px",
    height: "40px",
  },
});

export default function SideabrDown() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/profile/Reports");
  };
  return (
    <Card className={classes.root} variant="outlined">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Available tools
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button onClick={handleRedirect}>
          <ListItemIcon>
            <img className={classes.img} src={diagno} alt="Diagnobot" />
          </ListItemIcon>
          <ListItemText primary="Diagnobot" />
        </ListItem>
        <Divider />
        <ListItem  onClick={handleRedirect} button>
          <ListItemIcon>
            <img className={classes.img} src={full} alt="Full" />
          </ListItemIcon>

          <ListItemText primary="Limited evaluation" />
        </ListItem>
        <Divider />
        <ListItem onClick={handleRedirect} button>
          <ListItemIcon>
            <img
              className={classes.img}
              src={consultation}
              alt="consultation"
            />
          </ListItemIcon>
          <ListItemText primary="Comprehensive evaluation & video consult" />
        </ListItem>
      </List>

      <CardActions>
        <Button
          onClick={handleRedirect}
          color={"primary"}
          className={classes.horizentalStretch}
        >
          SHOW ALL
        </Button>
      </CardActions>
    </Card>
  );
}
