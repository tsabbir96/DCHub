import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        padding: theme.spacing(0, 8),
        marginTop: theme.spacing(4),
        backgroundColor: theme.palette.background.paper,
    }
    ,
    title:{
    marginTop:theme.spacing(6)
}
}));
export default function QuestionsCheck() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    return (
        <>
            <Typography
                variant = {'h6'}
                className = {classes.title}
            >
                <Box
                    fontWeight = {700}
                    textAlign = {'center'}
                >
                    Do you have any of the following symptoms?
                </Box>
            </Typography>
            <List className = {classes.root}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <>
                            <Divider />
                            <ListItem
                                key = {value}
                                role = {undefined}
                                dense
                                button
                                onClick = {handleToggle(value)}
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge = 'start'
                                        checked = {checked.indexOf(value) !== -1}
                                        tabIndex = {-1}
                                        disableRipple
                                        inputProps = {{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id = {labelId}
                                    primary = {'Acidic taste in mouth'}
                                />
                            </ListItem>
                        </>
                    );
                })}
            </List>
        </>
    );
}
