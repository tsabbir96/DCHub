import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    List,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  
  const useStyles = makeStyles((theme) => ({
    description: {
      margin: theme.spacing(4, 2),
    },
  }));
  
  export default function BackDialogExamination({ value, setValue, handleClose, open }) {
    const classes = useStyles();
  
      const handllConfirm = ()=>
      {
          setValue(value-1)
      }
  
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <Typography className={classes.description}>
            <Box>Are you sure you want to reselect complaints?</Box>
          </Typography>
        </DialogContent>
  
        <Divider />
  
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            No
          </Button>
          <Button onClick={handllConfirm} color="primary" variant="outlined">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  