import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Box, Button, Grid, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { green } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
const useStyles = makeStyles((theme: Theme) => ({
	rootNormal: {
		margin: theme.spacing(2),
		borderColor: theme.palette.primary.main,

	},
	rootFamily: {
		borderColor: green['A700'],
		margin: theme.spacing(0, 2),
		
	},
	offersLabel: {
		width: '100%',
		backgroundColor: theme.palette.background.default,
	},
	background:{
		backgroundColor:theme.palette.primary.main,
		color:'white',
		padding:theme.spacing(4)

	},backgroundFamily:{
		backgroundColor:green['A700'],
		color:'white',
		padding:theme.spacing(4)

	},
	price:{
		margin:theme.spacing(4)
	}
	,btn:{
		margin:theme.spacing(2,0)
	},
	check:{
		color:green['A700']
	},
	list:{
		margin:theme.spacing(0,1)
	}
}));

interface propType {
	title: string
	price: string
	desc: string
	allowedFeatures: Array<string>
	// notAllowedFeatures: Array<string>
}

export default function OutlinedCard(props: propType) {
	const classes = useStyles();
	const items = []
	for (let entry of props.allowedFeatures) {
		items.push(
			<Grid container className={classes.list}>
				<ListItemIcon>
					<CheckIcon  className={classes.check}/>
				</ListItemIcon>
				<ListItemText primary={entry} />
			</Grid>
		)
	}

	
	return (
		<Card className={props.title === "Family Dental Plan" ? classes.rootFamily : classes.rootNormal}
			  variant="outlined">
			<Typography  variant='h5' className={props.title === "Family Dental Plan" ? classes.backgroundFamily: classes.background}>
				<Box textAlign={'center'} fontWeight={600}>
					{props.title}
				</Box>
			</Typography>
			<Typography className={classes.price} variant='h4' >
				<Box textAlign={'center'} >
					${props.price}/year
				</Box>
			</Typography>
			<Typography>
				<Box textAlign={'center'}>
					{props.desc}
				</Box>
			</Typography>
			<Button
			className={ classes.btn}
			fullWidth
				variant="outlined"
				color={props.title === "Family Dental Plan" ? 'primary' : "primary"}

				>
				<Typography>
					<Box>
						Select plan
					</Box>
				</Typography>
			</Button>
			<Typography
				className={classes.offersLabel}
				variant={"subtitle2"}
				color={"textSecondary"}
			>
				<Box
					textAlign={'center'}
				>
					What's offered:
				</Box>
			</Typography>
			<List component="nav"
				  aria-label="main mailbox folders">
				{items}
			</List>
		</Card>
	);
}
