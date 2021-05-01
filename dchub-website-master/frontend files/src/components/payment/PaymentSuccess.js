import { Button, Card, Container, makeStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import thankyou from "../../assets/payment/thank_you_page.svg";
import Header from "../commun/Header";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  mainCard: {
    marginTop: theme.spacing(8),
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "60%",
  },
}));

export default function PaymentSuccess() {
  const classes = useStyles();
  let history = useHistory();

  const handleClick=()=>{
    history.push("/profile/Reports");

  }
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Card variant="outlined" className={classes.mainCard}>
          <img className={classes.img} src={thankyou} alt="thank_you" />
        </Card>
        <Button onClick={handleClick} fullWidth variant="contained" color="primary">
          <h3>Go to profile</h3> 
        </Button>
      </Container>
    </div>
  );
}
