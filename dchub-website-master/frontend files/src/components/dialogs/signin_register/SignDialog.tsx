import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Dialog, DialogTitle} from "@material-ui/core";

const useStyles = makeStyles(th => ({
	root: {
		minWidth: 275,
		padding: th.spacing(3, 6)
	}
}));

interface propTypes {
	open: boolean;
	onClose: (value: string) => void;
}

function SignDialog(props: propTypes) {
	const classes = useStyles();
	const {onClose, open} = props;
	const handleCloseDialog = () => {
		onClose('');
	};
	return (
		<Dialog
			fullWidth
			maxWidth={'md'}
			onClose={handleCloseDialog}
			aria-labelledby="simple-dialog-title"
			open={open}>
			<DialogTitle id="simple-dialog-title">
				Welcome
			</DialogTitle>
		</Dialog>
	);
}

export default SignDialog;