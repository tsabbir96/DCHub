import {
    Box,
    Card,
    CardContent,
    CardHeader,
    makeStyles,
    Typography
} from "@material-ui/core";
import React from "react";

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

export default function MouthConclusionCardReadOnly({ summary }) {
  const classes = useStyles();

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
        <Typography>
          <Box>{summary}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}
