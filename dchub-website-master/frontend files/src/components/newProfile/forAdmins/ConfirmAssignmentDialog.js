import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import {
  load_all_submissions,
  update_submission_verifier
} from "../../context/submission/SubmissionsActions";
import { useSubmissions } from "../../context/submission/SubmissionsContext";
const useStyles = makeStyles((theme) => ({
  description: {
    margin: theme.spacing(4, 2),
  },
}));
export default function ConfirmAssignmentDialog({
  submissionId,
  handleClose,
  openDialog,
  setLoading,
}) {
  const classes = useStyles();
  const { open } = useAlertSnackbarContext();

  const [submissions, dispatch] = useSubmissions();

  const [profileData] = useProfileData();
  const handleConfirm = () => {
    setLoading(true);
    update_submission_verifier(submissionId, profileData.profile.id).then(
      (res) => {
        if (res.status === 200) {
 
          open("success", "This patient is assigned to you");

          load_all_submissions(dispatch).then((res) => setLoading(false));

          // handleSetData()

          handleClose();
        } else {
          open("error", "response error");
          handleClose();
        }
      }
    );
  };
  if (profileData.profile.user.account_type.toLowerCase() === "patient") {
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
      >
        <DialogTitle id="simple-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <Typography className={classes.description}>
            <Box>
              You can't be assigned to a medical file with a patient's profile
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
    );
  } else {
    return (
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={openDialog}
      >
        <DialogTitle id="simple-dialog-title">Confirm</DialogTitle>
        <DialogContent>
          <Typography className={classes.description}>
            <Box>Are you sure you want to Assign this patient to you?</Box>
          </Typography>
        </DialogContent>

        <Divider />

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            No
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="outlined">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
