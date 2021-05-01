import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    header: {
        margin: theme.spacing(4, 0)
    }
}));
const HeaderLog = ({textTitle}) => {
    const classes = useStyles();
    return (
        <div
            className = {classes.header}
        >
            <Typography
                variant = {"h5"}
            >
                <Box
                    fontWeight = "fontWeightBold"
                >
                    {textTitle}
                </Box>
            </Typography>
        </div>
    );
};
export default HeaderLog;