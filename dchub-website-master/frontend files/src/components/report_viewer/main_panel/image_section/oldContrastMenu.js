import React from 'react';
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import {VolumeDown, VolumeUp} from "@material-ui/icons";
import Slider from "@material-ui/core/Slider";
import {createStyles, makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {

            width: '200px'
        },
        paper:{
            backgroundColor: "#1A1A1B",

        },
        grid:{
            padding:theme.spacing(1,2)
        }

    })
);
const ContrastMenu = ({open, anchorRef, handleClose, value,setValue}) => {
    const classes = useStyles();
        const [localState, setLocalState] = React.useState(value)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Popper
            className={classes.root}

            open = {open}
            anchorEl = {anchorRef.current}
            role = {undefined}
            transition
            disablePortal
        >
            {({TransitionProps, placement}) => (
                <Grow
                    {...TransitionProps}
                    style = {{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                >
                    <Paper

                    className={classes.paper}
                    >
                        <ClickAwayListener onClickAway = {handleClose}>
                            <div

                            >
                                <Grid

                                    className={classes.grid}

                                    container
                                 >
                                    <Slider
                                        // marks
                                        valueLabelDisplay="auto"

                                        
                                        min={0}
                                        max={200}
                                        value = {localState}
                                        onChange = {(event,  value)=> (setLocalState(value))}
                                        onChangeCommitted = {handleChange}
                                        aria-labelledby = 'continuous-slider'
                                    />

                                </Grid>
                        
                            </div>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    );
};
export default ContrastMenu;