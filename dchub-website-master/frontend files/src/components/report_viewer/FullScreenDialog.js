import { Dialog } from "@material-ui/core";
import React from "react";

export default function FullScreenDialog({ open, setOpen, src }) {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog onClose={handleClose} fullWidth maxWidth="xl" open={open}>
        <img style={{ objectFit: "contain" }} src={src} alt="resource" />
      </Dialog>
    </div>
  );
}
