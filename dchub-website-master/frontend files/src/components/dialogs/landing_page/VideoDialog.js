import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({


    paragraph: {
        margin: theme.spacing(4,16),

    },   title: {
        margin: theme.spacing(4,0),

    },
    video:{
        marginLeft:'auto',
        marginRight:'auto',
        margin: theme.spacing(4),

    }

}));
const VideoDialog = ({handleClose, open}) => {
    const classes = useStyles();
    return (
        <Dialog
            onClose = {handleClose}
            aria-labelledby = 'simple-dialog-title'
            maxWidth = {"lg"}
            open = {open}
            className = {classes.dialog}

        >
            <Typography
                color = {"primary"}
                variant = {'h5'}
                gutterBottom
                className = {classes.title}

            >
                <Box
                    textAlign = {'center'}
                    fontWeight = {600}
                >
                    Why Our Treatment Plans Are Unbiased?
                </Box>
            </Typography>
            <Typography
                className = {classes.paragraph}

                // variant={'h6'}
            >
                <Box
                    textAlign = {'justify'}
                >
                    Often, patients receive a biased treatment recommendation from their dentist. Their dentist opinion
                    is
                    subjective as most dentists offer their views based on their skill levels. For example, if a dentist
                    is
                    not comfortable placing dental implants, he or she may be more reluctant to offer a fixed or a
                    removable
                    dental bridge. If a dentist is not skilled in complex root canal treatment may recommend an
                    extraction
                    instead.
                    Suppose a patient does not have sufficient jaw bone, and the dentist is not experienced in an
                    All-On-4
                    treatment. In that case, the recommendation may revolve around extensive, time-lengthy, and
                    expensive
                    bone grafting procedures. As a patient, you deserve to have an unbiased opinion. Because the dental
                    team
                    at Tele-Dentist Consultation Hub focuses on offering dental consultations and treatment planning
                    only,
                    you can be confident their idea is unbiased. Once you decide on a treatment plan, we can provide you
                    with a list of qualified dentists to match your requirements.
                </Box>
            </Typography>


            <ReactPlayer
                className = {classes.video}
                controls = {true}
                playing={true}
                url = {'https://video.wixstatic.com/video/af59a8_e8c94a4d84a2440da7f40b5a5b99360d/1080p/mp4/file.mp4'}
            />
        </Dialog>
    );
};
export default VideoDialog;