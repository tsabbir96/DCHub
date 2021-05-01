import {
  CircularProgress,
  createStyles,
  Dialog,

  makeStyles
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      overflow: "hidden",
      backgroundColor:'transparent'
    },
    Progress:{

    }
  })
);

export default function ProgressDialog({ handleClose, open }) {
  const classes = useStyles();

  return (
    <Dialog

    
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
        <div className={classes.root}>
        <CircularProgress 
        className={classes.root}
         />

        </div>
    </Dialog>
  );
}
