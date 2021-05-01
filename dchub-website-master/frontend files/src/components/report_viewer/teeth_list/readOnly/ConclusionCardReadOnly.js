import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
        margin: theme.spacing(4),
    },
    toothimg: {
        maxHeight: '150px'
    }
    ,
    toothDiv: {
        display: 'flex',
        border: 'solid',
        borderColor: theme.palette.primary.main,
        borderWidth: '1px',
        borderRadius: "6px"
    }
    ,
    toothIcon: {
        alignSelf: 'center',
        height: '80px',
        width: '30px',
        fill: 'red'
    },
    btn: {
        justifyContent: 'start'
    },
    text: {
        margin: theme.spacing(2, 0),
    }
}));
 
export default function ConclusionCardReadOnly({summary}) {

    const classes = useStyles();
 
    return (
        <Card
            className = {classes.root}
            variant = 'outlined'
        >
            <CardHeader
              
                title = {
                    <Typography>
                        <Box fontWeight = {700}>
                            Remarks and summary
                        </Box>
                    </Typography>
                }
            />
            <CardContent>
      
      


                <Typography>
                    <Box>
                        {summary}
                    </Box>
                </Typography>
            
            

            </CardContent>
       
       
        </Card>
    );
}
