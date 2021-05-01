import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100px",
    width: "100%",
    margin: theme.spacing(2, 0),
    backgroundColor: "#F5F5F5",
    display: "flex",
  },
  img: {
    height: "100px",
    width: "100px",
    objectFit: "cover",
  },
}));
export default function PeopleChoiceItem() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src="https://images.unsplash.com/photo-1593022356269-609ed284b3c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
        alt="banner"
        loading="lazy"
      />
      <div>
        <Typography>category</Typography>
        <Typography>TITLE HERE</Typography>
      </div>
    </div>
  );
}
