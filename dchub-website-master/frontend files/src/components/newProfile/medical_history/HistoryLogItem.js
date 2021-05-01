import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        margin:theme.spacing(2, 0),
        // width: '80%',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        width: '80vw'
    },
    icon: {
        width:'40px',
        height:'40px',
        padding:theme.spacing(1),
        marginRight:theme.spacing(2),
        color: 'white',
        backgroundColor: theme.palette.info.main,
        borderRadius: '50%',
    },
    content:{
        margin:theme.spacing(2)
    },
    label:{
        marginLeft:'auto',
        marginRight: '26px'

    }

}));
export default function HistoryLoginItem({desc ,date, item}) {
    const classes = useStyles();
    return (
        <div className = {classes.root}>

            {item}

            <Card
                className = {classes.card}
                variant = "outlined">
                <Grid container
                      className = {classes.content}
                    justify={
                        'space-around'
                    }
                >

                    <Typography>
                        <Box>
                            {desc}
                        </Box>
                    </Typography>



                    <Typography
                        className={classes.label}
                    >
                        <Box>

                            {date}
                        </Box>
                    </Typography>



                </Grid>
            </Card>
        </div>
    );
}
