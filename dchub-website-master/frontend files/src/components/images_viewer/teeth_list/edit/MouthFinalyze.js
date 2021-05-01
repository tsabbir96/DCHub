import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import React from "react";
import { useHistory } from "react-router";
import {
  update_mouth_images_issues_and_status,
  update_mouth_images_report_summ,
} from "../../../context/submission/XrayReportActions";
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
const calculateTotalIssues = (teethMap) => {
  let sum = 0;
  for (const tooth of Object.values(teethMap)) sum += tooth.issues;
  return sum;
};
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

const getStatus = (uncheckedTeethList) => {
  if (uncheckedTeethList.length > 0) {
    return "PENDING";
  } else {
    return "READY";
  }
};

export default function MouthFinalyze({
  reportId,
  imagesInfoId,
  teethMap,
  summary,
}) {
  const classes = useStyles();
  let history = useHistory();

  const totalIssues = calculateTotalIssues(teethMap);
  const uncheckedTeethList = buildUnverifiedToothList(teethMap);
  const status = getStatus(uncheckedTeethList);

  const handleSave = () => {
    update_mouth_images_issues_and_status(
      imagesInfoId,
      totalIssues,
      status
    ).then((res) => {
      if (res.status === 200) {
        update_mouth_images_report_summ(reportId, summary).then((res02) => {
          if (res02.status === 200) {
            history.push({
              pathname: "/profile/Reports",
            });
          }
        });
      }
    });
  };
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
          onClick={handleSave}
          fullWidth
          color={"primary"}
          variant={"contained"}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
