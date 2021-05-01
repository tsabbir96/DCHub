import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
        margin:theme.spacing(1,2)
        

    },
    img: {
      height:'260px',
      width:'100%',
      objectFit:'cover'

    },
 
  }));
  
export default function BlogItem() {
    const classes = useStyles();

    return (
        <div
        className={classes.root}

        >
            <img 
            className={classes.img}
            src='https://images.unsplash.com/photo-1593022356269-609ed284b3c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
            alt='banner'
            loading='lazy'
            />

            <Typography>
                TITLE HERE
            </Typography>
                <Divider/>

                <Grid container  >


                <Typography>
                WRITER HERE
            </Typography>


            <Typography>
                2020/02/02
            </Typography>

                </Grid>
        </div>
    )
}
