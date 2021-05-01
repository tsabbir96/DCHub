import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import logo from "../../assets/logodch.png";
import { useAlertSnackbarContext } from "../context/AlertSnackbarContext";
import { reset_password } from "../context/profile_data/ProfileDataActions";
import { useProfileData } from "../context/profile_data/ProfileDataContext";


 

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
  inputmargin:{
      margin:theme.spacing(2,0)
  }
}));

export default function ResetPassword() {
    

    const { open } = useAlertSnackbarContext();




    const classes = useStyles();
    const [, dispatch] = useProfileData();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });
    const {email} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        reset_password(email,dispatch).then(
            (data) => {
                const { ok } = data;
                let sev = ok ? "success" : "error";
                let message = ok ? "Reset message sent" : "Reset failed";
                open(sev, message);
                setRequestSent(true);

              });
 
        
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
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)
            window.location.replace(res.data.authorization_url);
        } catch (err) {
        }
    };
    const continueWithFacebook = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/facebook/?redirect_uri=${process.env.REACT_APP_API_URL}/facebook`)
            window.location.replace(res.data.authorization_url);
        } catch (err) {
        }
    };
    if (requestSent) {
        return <Redirect to="/login" />
    }










    
    
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img className={classes.logo} src={logo} loading='lazy' alt ='logo'/>

          <Typography component="h1" variant="h5">
            Reset password
          </Typography>
          <form onSubmit={(e) => onSubmit(e)} className={classes.form}>
            <Grid container>
              <TextField
              fullWidth
                id="outlined-basic"
                className={classes.inputmargin}
                name="email"
                type="email"
                value={email}
                label="Email"
                variant="outlined"
                onChange={(e) => onChange(e)}
                required
              />
            </Grid>
            <Button
              className={classes.inputmargin}
              variant="contained"
              fullWidth
              color={"primary"}
              type="submit"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
