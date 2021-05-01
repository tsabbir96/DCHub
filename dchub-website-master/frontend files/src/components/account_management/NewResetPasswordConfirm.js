import {
  FormControl,

  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import axios from "axios";
import clsx from "clsx";
import React, { useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import logo from "../../assets/logodch.png";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { reset_password_confirm } from "../context/profile_data/ProfileDataActions";
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
  inputmargin: {
      margin: theme.spacing(1),
  }
 ,
  textField: {
    margin: theme.spacing(1),
  },
}));

export default function SignInSide() {
  const { open } = useAlertSnackbarContext();

  const classes = useStyles();
  const [, dispatch] = useProfileData();
  const [requestSent, setRequestSent] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });
  const { new_password, re_new_password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    const uid = params.uid;
    const token = params.token;
    reset_password_confirm(uid, token, new_password, re_new_password, dispatch).then(
      (data) => {
        const { ok } = data;
        let sev = ok ? "success" : "error";
        let message = ok ? "modification sucessful" : "modification failed";
        open(sev, message);

          if(ok===true ){
            setRequestSent(true);
          }
  
      }


    );
  };
  const [showPass, setShowPass] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
  if (requestSent) {
    return <Redirect to="/login" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img  className={classes.logo} src={logo} alt ="logo" loading='lazy' />

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={(e) => onSubmit(e)}>
            <Grid container>
              <FormControl
                fullWidth
                className={clsx(classes.inputmargin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="new_password"
                  type={showPass ? "text" : "password"}
                  value={new_password}
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
              fullWidth
                className={clsx(classes.inputmargin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm New Password *
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  name="re_new_password"
                  type={showPass ? "text" : "password"}
                  value={re_new_password}
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
            <Button
              className={classes.inputmargin}
              variant="contained"
              color={"primary"}
              type="submit"
            >
              Reset Password
            </Button>
          </form>

    
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
