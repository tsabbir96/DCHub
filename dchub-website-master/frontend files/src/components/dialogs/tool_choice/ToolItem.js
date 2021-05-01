import { Box, ButtonBase, Card, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    width: "160px",
    height: "160px",
  },
  ButtonBase: {
    width: "100%",
    height: "100%",
  },

  title: {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  img: {
    // background:'white',
    padding: theme.spacing(2, 2),
    paddingBottom: theme.spacing(3),
    width: "100%",
  },
  cardlabelFree: {
    backgroundColor: green["500"],
    color: theme.palette.background.paper,
    display: "inline-block",
    position: "absolute",
    padding: theme.spacing(0, 1),
    top: 0,
    left: 0,
    borderRadius: "0",
  },
  cardlabelPaid: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.background.paper,
    display: "inline-block",
    position: "absolute",
    padding: theme.spacing(0, 1),
    top: 0,
    left: 0,
    borderRadius: "0",
  },
}));
export default function ToolItem(props) {
  const classes = useStyles();
  return (
    <Card variant={"outlined"} onClick={props.onClick} className={classes.root}>
      <ButtonBase className={classes.ButtonBase}>
        <div>
          <Card
            elevation={0}
            className={
              props.type.toLowerCase() === "free"
                ? classes.cardlabelFree
                : classes.cardlabelPaid
            }
          >
            <Typography>{props.type}</Typography>
          </Card>

          {props.img}
          <Typography className={classes.title}>
            <Box textAlign={"center"}>{props.title}</Box>
          </Typography>
        </div>
      </ButtonBase>
    </Card>
  );
}
