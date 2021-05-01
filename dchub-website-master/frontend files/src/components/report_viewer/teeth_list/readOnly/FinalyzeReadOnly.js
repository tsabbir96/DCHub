import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { green, orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4),
  },
  title: {
    display: "flex",
  },
  ok: {
    color: green["A700"],
  },
  pending: {
    color: orange["A700"],
  },
  typographyRow: {
    display: "flex",
    maxWidth: "100%",
    width: "100%",
    flexWrap: "wrap",
  },
}));

const buildUnverifiedToothList = (teethMap) => {
  let unverifiedKeys = [];
  for (const tooth_name in teethMap) {
    if (!teethMap[tooth_name].verified)
      unverifiedKeys.push(
        <Typography>
          <Box fontWeight="800">{tooth_name}, &nbsp;</Box>
        </Typography>
      );
  }
  return unverifiedKeys;
};
export default function FinalyzeReadOnly({ teethMap }) {
  const classes = useStyles();
  const uncheckedTeethList = buildUnverifiedToothList(teethMap);
  let history = useHistory();

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        title={
          <div className={classes.title}>
            <Typography>
              <Box fontWeight={700}>Status:</Box>
            </Typography>

            {uncheckedTeethList.length > 0 ? (
              <Typography className={classes.pending}>
                <Box fontWeight={700}>&nbsp; Incomplete</Box>
              </Typography>
            ) : (
              <Typography className={classes.ok}>
                <Box fontWeight={700}>&nbsp; Complete</Box>
              </Typography>
            )}
          </div>
        }
      />
      <CardContent>
        {uncheckedTeethList.length > 0 && (
          <Typography>
            <Box>These teeth need to be verified:</Box>
          </Typography>
        )}
        <div className={classes.typographyRow}>
          {uncheckedTeethList.length > 0 ? (
            uncheckedTeethList
          ) : (
            <Typography>Good job, all teeth are verified</Typography>
          )}
        </div>
      </CardContent>
      <CardActions className={classes.btn}>
        <Button
          onClick={() => {
            history.push({
              pathname: "/profile/Reports",
            });
          }}
          fullWidth
          color={"primary"}
          variant={"contained"}
        >
          Back to profile
        </Button>
      </CardActions>
    </Card>
  );
}
