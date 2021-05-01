import { makeStyles, Typography } from "@material-ui/core";
import { lightGreen } from "@material-ui/core/colors";
import React from "react";
import { useProfileData } from "../../context/profile_data/ProfileDataContext";
import { list_paymentIntents } from "../../payment/api";
import ActiveSubscription from "./ActiveSubscription";
import NoSubscription from "./NoSubscription";
import OrderReciept from "./OrderReciept";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    width: "80%",
    display: "flex",
    alignItems: "center",
  },
  subscribtionIcon: {
    width: "40px",
    height: "40px",
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    color: "white",
    backgroundColor: lightGreen[400],
    borderRadius: "50%",
  },
  title: {
    fontWeight: "700",
    marginTop: theme.spacing(8),
  },
}));
export default function PatientSubscriptionPage() {
  const classes = useStyles();
  const [profileData] = useProfileData();
  const [loading, setLoading] = React.useState(true);
  const [listOrders, setlistOrders] = React.useState([]);

  React.useEffect(() => {
    const data = {
      customer: profileData.profile.customer_id,
    };
    list_paymentIntents(data).then((res) => {
       

      if (res.status === 200) {
        res.data.data.map((item) => {
          listOrders.push(item);
        });
        setLoading(false);
      }
    });
  }, []);

  if (!profileData.profile.is_subscribed) {
    return (
      <div>
        <NoSubscription />

        <Typography className={classes.title} variant="h4">
        Last 5 orders
        </Typography>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          listOrders.map((item) => {
            return <OrderReciept item={item} />;
          })
        )}
      </div>
    );
  } else {
    return (
      <div>
        <ActiveSubscription />
        <Typography className={classes.title} variant="h4">
        Last 5 orders
        </Typography>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          listOrders.map((item) => {
            return <OrderReciept item={item} />;
          })
        )}
      </div>
    );
  }
}
