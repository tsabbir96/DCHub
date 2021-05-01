import React from "react";

export type AlertSnackbarState = {
	severity: string
	message: string,
	isOpen: boolean
}
export const defaultState: AlertSnackbarState = {
	severity: 'info',
	message: 'message',
	isOpen: false
}

export function useAlertSnackbar() {
	const [state, setState] = React.useState<AlertSnackbarState>(defaultState)
	const open = React.useCallback((severity: string, message: string) => {
		setState({
			severity,
			message,
			isOpen: true
		})
	}, [])
	const close = React.useCallback(() => {
		setState((oldState) => ({...oldState, isOpen: false}))
	}, [])
	return {state, close, open}
}