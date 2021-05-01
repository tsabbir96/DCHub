import {Snackbar} from '@material-ui/core';
import React from 'react';
import {Alert} from "@material-ui/lab";
import {useAlertSnackbarContext} from "../context/AlertSnackbarContext";
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
	createStyles({})
);
const AlertSnackbar: React.FC = (props) => {
	const {state, close} = useAlertSnackbarContext()
	return (
		<Snackbar
			anchorOrigin={{vertical: 'top', horizontal: 'center'}}
			open={state.isOpen}
			autoHideDuration={6000}
			onClose={close}>
			<Alert variant="filled"
				   onClose={close}
				   severity={state.severity as any}>
				{state.message}
			</Alert>
		</Snackbar>
	);
};
export default AlertSnackbar;