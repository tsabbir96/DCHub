import {
  Box,

  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Switch,
  Typography
} from "@material-ui/core";
import { green, orange } from "@material-ui/core/colors";
import React from "react";
import t11 from "../../../../assets/teeth/t11.svg";
import t12 from "../../../../assets/teeth/t12.svg";
import t13 from "../../../../assets/teeth/t13.svg";
import t14 from "../../../../assets/teeth/t14.svg";
import t15 from "../../../../assets/teeth/t15.svg";
import t16 from "../../../../assets/teeth/t16.svg";
import t17 from "../../../../assets/teeth/t17.svg";
import t18 from "../../../../assets/teeth/t18.svg";
import t21 from "../../../../assets/teeth/t21.svg";
import t22 from "../../../../assets/teeth/t22.svg";
import t23 from "../../../../assets/teeth/t23.svg";
import t24 from "../../../../assets/teeth/t24.svg";
import t25 from "../../../../assets/teeth/t25.svg";
import t26 from "../../../../assets/teeth/t26.svg";
import t27 from "../../../../assets/teeth/t27.svg";
import t28 from "../../../../assets/teeth/t28.svg";
import t31 from "../../../../assets/teeth/t31.svg";
import t32 from "../../../../assets/teeth/t32.svg";
import t33 from "../../../../assets/teeth/t33.svg";
import t34 from "../../../../assets/teeth/t34.svg";
import t35 from "../../../../assets/teeth/t35.svg";
import t36 from "../../../../assets/teeth/t36.svg";
import t37 from "../../../../assets/teeth/t37.svg";
import t38 from "../../../../assets/teeth/t38.svg";
import t41 from "../../../../assets/teeth/t41.svg";
import t42 from "../../../../assets/teeth/t42.svg";
import t43 from "../../../../assets/teeth/t43.svg";
import t44 from "../../../../assets/teeth/t44.svg";
import t45 from "../../../../assets/teeth/t45.svg";
import t46 from "../../../../assets/teeth/t46.svg";
import t47 from "../../../../assets/teeth/t47.svg";
import t48 from "../../../../assets/teeth/t48.svg";
import { useImagesAnnotatorState } from "../../../context/annotator/ImagesAnnotatorContext";
import ToothThumb from "../../../report_viewer/teeth_list/ToothThumb";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(4),
  },
  toothimg: {
    height: "150px",
    width: "100px",
    maxHeight: "150px",
    maxWidth: "100px",
    margin: theme.spacing(2, 2),
    borderRadius: "8px",
  },
  toothIcon: {
    maxHeight: "60px",
  },
  toothDiv: {
    display: "flex",
    flexDirection: "column",
    height: "80px",
    width: "38px",
    backgroundColor: theme.palette.background.default,
    justifyContent: "center",
    border: "solid",
    borderColor: "#D0D0D0",
    borderWidth: "1px",
    borderRadius: "6px",
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  btn: {
    justifyContent: "start",
  },
  text: {
    margin: theme.spacing(2, 0),
  },
  ok: {
    color: green["A700"],
  },
  unverified: {
    color: orange["A700"],
  },
  position: {
    width: "140px",
    margin: theme.spacing(2, 2),
  },
  idealSolutions: {
    marginTop: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(0, 2),
  },
  cardHeader: {
    padding: theme.spacing(0, 2),
    paddingTop: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  typographyRow: {
    display: "flex",
  },  thumbnailContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    objectFit: "cover",
  },
}));

const teethAmerican = {
  t1: t18,
  t2: t17,
  t3: t16,
  t4: t15,
  t5: t14,
  t6: t13,
  t7: t12,
  t8: t11,
  t9: t21,
  t10: t22,
  t11: t23,
  t12: t24,
  t13: t25,
  t14: t26,
  t15: t27,
  t16: t28,
  t17: t38,
  t18: t37,
  t19: t36,
  t20: t35,
  t21: t34,
  t22: t33,
  t23: t32,
  t24: t31,
  t25: t41,
  t26: t42,
  t27: t43,
  t28: t44,
  t29: t45,
  t30: t46,
  t31: t47,
  t32: t48,
};

export default function MouthToothItemReadOnly({ toothrow, img }) {
   let findings = React.useRef(toothrow.findings);
  let solutions = React.useRef(toothrow.solutions);
  const [annotationState, dispatchAnnotations] = useImagesAnnotatorState();
  const classes = useStyles();
  const handleVisibility = (event, value) => {
    dispatchAnnotations({
      type: "SET_TOOTH_FILTER",
      payload: { tooth_name: toothrow.tooth_name, value },
    });
  };
  
  const toothAnnotations = React.useMemo(() => {
    if (annotationState.activeAnnotationList) {
      const result = annotationState.activeAnnotationList.filter(
        (an) => an.tooth_id === toothrow.id
      );

      return result;
    }
    return [];
  }, [annotationState.activeImage, annotationState.activeAnnotationList]);
  return (
    <Card
      className={classes.root}
      id={"t" + toothrow.tooth_name}
      variant="outlined"
    >
      <CardHeader
        className={classes.cardHeader}
        title={
          <Grid container>
            <div className={classes.toothDiv}>
              <img
                loading="lazy"
                src={teethAmerican["t" + toothrow.tooth_name]}
                className={classes.toothIcon}
                 alt={"tooth"}
              />
            </div>
            <Typography variant={"h5"}>
              <Box fontWeight={700}>Tooth: {toothrow.tooth_name}:&nbsp;</Box>
            </Typography>

            {toothrow.is_verified ? (
              <Typography variant={"h5"} className={classes.ok}>
                <Box>Verified</Box>
              </Typography>
            ) : (
              <Typography variant={"h5"} className={classes.unverified}>
                <Box>Unverified</Box>
              </Typography>
            )}
          </Grid>
        }
        action={
          <Switch
          defaultChecked
          onChange={handleVisibility}
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        }
      />
      <CardContent className={classes.cardContent}>
        <Grid>
          <Typography>
            <Box fontWeight="800">Findings:</Box>
          </Typography>
          <Typography className={classes.typographyRow}>
            {toothrow.findings.length === 0 ? (
              <Box>Nothing</Box>
            ) : (
              toothrow.findings.map((item) => (
                <Box>
                  |&nbsp; {item}
                  &nbsp;
                </Box>
              ))
            )}
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.idealSolutions}>
            <Box fontWeight="800">Solutions:</Box>
          </Typography>
          <Typography className={classes.typographyRow}>
            {toothrow.solutions.length === 0 ? (
              <Box>Nothing</Box>
            ) : (
              toothrow.solutions.map((item) => (
                <Box>
                  |&nbsp; {item}
                  &nbsp;
                </Box>
              ))
            )}
          </Typography>
        </Grid>

        <div className={classes.thumbnailContainer}>
          {annotationState.sharedImage &&
            toothAnnotations.map((ann) => (
              <ToothThumb
                sharedImage={annotationState.sharedImage}
                sharedImageScale={annotationState.sharedImageScale}
                keyAnnotation={ann}
              />
            ))}
        </div>
      </CardContent>
      <CardActions className={classes.btn}></CardActions>
    </Card>
  );
}
