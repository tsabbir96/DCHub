import { ThemeProvider } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import { createBrowserHistory } from 'history';
import React from "react";
import ReactGa from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NewActivate from "./components/account_management/NewActivate";
import NewLogin from "./components/account_management/NewLogin";
import ResetPassword from "./components/account_management/NewResetPassword";
import ResetPasswordConfirm from "./components/account_management/NewResetPasswordConfirm";
import NewSignup from "./components/account_management/NewSignup";
import AlertSnackbar from "./components/commun/AlertSnackbar";
import { PrivateRoute } from "./components/commun/PrivateRoute";
import ConsultationDetails from "./components/consultation_details/ConsultationDetails";
import DiagnobotProvider from "./components/context/diagnobot/DiagnobotContext";
import { lightTheme } from "./components/context/MyThemeContext";
import {
  checkAuthenticated,
  load_doctor_profile,
  load_profile,
  load_user
} from "./components/context/profile_data/ProfileDataActions";
import { useProfileData } from "./components/context/profile_data/ProfileDataContext";
import Diagnobot from "./components/diagnobot/Diagnobot";
import UploadXray from "./components/diagnobot/uploadMissingXray/UploadXray";
import DiagnoView from "./components/diagno_view/DiagnoView";
import ImageReportViewer from "./components/images_viewer/ImageReportViewer";
import Faq from "./components/intro/Faq";
import Features from "./components/intro/features/Features";
import Intro from "./components/intro/Intro";
import Pricing from "./components/intro/pricing/Pricing";
import NewProfile from "./components/newProfile/NewProfile";
import CheckoutForm from "./components/payment/CheckoutForm";
import ChoosePlan from "./components/payment/ChoosePlan";
import ManagePlan from "./components/payment/ManagePlan";
import PaymentLayout from "./components/payment/PaymentLayout";
import PaymentSuccess from "./components/payment/PaymentSuccess";
import ReportViewer from "./components/report_viewer/ReportViewer";
import PdfReport from "./components/validate_reports/PdfReport";

const App = () => {
  const [state, dispatch] = useProfileData();
  const stripePromise = loadStripe(
    "pk_live_51I5j41Jq0joAKXioVpLucp8OBd4ICWVTOZvIaxJt86XmRynSwWrbVczo0nPaH5WwGkkPNxPCtF9gxrhFK5JjQnri00UjuQ3CH7"
  );
  const [loading, setLoading] = React.useState(true);

  // let location = useLocation();
  const history = createBrowserHistory();

  React.useEffect(() => {
    ReactGa.initialize("UA-191689601-1");
    ReactGa.pageview(window.location.pathname);
    // const values =  queryString.parse(location.search)
    // const state  = values.state ? values.state:null
    // const code = values.code ? values.code: null

    //   if(state && code ){
    //     googleAuthenticate(state , code)
    //   }
    //   else{
    checkAuthenticated(dispatch).then((data) => {
      if (data.status === 200) {
        load_user(dispatch).then((data) => {
          if (data.status === 200) {
            if (data.data[0].account_type.toLowerCase() === "patient") {
              load_profile(data.data[0].id, dispatch).then(() =>
                setLoading(false)
              );
            } else {
              load_doctor_profile(data.data[0].id, dispatch).then(() =>
                setLoading(false)
              );
            }
          } else {
            //todo ERRROR
          }
        });
      } else {
        setLoading(false);
      }
    });
    // }
  }, []);
  return loading ? (
    <h1>LODAING...</h1>
  ) : (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ThemeProvider theme={lightTheme}>
          <Intro />
          </ThemeProvider>
         </Route>

        <PrivateRoute path="/home" exact>
        <Home />

        </PrivateRoute>
        {/* <Route path="/intro" exact component={Intro} /> */}
        <PrivateRoute path="/profile">
        <NewProfile />
        </PrivateRoute>
        <Route path="/payment" exact>
        <PaymentLayout />
        </Route>

        <PrivateRoute path="/xrayview" exact>
        <ReportViewer />
        </PrivateRoute>

        <PrivateRoute path="/choosePlan" exact>
        <ChoosePlan />
        </PrivateRoute>
        <PrivateRoute path="/managePlan" exact>
        <ManagePlan />
        </PrivateRoute>
        <PrivateRoute path="/mouthview" exact>
        <ImageReportViewer />

        </PrivateRoute>

        <PrivateRoute path="/diagnoview" exact>
        <DiagnoView />

        </PrivateRoute>
        <Route path="/login" exact  >
        <ThemeProvider theme={lightTheme}>
              <NewLogin />
            </ThemeProvider>
        </Route>

        <Route path="/signup" exact>
        <ThemeProvider theme={lightTheme}>
              <NewSignup />
            </ThemeProvider>
        </Route>
        <Route path="/reset-password" exact  >
        <ThemeProvider theme={lightTheme}>
              <ResetPassword />
            </ThemeProvider>
        </Route>
        <Route
          path="/password/reset/confirm/:uid/:token"
          exact
          component={ResetPasswordConfirm}
        />
        <Route path="/activate/:uid/:token" exact>
          <ThemeProvider theme={lightTheme}>
            <NewActivate />
          </ThemeProvider>
        </Route>

        {/* <Route path="/privacy" exact component={Privacy} />
        <Route path="/terms" exact component={Terms} /> */}

        <PrivateRoute path="/uploadXray" exact>
        <UploadXray />
        </PrivateRoute>

        <PrivateRoute path="/diagnobot" exact>
        <DiagnobotProvider>
              <Diagnobot />
            </DiagnobotProvider>
        </PrivateRoute>

        <PrivateRoute path="/pdfreport" exact>
        <ThemeProvider theme={lightTheme}>
              <PdfReport />
            </ThemeProvider>
        </PrivateRoute>
        <PrivateRoute path="/paymentSuccess" exact>
        <PaymentSuccess />

        </PrivateRoute>

        <PrivateRoute path="/consultationDetails" exact>
        <ConsultationDetails />

        </PrivateRoute>
        <PrivateRoute path="/checkout" exact>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </PrivateRoute>

        <Route path="/pricingInfo" exact>
        <ThemeProvider theme={lightTheme}>
              <Pricing />
            </ThemeProvider>
        </Route>

        <Route path="/productsInfo" exact>
        <ThemeProvider theme={lightTheme}>
              <Features />
            </ThemeProvider>
        </Route>

        <Route path="/FAQ" exact>
        <ThemeProvider theme={lightTheme}>
              <Faq />
            </ThemeProvider>
        </Route>
      </Switch>
      <AlertSnackbar />
    </Router>



  //  <Router history={history}>
  //                  {renderRoutes(routes)}

  // </Router>


  );
};

export default App;
