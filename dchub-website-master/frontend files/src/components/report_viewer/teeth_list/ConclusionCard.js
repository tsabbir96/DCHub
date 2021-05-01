import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Chip from "@material-ui/core/Chip";
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
  text: {
    margin: theme.spacing(2, 0),
  },
}));

export default function ConclusionCard({ summary, dispatch }) {
  const classes = useStyles();
  const handleChange = (e) => {
    dispatch({ type: ACTIONS.SET_SUMMARY, summary: e.target.value });
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <Typography>
            <Box fontWeight={700}>Remarks and summary</Box>
          </Typography>
        }
      />
      <CardContent>
        <TextField
          rows={4}
          fullWidth
          multiline
          defaultValue={summary}
          onChange={handleChange}
          id="outlined-basic"
          label=""
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
}
