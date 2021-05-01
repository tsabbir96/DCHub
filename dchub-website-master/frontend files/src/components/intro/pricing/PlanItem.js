import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import PremiumBtn from "../../commun/PremiumBtn";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  instead: {
    textDecoration: "line-through",
  },
}));
export default function PlanItem(props) {
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
    <Card elevation='20'>
      <CardHeader title={"title here"} />
      <CardContent>
        <Typography>
          <Box>${"price"}</Box>
        </Typography>
        <Typography>
          <Box>MONTHLY</Box>
        </Typography>

        <Typography>
          <Box>Lifetime Free Consultation</Box>
        </Typography>

        <Divider />
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

        <Divider />
        <PremiumBtn/>
      </CardContent>
    </Card>
  );
}
