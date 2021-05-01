import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import IntroHeader from '../IntroHeader';
import FeatureDcHub from './FeatureDcHub';
import FeatureDiagno from './FeatureDiagno';
import FeatureMyhub from './FeatureMyhub';
import FeatureSnapCheck from './FeatureSnapCheck';
import FeaturesXray from './FeaturesXray';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
    },
    title: {
        // marginTop:theme.spacing(4),
        color: 'white',
        width: '100%',
        height:'80px', 
        padding:theme.spacing(2),
        margin: theme.spacing(8, 0),
        backgroundColor: theme.palette.primary.main,
    }

}));



export default function Features() {
    const classes = useStyles()

    return (
        <div>
                    <IntroHeader/>

      {/* <IntroHeader value={value} setValue={setValue} /> */}
            <Grid
                xs = {12}
                container
            >
                <Typography
                    className = {classes.title}
                    variant = {'h4'}
                    // color = {'primary'}
                >
                    <Box
                        fontWeight = {900}
                        textAlign = {'center'}
                    >
                        Our products
                    </Box>
                </Typography>
            </Grid>


                    <FeaturesXray/>
                    <FeatureSnapCheck/>
                    <FeatureDiagno/>
                    <FeatureMyhub/>
                    <FeatureDcHub/>

        </div>
    )
}
