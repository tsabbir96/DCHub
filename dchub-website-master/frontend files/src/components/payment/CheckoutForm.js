import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import stripe_cards from "../../assets/payment/stripe_cards.webp";
import Header from "../commun/Header";
import ProgressDialog from "../commun/ProgressDialog";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
// import ApiService from "./api";
import {
  updateCustomeIdPatientAndStatus,
  updateCustomerIdAndComprehensiveEvalPatient,
  updateCustomerIdAndLimitedEvalPatient,
  updateCustomerIdAndStatusDoctor
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";
import { EDIT_GS_PROFILE_SUCCESS } from "../context/profile_data/types";
import {
  create_sub_doctor,
  create_sub_patient,
  order_gold_plan_patient,
  order_platinium_plan_patient
} from "./api";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  Container: {
    marginTop: theme.spacing(8),
  },
  card: { padding: theme.spacing(2) },
  title: {
    padding: theme.spacing(2),
  },
  btn: {
    margin: theme.spacing(2, 0),
  },
  stripe_cards: {
    height: "120px",
    objectFit: "contain",
    marginTop: theme.spacing(8),
  },
}));

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const stripe = useStripe();
  const [profileData, dispatch] = useProfileData();
  const { open } = useAlertSnackbarContext();
  const classes = useStyles();
  let history = useHistory();
  const location = useLocation();
   const elements = useElements();
  // Handle real-time validation errors from the CardElement.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    if (profileData.profile.user.account_type.toLowerCase() === "patient") {
      switch (location.state.product.title.toLowerCase()) {
        case "gold": {
          //###########################################
          //   SETUP GOLD PLAN PATIENT
          //###########################################

          setIsDisabled(true);
          event.preventDefault();
          const card = elements.getElement(CardElement);

          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: card,
          });
          let data = {};
          if (paymentMethod) {
            data = {
              email: profileData.profile.user.email,
              payment_method_id: paymentMethod.id,
            };
          } else {
            setIsDisabled(false);
          }
          order_gold_plan_patient(data).then((stripeRes) => {
            if (stripeRes.status === 200) {
              updateCustomerIdAndLimitedEvalPatient(
                profileData.profile.id,
                stripeRes.data.charges.data[0].customer,
                profileData.profile.limited_eval_slots + 1,
                true
              ).then((res02) => {
                if (res02.status === 200) {
 
                  open("success", "Subscription successful");
                  dispatch({
                    type: EDIT_GS_PROFILE_SUCCESS,
                    payload: res02.data,
                  });

                  history.push("/paymentSuccess");

                  setIsDisabled(false);
                } else {
                  open("error", "Your card was refused");
                  setIsDisabled(false);
                }
              });
            } else {
              open("error", "Your card was refused");
              setIsDisabled(false);
            }
          });
          break;
        }
        case "platinum": {
          //###########################################
          //   SETUP platinum PLAN PATIENT
          //###########################################
          setIsDisabled(true);
          event.preventDefault();
          const card = elements.getElement(CardElement);

          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: card,
          });
          let data = {};
          if (paymentMethod) {
            data = {
              email: profileData.profile.user.email,
              payment_method_id: paymentMethod.id,
            };
          } else {
            setIsDisabled(false);
          }
          order_platinium_plan_patient(data).then((stripeRes) => {
            if (stripeRes.status === 200) {
              updateCustomerIdAndComprehensiveEvalPatient(
                profileData.profile.id,
                stripeRes.data.charges.data[0].customer,
                profileData.profile.comprehensive_eval_slots + 1,
                true
              ).then((res02) => {
                if (res02.status === 200) {
 
                  open("success", "Subscription successful");
                  dispatch({
                    type: EDIT_GS_PROFILE_SUCCESS,
                    payload: res02.data,
                  });

                  history.push("/paymentSuccess");

                  setIsDisabled(false);
                } else {
                  open("error", "Your card was refused");
                  setIsDisabled(false);
                }
              });
            } else {
              open("error", "Your card was refused");
              setIsDisabled(false);
            }
          });

          break;
        }
        case "diamond": {
          //###########################################
          //   SETUP diamond PLAN PATIENT
          //###########################################
          setIsDisabled(true);
          event.preventDefault();
          const card = elements.getElement(CardElement);

          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: "card",
            card: card,
          });
          let data = {};
          if (paymentMethod) {
            data = {
              email: profileData.profile.user.email,
              payment_method_id: paymentMethod.id,
            };
          } else {
            setIsDisabled(false);
          }

          create_sub_patient(data).then((response) => {
            if (response.status === 200) {
              updateCustomeIdPatientAndStatus(
                profileData.profile.id,
                response.data.data.customer_id,
                true,
                true
              ).then((res02) => {
                if (res02.status === 200) {
                  open("success", "Subscription successful");
                  dispatch({
                    type: EDIT_GS_PROFILE_SUCCESS,
                    payload: res02.data,
                  });

                  history.push("/paymentSuccess");

                  setIsDisabled(false);
                } else {
                  open("error", "error updating profile");
                  setIsDisabled(false);
                }
              });
            } else {
              open("error", "Your card was refused");
              setIsDisabled(false);
            }
          });

          break;
        }

        default:
          break;
      }
    } else {
      //###########################################
      //   SETUP payment PLAN doctor
      //###########################################
      setIsDisabled(true);
      event.preventDefault();
      const card = elements.getElement(CardElement);

      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: card,
      });
      let data = {};
      if (paymentMethod) {
        data = {
          email: profileData.profile.user.email,
          payment_method_id: paymentMethod.id,
        };
      } else {
        setIsDisabled(false);
      }

      create_sub_doctor(data)
        .then((response) => {
          if (response.status === 200) {
            //todo if account type doctor
            updateCustomerIdAndStatusDoctor(
              profileData.profile.id,
              response.data.data.customer_id,
              true
            ).then((res02) => {
              if (res02.status === 200) {
                open("success", "Subscription successful");
                dispatch({
                  type: EDIT_GS_PROFILE_SUCCESS,
                  payload: res02.data,
                });

                history.push("/paymentSuccess");

                setIsDisabled(false);
              } else {
                open("error", "Your card was refused");
                setIsDisabled(false);
              }
            });
          } else {
            open("error", "Your card was refused");
            setIsDisabled(false);
          }
        })
        .catch((error) => {
          open("error", "error");
          setIsDisabled(false);
        });
    }
  };
  return (
    <div className={classes.root}>
      <Header />
      <Container className={classes.Container} maxWidth="md">
        <Card variant="outlined" className={classes.card}>
          <form onSubmit={handleSubmit} className="stripe-form">
            <div className="form-row"></div>
            <div className="form-row">
              <Typography color="textSecondary" className={classes.title}>
                <Box fontSize="28px" fontWeight="600">
                  Credit or debit card
                </Box>
              </Typography>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "26px",
                      color: "#aab7c4",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
                id="card-element"
                onChange={handleChange}
              />
              <div className="card-errors" role="alert">
                {error}
              </div>
            </div>
            <Button
              disabled={isDisabled}
              className={classes.btn}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit Payment
            </Button>
          </form>
        </Card>
        <Grid container direction="column">
          <Grid item container justify="center" alignItems="center">
            <Typography>Powered by</Typography>
            <img
              className={classes.stripe_cards}
              src={stripe_cards}
              alt="stripe_cards"
            />
          </Grid>
        </Grid>
      </Container>
      <ProgressDialog open={isDisabled} />
    </div>
  );
};
export default CheckoutForm;
