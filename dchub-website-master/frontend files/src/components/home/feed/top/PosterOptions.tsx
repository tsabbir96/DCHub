import {ButtonBase, Divider, Grid, Typography} from '@material-ui/core';
import React from 'react';
import ImageTwoToneIcon from '@material-ui/icons/ImageTwoTone';
import MovieCreationTwoToneIcon from '@material-ui/icons/MovieCreationTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>createStyles({
    root: {

    },
    stretch:{
        paddingTop:'16px',
        paddingBottom:'16px' ,
         alignSelf:'center',
        height:'100%',
        flex:'1'
     }

}));


const PosterOptions = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}   justify={"space-evenly"} direction={'row'}>

            <ButtonBase
            className={classes.stretch}
            >

                      <ImageTwoToneIcon
                        style={{color:'#70b5f9'}}
                    />
            <Typography>Photo </Typography>

                </ButtonBase>






               <Divider orientation="vertical" flexItem />




            <ButtonBase
                className={classes.stretch}

            >

            <MovieCreationTwoToneIcon
                style={{color:'#e7a33e'}}

            />

            <Typography> Videos </Typography>
                </ButtonBase>

                <Divider orientation="vertical" flexItem />


            <ButtonBase
                className={classes.stretch}

            >

            <DescriptionTwoToneIcon
                style={{color:'#7fc15e'}}

            />

            <Typography> Articles </Typography>
                </ButtonBase>


        </Grid>
    );
};

export default PosterOptions;