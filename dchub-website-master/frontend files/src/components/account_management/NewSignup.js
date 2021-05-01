import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { signup } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://dentistconsultationhub.ai/">
        DentistConsultationHub
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  icon: {
    margin: theme.spacing(4, 2),
    width: "40px",
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
  success: {
    height: "100%",
  },
}));

export default function SignInSide() {
  const [state, dispatch] = useProfileData();
  let history = useHistory();

  let profile = null;
  if (state.profile !== null) {
    profile = state.profile[0];
  }

  const classes = useStyles();
  const { open } = useAlertSnackbarContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    account_type: "",
  });
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    account_type,
  } = formData;
  const [accountCreated, setAccountCreated] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(
        first_name,
        last_name,
        email.toLowerCase(),
        account_type,
        password,
        re_password,
        dispatch
      ).then((data) => {
        const { ok } = data;
        let sev = ok ? "success" : "error";
        let message = ok ? "Registration sucessful" : "Registration failed";
        open(sev, message);

        if (ok === true) {
          setAccountCreated(true);
        }
      });
    }
  };

  const [showPass, setShowPass] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChangeAccountType = (e) => {
    //todo
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (event) => {
    history.push("/login");
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
        {accountCreated ? (
          <Grid container className={classes.success} alignItems="center">
            <Typography variant="h4">
              <Box textAlign="center">
                Your account was created successfully, please check your email
              </Box>
            </Typography>
          </Grid>
        ) : (
          <div className={classes.paper}>
            <img
              loading="lazy"
              className={classes.logo}
              src={logo}
              alt="logo"
            />

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container>
                <TextField
                  id="outlined-basic"
                  className={classes.inputmargin}
                  name="first_name"
                  type="text"
                  value={first_name}
                  margin="normal"
                  fullWidth
                  label="First name"
                  variant="outlined"
                  onChange={(e) => onChange(e)}
                  required
                />
                <TextField
                  id="outlined-basic"
                  className={classes.inputmargin}
                  name="last_name"
                  type="text"
                  value={last_name}
                  margin="normal"
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  onChange={(e) => onChange(e)}
                  required
                />

                <TextField
                  id="outlined-basic"
                  className={classes.inputmargin}
                  name="email"
                  type="email"
                  value={email}
                  margin="normal"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  onChange={(e) => onChange(e)}
                  required
                />
                <FormControl
                  margin="normal"
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
                <FormControl
                  margin="normal"
                  fullWidth
                  className={clsx(classes.inputmargin, classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password *
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="re_password"
                    type={showPass ? "text" : "password"}
                    value={re_password}
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
              </Grid>

              <FormControl component="fieldset">
                <FormLabel component="legend">Account type</FormLabel>
                <RadioGroup
                  row
                  aria-label="Account type"
                  name="account_type"
                  value={account_type}
                  onChange={handleChangeAccountType}
                >
                  <FormControlLabel
                    value="PATIENT"
                    control={<Radio />}
                    label="Patient"
                  />
                  <FormControlLabel
                    value="DOCTOR"
                    control={<Radio />}
                    label="Doctor"
                  />
                </RadioGroup>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign up
              </Button>
            </form>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={handleLogin} variant="body2">
                  {"You already have an account? Login"}
                </Link>
              </Grid>
              {/* <Button onClick={continueWithGoogle}>Login with google</Button> */}
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
