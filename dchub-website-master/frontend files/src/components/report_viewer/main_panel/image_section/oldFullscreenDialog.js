import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "100%",
    },
  })
);
const deleteme = ({ handleClose, open, xrayimg }) => {
  return (
    <Dialog
      fullWidth
      maxWidth={"xl"}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Card variant={"outlined"}>
        <img src={xrayimg} alt={"xrayimg"} />
      </Card>
    </Dialog>
  );
};
export default deleteme;
