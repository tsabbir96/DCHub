import {
  ButtonBase,
  Card,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: { width: "100%", margin: theme.spacing(2, 0) },
  img: {
    padding: theme.spacing(2),
    width: "200px",
    height: "200px",
  },
  title: {
    fontWeight: "700",
    fontSize: "20px",
    margin: theme.spacing(2, 0),
    width: "100%",
    textAlign: "start",
  },
  desc: {
    textAlign: "justify",
    paddingRight: theme.spacing(4),
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
  link: {
    margin: theme.spacing(2, 0),
  },
}));
export default function ToolItemDialog(props) {
  const classes = useStyles();

  return (
    <Card variant={"outlined"} className={classes.root}>
      <ButtonBase
        onClick={props.link ? null : props.onClick}
        className={classes.ButtonBase}
      >
        <Card
          onClick={props.link ? props.onClick : null}
          elevation={0}
          className={
            props.type.toLowerCase() === "free"
              ? classes.cardlabelFree
              : classes.cardlabelPaid
          }
        >
          <Typography>{props.type}</Typography>
        </Card>
        <Grid container>
          <Grid item xs={4}>
            <img
              onClick={props.link ? props.onClick : null}
              className={classes.img}
              alt="item"
              loading="lazy"
              src={props.img}
            />
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="column"
            alignItems="flex-start"
          >
            <Typography
              onClick={props.link ? props.onClick : null}
              className={classes.title}
            >
              {props.title}
            </Typography>
            <Typography
              onClick={props.link ? props.onClick : null}
              className={classes.desc}
            >
              {props.desc}
            </Typography>
            {props.link && (
              <Link target="_blank" href={props.link}>
                <Typography className={classes.link}>See example</Typography>
              </Link>
            )}
          </Grid>
        </Grid>
      </ButtonBase>
    </Card>
  );
}
