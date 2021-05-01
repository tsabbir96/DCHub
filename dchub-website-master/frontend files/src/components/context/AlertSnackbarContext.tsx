import React from "react";
import { AlertSnackbarState, defaultState, useAlertSnackbar } from "../commun/useAlertSnackbar";

export type AlertSnackbarContext = {
	state: AlertSnackbarState,
	open: (severity: string, message: string) => any,
	close: () => any
}
const defaultAlertSnackbarContext = {
	state: defaultState,
	open: (severity: string, message: string) => {
	},
	close: () => {
	}
}
export const AlertSnackbarContext = React.createContext<AlertSnackbarContext>(defaultAlertSnackbarContext);
export const AlertSnackbarProvider: React.FC = ({children}) => {
	const globalSnackbar = useAlertSnackbar()
	return (
		<AlertSnackbarContext.Provider value={globalSnackbar}>
			{children}
		</AlertSnackbarContext.Provider>
	);
};
export const useAlertSnackbarContext = () => React.useContext(AlertSnackbarContext)