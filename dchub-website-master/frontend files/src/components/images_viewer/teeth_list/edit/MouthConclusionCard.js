import { Box, Card, CardContent, CardHeader, makeStyles, TextField, Typography } from '@material-ui/core';
import React from 'react';
import ACTIONS from '../MouthTeethList';
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
export default function MouthConclusionCard({ summary, dispatch }) {
    
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
    )
}
