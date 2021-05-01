import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    root: {
        // minWidth: 275,

        margin:theme.spacing(2, 0),
        maxWidth: 'auto',
    },
    banner: {
        objectFit: 'cover',
        width: '100%',
    },
    avatar: {
        width: "60px",
        height: "60px",
        border: `2px solid white`,
        boxShadow: theme.shadows[3],
        alignSelf: 'center',
        transform: 'translate(0, -60%) ',
    },
    text: {
        transform: 'translate(0, -100%) ',
    },
    icon:{
        width:'20px' ,
        height:'20px' ,
     },
    divider:{
        marginTop:theme.spacing(2)
    }
}));
export default function Suggestions() {
    const classes = useStyles();
    return (
        <Card className = {classes.root}
              variant = "outlined">
            <img
                className = {classes.banner}
                src = {"https://images.unsplash.com/photo-1591283261401-c76eba2d369a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
                alt='banner'
            />
            <Grid container
                  direction = {'column'}
                  alignItems = {"center"}
            >
                <Avatar className = {classes.avatar}
                        src = "https://i.vimeocdn.com/portrait/6560114_640x640" />
                <Typography
                    className = {classes.text}
                >
                    <Box
                        fontWeight = {700}>
                        Dr Allen Nazeri
                    </Box>
                </Typography>
                <Typography
                    color = {"textSecondary"}
                    className = {classes.text}
                >
                    <Box>
                        Dentist
                    </Box>
                </Typography>
                <Grid container>
                    <Grid item
                          xs = {1}

                    >
                        <LocationOnTwoToneIcon
                            color={"disabled"}
                            className = {classes.icon}

                        />
                    </Grid>
                    <Grid item
                          xs = {11}>
                        <Typography
                            color = {"textSecondary"}
                            variant = {"body2"}
                        >
                            <Box>
                                Adress: 7582 S Las Vegas Blvd, Las Vegas, NV 89123, United States
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Divider
                variant={"middle"}
            className={classes.divider}
            />
            <CardActions>
                <Button color = {"primary"}
                        variant = {"outlined"}>Contact Him</Button>
            </CardActions>
        </Card>
    );
}
