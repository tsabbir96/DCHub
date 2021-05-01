import { Box, Grid, Link, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from 'react';
import IntroHeader from '../intro/IntroHeader';
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
const Privacy = () => {
	const classes = useStyles();
	return (
		<div>
			<IntroHeader

			/>
			<Typography
				className={classes.title}
				color={"secondary"}
				variant={"h3"}>
				<Box
					fontWeight={700}
					textAlign={"center"}
				>
					Privacy Statement
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
			<Grid container
				  direction={'column'}
				  alignItems={'center'}>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						dentistconsultationhub, Inc. and its affiliates ("dentistconsultationhub," "we," "our," and/or
						"us")
						value the privacy of
						individuals who use our website (the "Site"), mobile application, and related services,
						including
						the dentistconsultationhub Premium Services, (collectively, our "Services").<br />
						This privacy statement ("Privacy Statement") explains how we collect, use, and share information
						from or about individuals who use our Services ("Members"). It describes what information other
						members or doctors can see when they use our Services. This Privacy Statement also tells you
						about
						your rights and choices with respect to Personal Information, and how you can contact us if you
						have
						any questions or concerns. By using our Services, you agree to the collection, use, disclosure,
						and
						procedures this Privacy Statement describes. In addition to this Privacy Statement, your use of
						our
						Services is also subject to our <Link color={"secondary"}
															  href="#"
						// onClick={preventDefault}
					>
						Terms of Use
					</Link>.<br />
						For the purpose of this Privacy Statement, "Personal Information" means any information that, by
						itself or in combination with other information, identifies or can reasonably be used to
						identify an
						individual, such as their name, email address, telephone number, address, date of birth, or
						healthcare information. Personal Information does not include information that is anonymized.
						"Protected Health Information" has the meaning defined in the Health Insurance Portability and
						Accountability Act ("HIPAA"), and is not Personal Information for the purposes of this Privacy
						Statement, but is rather subject to our
						<Link color={"secondary"}
							  href="#"
							// onClick={preventDefault}
						>
							Notice of Privacy Practices </Link> described below.<br />
					</Box>
				</Typography>
				<Typography
					className={classes.header02}
					color={"textSecondary"}
					variant={"h6"}
				>
					<Box
						textAlign={"left"}
						fontWeight={700}
					>
						A. Information We Collect
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					className={classes.header02}
					color={"textSecondary"}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						B. HealthKit Data
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					className={classes.header02}
					color={"textSecondary"}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						C. How We Use the Information We Collect
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						D. How We Share the Personal Information We Collect
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						E. International Transfers of Personal Information
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						F. Security
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						G. Information Retention
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						H. Your Choices and Rights
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						I. Marketing Communications.
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						J. Notifications. </Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						K. Do Not Track.
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						L. Deactivating Your Account.
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						M. European Privacy Rights </Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>N. Children
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						O. Google
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						P. Third Party Sites
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						Q. Contact HealthTap
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
				<Typography
					color={"textSecondary"}
					className={classes.header02}
					variant={"h6"}>
					<Box
						fontWeight={700}
					>
						R. Changes To This Privacy Statement
					</Box>
				</Typography>
				<Typography
					className={classes.paragraph01}
					color={"textPrimary"}
					variant={"subtitle1"}>
					<Box
						textAlign={"justify"}
					>
						We may collect a variety of information from or about you or your devices from various sources,
						as
						described below.
						You can browse many areas of the Site and/or our applications without providing any Personal
						Information. However, at certain areas of the Site, we may ask that you provide Personal
						Information. Where applicable, we indicate whether and why you must provide us with your
						Personal
						Information, as well as the consequences of failing to do so. If you do not provide your
						Personal
						Information when requested, you may not be able to use our Services if that information is
						necessary
						to provide you with our Services or if we are legally required to collect it. </Box>
				</Typography>
			</Grid>
		</div>
	);
};
export default Privacy;