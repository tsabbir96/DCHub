import { Button, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DentalTourismDialog from "./DentalTourismDialog";
const useStyles = makeStyles((theme) => ({
  root: {
    // top: "120px",
    position: "relative",
    // margin: "8px",
    borderRadius: "10px",
    zIndex: 1,
    height: "460px",
    borderColor: "white",
    maxHeight: "460px",
    marginTop: "40px",
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(4),
    backdropFilter: "brightness(60%)",
    // backgroundImage: `url(${"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"})`,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  image: {
    filter: "brightness(60%)",
    left: 0,
    top: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  },
  hr: {
    borderTop: "5px solid white",
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    width: "60%",
  },
  title: {
    color: "white",
    fontWeight: 600,
    fontSize: "26px",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
  },
  paragraph: {
    margin: theme.spacing(4, 2),
    color: "white",
  },
  grid: {
    marginTop: theme.spacing(8),
  },
}));
export default function SideBarR02() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClose= ()=>{
    setOpenDialog(false)
  }
  return (
    <Card className={classes.root} variant="outlined">
      {/* <img
        alt="bg"
        className={classes.image}
        src={
          "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        }
      /> */}
      <img
        alt="bg"
        className={classes.image}
        src={
          "https://images.unsplash.com/photo-1504203328729-b937e8e102f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        }
      />
      <hr className={classes.hr} />
      <Typography className={classes.title}>Dental tourism is back</Typography>

      <Typography className={classes.paragraph}>
        Take advantage of the High-Quality Dental Treatment, while enjoying your
        vacation
      </Typography>

      <Grid container justify="center" className={classes.grid}>
        <Button variant="contained" onClick={()=>{setOpenDialog(true)}} color="primary">
          Know more
        </Button>
      </Grid>

      <DentalTourismDialog  open={openDialog}  handleClose={handleClose}  />
    </Card>
  );
}
