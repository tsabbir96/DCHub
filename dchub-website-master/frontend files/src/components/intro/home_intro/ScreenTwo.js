import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import signuplanding from '../../assets/signuplanding.png'
import upload from '../../assets/upload.png'
import result from '../../assets/result.png'
import {makeStyles} from "@material-ui/core/styles";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Container from "@material-ui/core/Container";
import {Box} from "@material-ui/core";
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper
    },
    middleLogo: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: '50%',
        height: '80px',
        width: '80px',
        color: 'white',
        padding: theme.spacing(2),
        marginLeft: '25%'
    },
    verticalDivider: {
        marginLeft: '44%',
        backgroundColor: theme.palette.primary.light,
    },
    stepsTitle: {
        color: 'white',
        width: '100%',
        height:'80px', 

        margin: theme.spacing(8, 0),
        backgroundColor: theme.palette.primary.light,
    },


    boxStyle:{
        marginTop: theme.spacing(2),

    },


    middleText: {
        marginTop: theme.spacing(30),
        paddingLeft: theme.spacing(24),
    },
    middleImg: {
        marginTop: theme.spacing(20),
        height: '400px',
        width: '400px',
    },
    lastImg: {
        marginTop: theme.spacing(20),
        // height: '400px',
        width: '600px',
        paddingLeft: theme.spacing(10),
    },
    lastText: {
        marginTop: theme.spacing(30),
    },
}));
const ScreenTwo = () => {
    const classes = useStyles()
    return (
        <div
            className = {classes.root}
        >
            <Grid
                xs = {12}
                container
            >
                <Typography
                    className = {classes.stepsTitle}
                    variant = {'h4'}
                    // color = {'primary'}
                >
                    <Box
                                        className = {classes.boxStyle}
                        fontWeight = {900}
                        textAlign = {'center'}
                    >
                        3 easy steps
                    </Box>
                </Typography>
            </Grid>
            <Container>
                <Grid
                    container
                    xs = {12}
                >
                    <Grid
                        item
                        xs = {5}
                    >
                        <img
                            src = {signuplanding}
                                                alt='icon'

                        />
                    </Grid>
                    <Grid
                        item
                        xs = {2}
                        justify = {'center'}
                    >
                        <ExitToAppIcon
                            className = {classes.middleLogo}
                        />
                        <Divider
                            orientation = {"vertical"}
                            className = {classes.verticalDivider}
                        />
                    </Grid>
                    <Grid
                        item
                        xs = {5}
                    >
                        <Typography
                            variant = {'h4'}
                            color = {"primary"}
                            gutterBottom
                        >
                            <Box
                                fontWeight = {900}
                            >
                                1. Signup
                            </Box>
                        </Typography>
                        <Typography
                            variant = {'h6'}
                            color = {"textSecondary"}
                        >
                            <Box
                                // fontWeight={400}
                            >
                                signup quickly and easily, <br /> Setup your account <br />then fill your medical
                                records
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    xs = {12}
                >
                    <Grid
                        item
                        xs = {5}
                        className = {classes.middleText}
                    >
                        <Typography
                            variant = {'h4'}
                            color = {"primary"}
                            gutterBottom
                        >
                            <Box
                                fontWeight = {900}
                            >
                                2. Upload
                            </Box>
                        </Typography>
                        <Typography
                            variant = {'h6'}
                            color = {"textSecondary"}
                        >
                            <Box
                                // fontWeight={400}
                            >
                                Upload your xrays and images <br /> to our secure, HIPPA compliant servers
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs = {2}
                        justify = {'center'}
                    >
                        <PublishIcon
                            className = {classes.middleLogo}
                        />
                        <Divider
                            orientation = {"vertical"}
                            className = {classes.verticalDivider}
                        />
                    </Grid>
                    <Grid
                        item
                        xs = {5}
                    >
                        <img
                            className = {classes.middleImg}
                            src = {upload}
                                                alt='icon'

                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    xs = {12}
                >
                    <Grid
                        item
                        xs = {5}
                    >
                        <img
                            className = {classes.lastImg}
                            src = {result}
                                                alt='icon'

                        />
                    </Grid>
                    <Grid
                        item
                        xs = {2}
                        justify = {'center'}
                    >
                        <ExitToAppIcon
                            className = {classes.middleLogo}
                        />
                        <Divider
                            orientation = {"vertical"}
                            className = {classes.verticalDivider}
                        />
                    </Grid>
                    <Grid
                        item
                        xs = {5}
                    >
                        <Typography
                            variant = {'h4'}
                            color = {"primary"}
                            gutterBottom
                            className = {classes.lastText}
                        >
                            <Box
                                fontWeight = {900}
                            >
                                3.Receive
                            </Box>
                        </Typography>
                        <Typography
                            variant = {'h6'}
                            color = {"textSecondary"}
                        >
                            <Box
                                // fontWeight={400}
                            >
                                Get your comprehensive and unbiased independent dental treatment plan report assisted by
                                artifical
                                intelligence.
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default ScreenTwo;