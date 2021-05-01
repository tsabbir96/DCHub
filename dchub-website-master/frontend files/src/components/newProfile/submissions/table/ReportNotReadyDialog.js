import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    description: {
        margin: theme.spacing(4, 2),
      },
    
  }));
  
export default function ReportNotReadyDialog({handleClose,openDialog }) {
    const classes = useStyles();

    return (
        <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
      >
        <DialogTitle id="simple-dialog-title">Pending</DialogTitle>
        <DialogContent>
          <Typography className={classes.description}>
            <Box>
                Your report is not ready yet, it will be available as soon as our internal dentists verify it.
            </Box>
          </Typography>
        </DialogContent>

        <Divider />

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}
