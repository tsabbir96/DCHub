import React from 'react';
import BorderColorTwoToneIcon from '@material-ui/icons/BorderColorTwoTone';
import {Card, Grid, Hidden, TextField} from '@material-ui/core';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import PosterOptions from './PosterOptions';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            borderRadius: '10px',
            padding: '16px 16px 0 16px '
        },


        submitBtn: {

            display: 'none'
        },
        margin:{
            marginLeft: '8px',
            marginRight: '24px'
        }


    })
);

const Poster = () => {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">


                <form >
                    <TextField
                         fullWidth  rowsMax="3"
                               InputProps={{startAdornment: <Hidden xsDown> <BorderColorTwoToneIcon
                                       className={classes.margin}
                                   /> </Hidden>}}
                               variant={"outlined"}
                               label='Express yourself...'id="outlined-basic" />
                    <button
                        className={classes.submitBtn}
                        type='submit' />

                </form>

                <PosterOptions/>

        </Card>

    );
};

export default Poster;