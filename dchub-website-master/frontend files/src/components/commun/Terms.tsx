import React from 'react';
import Header from "./Header";
import {Box, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paragraph01: {
			width: '60%',
		},
		date: {
			marginBottom: theme.spacing(8)
		},
		header02: {
			width: '60%',
			marginTop: theme.spacing(8)
		},
		title: {
			marginTop: theme.spacing(16)
		}
	})
);









const Terms = () => {
	const classes = useStyles();

	return (
		<div>
			<Header/>



			<Typography
				className={classes.title}
				color={"secondary"}
				variant={"h3"}>
				<Box
					fontWeight={700}
					textAlign={"center"}
				>
					Terms of Use
				</Box>
			</Typography>
			<Typography
				color={"primary"}
				variant={"h4"}>
				<Box
					fontWeight={700}
					textAlign={"center"}
				>
					dentistconsultationhub, Inc.
				</Box>
			</Typography>
			<Typography
				className={classes.date}
				color={"textSecondary"}
				variant={"subtitle1"}>
				<Box
					fontWeight={700}
					textAlign={"center"}
				>
					Last Updated: January 04, 2021
				</Box>
			</Typography>

		</div>
	);
};
export default Terms;