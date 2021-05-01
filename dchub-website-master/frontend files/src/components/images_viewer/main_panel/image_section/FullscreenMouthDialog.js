import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import {createStyles, makeStyles} from "@material-ui/core/styles";
 import mouthbot  from '../../../../assets/images_panel/mouthbot.png'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) =>
    createStyles({
        img: {
                objectFit:'cover',
            height: "100%"
        }
    })
);
const FullscreenMouthDialog = ({handleClose, open}) => {
    const classes = useStyles();
    return (
        <Dialog

            fullWidth
            maxWidth = {"xl"}
            onClose = {handleClose}
            aria-labelledby = 'simple-dialog-title'
            open = {open}
        >
            <Card
                variant = {"outlined"}
            >
                <Grid container  justify={'center'}>
                    <img
                        className = {classes.img}
                        src = {mouthbot}
                        alt='mouth'
                    />

                </Grid>

            </Card>
        </Dialog>
    );
};
export default FullscreenMouthDialog;