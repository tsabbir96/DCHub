import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {TransitionProps} from '@material-ui/core/transitions';
// @ts-ignore
import testPDF from '../../../assets/test.pdf'
import {PDFObject} from 'react-pdfobject';
import {Grid, IconButton} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		appBar: {
			position: 'absolute',
		},
		title: {
			marginLeft: theme.spacing(2),
			flex: 1,
		},
		pdfView: {
			height: '100vh'
		}
	}),
);
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & { children?: React.ReactElement },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up"
				  ref={ref} {...props} />;
});

interface Interface {
	isOpen: boolean,
	close: () => any
}

export default function Report(props: Interface) {
	const classes = useStyles();
	return (
		<Dialog fullScreen
				open={props.isOpen}
				onClose={props.close}
				TransitionComponent={Transition}>
			{/*<AppBar className={classes.appBar}>*/}
			{/*	<Toolbar>*/}
			{/*		<IconButton edge="start"*/}
			{/*					color="inherit"*/}
			{/*					onClick={props.close}*/}
			{/*					aria-label="close">*/}
			{/*			<CloseIcon />*/}
			{/*		</IconButton>*/}
			{/*		<Typography variant="h6"*/}
			{/*					className={classes.title}>*/}
			{/*			Report*/}
			{/*		</Typography>*/}
			{/*		<Button autoFocus*/}
			{/*				color="inherit"*/}
			{/*				onClick={props.close}>*/}
			{/*			print*/}
			{/*		</Button>*/}
			{/*	</Toolbar>*/}
			{/*</AppBar>*/}


			<Grid container
				  justify={'center'}>
				<PDFObject
					width={'100vw'}
					height={'100vh'}
					url={testPDF} />
			</Grid>

			<IconButton
				edge="start"
				color="inherit"
				className={classes.appBar}
				onClick={props.close}
				aria-label="close"
			>
				<CloseIcon />
			</IconButton>


		</Dialog>
	);
}
