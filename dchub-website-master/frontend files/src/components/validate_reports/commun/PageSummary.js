import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "284mm",
    height: "284mm",
  },
  summaryGrid: { backgroundColor: "#FaFaFa", height: "100%" },
  containerGrid: { height: "100%" },
  summaryTitle: {
    writingMode: "vertical-rl",
    transform: "rotate(-180deg)",
    fontWeight: 800,
    fontSize: "80px",
    wordSpacing: "30px",
    textAlign: "center",
    color: "#DDDDDF",
  },
  typediv: {
    width: "100%",
  },
  item: {
    display: "flex",
  },
  type: {
    fontSize: "48px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "6cm",
  },
  itemGrids: {
    marginBottom: "2cm",
    marginLeft: "2cm",
  },
}));
export default function PageSummary({ type, anamensisPages }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.containerGrid} container>
        <Grid className={classes.summaryGrid} item container xs={2}>
          <Typography className={classes.summaryTitle}>Report index</Typography>
        </Grid>
        <Grid
          item
          container
          xs={8}
          className={classes.itemGrids}
          alignContent="flex-end"
        >
          <div className={classes.typediv}>
            <Typography className={classes.type}>
              {type === "DIAGNOBOT" ? "Limited" : "Comprehensive"} evaluation
            </Typography>
          </div>

          <div className={classes.item}>
            <Typography>I. General informations</Typography>
            <Typography>
              ...............................................................................
            </Typography>
            <Typography>Page 3</Typography>
          </div>
          <div className={classes.item}>
            <Typography>II. Anamnesis</Typography>
            <Typography>
              ......................................................................................................
            </Typography>
            <Typography>Page 4</Typography>
          </div>
          {type === "DIAGNOBOT" ? null : (
            <>
              <div className={classes.item}>
                <Typography>III. Frontal Closed & Retracted</Typography>
                <Typography>
                  ................................................................
                </Typography>
                <Typography>Page {4 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>IV. Left Side View</Typography>
                <Typography>
                  ...............................................................................................
                </Typography>
                <Typography>Page {5 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>V. Right Side View</Typography>
                <Typography>
                  ............................................................................................
                </Typography>
                <Typography>Page {6 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>VI. Upper Jaw closed</Typography>
                <Typography>
                  .....................................................................................
                </Typography>
                <Typography>Page {7 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>VII. Lower Jaw</Typography>
                <Typography>
                  ......................................................................................................
                </Typography>
                <Typography>Page {8 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>VIII. Upper Jaw</Typography>
                <Typography>
                  ....................................................................................................
                </Typography>
                <Typography>Page {9 + anamensisPages}</Typography>
              </div>

              <div className={classes.item}>
                <Typography>IX. X-ray</Typography>
                <Typography>
                  ...................................................................................................................
                </Typography>
                <Typography>Page {10 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>X. Findings (UPPER RIGHT QUADRANT)</Typography>
                <Typography>
                  ................................................
                </Typography>
                <Typography>Page {11 + anamensisPages}</Typography>
              </div>

              <div className={classes.item}>
                <Typography>XI. Findings (UPPER LEFT QUADRANT)</Typography>
                <Typography>
                  ...................................................
                </Typography>
                <Typography>Page {12 + anamensisPages}</Typography>
              </div>

              <div className={classes.item}>
                <Typography>XII. Findings (LOWER LEFT QUADRANT )</Typography>
                <Typography>
                  ...............................................
                </Typography>
                <Typography>Page {13 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>XIII. Findings (LOWER RIGHT QUADRANT )</Typography>
                <Typography>
                  ..........................................
                </Typography>
                <Typography>Page {14 + anamensisPages}</Typography>
              </div>
              <div className={classes.item}>
                <Typography>XIV. Recommendations</Typography>
                <Typography>
                  ................................................................................
                </Typography>
                <Typography>Page {15 + anamensisPages}</Typography>
              </div>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
