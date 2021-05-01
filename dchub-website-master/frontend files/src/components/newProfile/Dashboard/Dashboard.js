import { Box, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MonetizationOnTwoToneIcon from "@material-ui/icons/MonetizationOnTwoTone";
import { green } from "@material-ui/core/colors";
import PeopleAltTwoToneIcon from "@material-ui/icons/PeopleAltTwoTone";
import EventNoteTwoToneIcon from "@material-ui/icons/EventNoteTwoTone";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      margin: theme.spacing(0, 1),
      maxHeight: "200px",
    },
    title: {
      margin: theme.spacing(1, 2),
    },
    number: {
      margin: theme.spacing(1, 2),
    },
    variation: {
      display: "flex",
      flexDirection: "row",
    },
    label: {
      backgroundColor: green["A700"],
      borderRadius: "6px",
      padding: theme.spacing(0, 1),
      margin: theme.spacing(1, 1),
      color: "white",
    },
    label02: {
      margin: theme.spacing(1, 0),
    },
    icon: {
      width: "100%",
      height: "100%",
      padding: theme.spacing(0, 2),
      color: theme.palette.primary.light,
    },
    chart: {
      margin: theme.spacing(4, 1),

      width: "100%",
    //   height: "500px",
      color: theme.palette.primary.light,
    },
  })
);
export default function Dashboard() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    series: [
      {
        name: "USD",
        data: [10, 41, 35, 110, 49, 62, 69, 91, 100],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Revenue",
        align: "left",
      },
      grid: {
        row: {
        //   colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
 
    },
  });
  return (
    <div>
      <Typography
        className={classes.title}
        variant={"h6"}
        color={"textSecondary"}
      >
        <Box fontWeight={600}>Here's what's happening</Box>
      </Typography>
      <Grid container>
        <Grid item xs={4}>
          <Card className={classes.card} variant={"outlined"}>
            <Grid container>
              <Grid container xs={9} direction={"column"}>
                <Typography className={classes.title} color={"textSecondary"}>
                  <Box>Today's money</Box>
                </Typography>

                <Typography variant={"h5"} className={classes.number}>
                  <Box fontWeight={600}>$0</Box>
                </Typography>

                <Typography
                  variant={"subtitle2"}
                  color={"textSecondary"}
                  className={classes.variation}
                >
                  <Box className={classes.label}>+0% </Box>
                  <Box className={classes.label02}> Since last week</Box>
                </Typography>
              </Grid>

              <Grid container item xs={3}>
                <MonetizationOnTwoToneIcon className={classes.icon} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card} variant={"outlined"}>
            <Grid container>
              <Grid container xs={9} direction={"column"}>
                <Typography className={classes.title} color={"textSecondary"}>
                  <Box>You appeared</Box>
                </Typography>

                <Typography variant={"h5"} className={classes.number}>
                  <Box fontWeight={600}>0 times </Box>
                </Typography>

                <Typography
                  variant={"subtitle2"}
                  color={"textSecondary"}
                  className={classes.variation}
                >
                  <Box className={classes.label}>+0% </Box>
                  <Box className={classes.label02}> Since last week</Box>
                </Typography>
              </Grid>

              <Grid container item xs={3}>
                <PeopleAltTwoToneIcon className={classes.icon} />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card} variant={"outlined"}>
            <Grid container>
              <Grid container xs={9} direction={"column"}>
                <Typography className={classes.title} color={"textSecondary"}>
                  <Box>Pending appointments</Box>
                </Typography>

                <Typography variant={"h5"} className={classes.number}>
                  <Box fontWeight={600}>0 appointments </Box>
                </Typography>

                <Typography
                  variant={"subtitle2"}
                  color={"textSecondary"}
                  className={classes.variation}
                >
                  <Box className={classes.label}>+0% </Box>
                  <Box className={classes.label02}> Since last week</Box>
                </Typography>
              </Grid>

              <Grid container item xs={3}>
                <EventNoteTwoToneIcon className={classes.icon} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <Grid container>
        <Card className={classes.chart} variant={"outlined"}>
        <ReactApexChart options={state.options} series={state.series} type="line" height={500} />





        </Card>
      </Grid>
    </div>
  );
}
