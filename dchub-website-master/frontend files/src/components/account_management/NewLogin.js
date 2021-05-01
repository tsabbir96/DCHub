import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import clsx from "clsx";
import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import logo from "../../assets/logodch.png";
import ProgressDialog from "../commun/ProgressDialog";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import {
  load_doctor_profile,
  load_profile,
  load_user,
  login
} from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dentistconsultationhub.ai/">
        DentistConsultationHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    // backgroundImage: `url(${signIn})`,
    backgroundImage: `url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,
    backgroundPositionX: "0",
    backgroundPositionY: "0",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    height: "260px",
  },
}));

export default function SignInSide() {
  const [state, dispatch] = useProfileData();
  let history = useHistory();

  let profile = null;
  if (state.profile !== null) {
    profile = state.profile[0];
  }
  const [loading, setloading] = useState(false)
  const classes = useStyles();
  const { open } = useAlertSnackbarContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setloading(true)
    login(email.toLowerCase(), password, dispatch).then((data) => {
      if (data.status === 200) {
        load_user(dispatch).then((data02) => {
          if (data02.status === 200) {
            if (data02.data[0].account_type.toLowerCase() === "patient") {
              load_profile( data02.data[0].id, dispatch).then((res) => {
                if (res.status === 200) {
                  open("success", "Login sucessful");

                }else{
                  open("error", "Login failed");
                  setloading(false)
                }
              });
            } else {
              load_doctor_profile( data02.data[0].id, dispatch).then((res) => {
                if (res.status === 200) {
                  open("success", "Login sucessful");
                }else{
                  open("error", "Login failed");
                  setloading(false)
                }
              });
            }
          } else {
            //todo ERRROR
            open("error", "Login failed");
            setloading(false)

          }
        });
      } else {
        open("error", "Login failed");
        setloading(false)

      }
    });
  };

  const [showPass, setShowPass] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignUp = () => {
    history.push("/signup");
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };
  const continueWithFacebook = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (profile !== null) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img className={classes.logo} src={logo} alt="logo" loading="lazy" />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={(e) => onSubmit(e)} className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              type="email"
              value={email}
              label="Email"
              onChange={(e) => onChange(e)}
              autoComplete="email"
              autoFocus
            />
            <FormControl
              fullWidth
              className={clsx(classes.inputmargin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password *
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => onChange(e)}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/reset-password">
                  <Typography variant={"subtitle2"}>Reset password</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={handleSignUp} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            {/* <Button onClick={continueWithGoogle}>Login with google</Button> */}

            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <ProgressDialog open={loading} />

    </Grid>
  );
}
