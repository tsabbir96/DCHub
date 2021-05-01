import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import { patchSubmissionDetailsField } from "../../../context/submission/SubmissionsActions";
import BackDialogDetails from "./BackDialogDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 4),
  },
  cardContent: {
    // width: '80%',
  },
  divider: {
    marginTop: theme.spacing(6),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  title: {
    fontWeight: "600",
    fontSize: "20px",
    margin: theme.spacing(4, 0),
  },
}));
export default function PatientDetails({ value, setValue }) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [profileData] = useProfileData();
  const [diagnostate, dispatch] = useDiagnoState();

  const [details, setDetails] = React.useState("");
  const handleBackClick = () => {
    setOpenDialog(true);
  };
  const handleClick = () => {
    patchSubmissionDetailsField(diagnostate.submissionId, details).then(
      (res) => {
        if (res.status === 200) {
          setValue(value + 1);
        } else {
        }
      }
    );
  };
  const handleClose = (value) => {
    setOpenDialog(false);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title}>
          Is there any thing else we missed you want to tell us ?
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          label="More details"
          onChange={(event) => {
            setDetails(event.target.value);
          }}
        />
      </CardContent>

      <Divider className={classes.divider} />

      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleBackClick}
          variant={"outlined"}
          color={"primary"}
        >
          Back
        </Button>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant={"contained"}
          color={"primary"}
        >
          Next
        </Button>
      </CardActions>

      <BackDialogDetails
        value={value}
        setValue={setValue}
        handleClose={handleClose}
        open={openDialog}
      />
    </Card>
  );
}
