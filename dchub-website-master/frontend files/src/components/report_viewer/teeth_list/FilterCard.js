import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { ACTIONS } from "./TeethList";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4),
  },
  toothimg: {
    maxHeight: "150px",
  },
  toothDiv: {
    display: "flex",
    border: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: "1px",
    borderRadius: "6px",
  },
  toothIcon: {
    alignSelf: "center",
    height: "80px",
    width: "30px",
    fill: "red",
  },
  btn: {
    justifyContent: "start",
  },
}));
export default function FilterCard({ filters, setfilters }) {
  

  const classes = useStyles();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "checkedURQ":
        return setfilters({
          type: ACTIONS.SET_FILTER,
          filterName: "urq",
          filterValue: event.target.checked,
        });
      case "checkedULQ":
        return setfilters({
          type: ACTIONS.SET_FILTER,
          filterName: "ulq",
          filterValue: event.target.checked,
        });
      case "checkedLLQ":
        return setfilters({
          type: ACTIONS.SET_FILTER,
          filterName: "llq",
          filterValue: event.target.checked,
        });
      case "checkedLRQ":
        return setfilters({
          type: ACTIONS.SET_FILTER,
          filterName: "lrq",
          filterValue: event.target.checked,
        });
 

      default:
        return;
    }
  };
  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant={"h5"}>
          <Box fontWeight={700}>Filter</Box>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid container xs={12} direction={"column"}>
            <Typography>
              <Box>Region</Box>
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  defaultChecked
                  name="checkedURQ"
                />
              }
              label="UPPER RIGHT QUADRANT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  defaultChecked
                  name="checkedULQ"
                />
              }
              label="UPPER LEFT QUADRANT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  defaultChecked
                  name="checkedLLQ"
                />
              }
              label="LOWER LEFT QUADRANT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  onChange={handleChange}
                  name="checkedLRQ"
                />
              }
              label="LOWER RIGHT QUADRANT"
            />
          </Grid>
 
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
