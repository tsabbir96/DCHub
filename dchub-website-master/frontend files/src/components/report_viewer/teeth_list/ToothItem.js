import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import { green, orange } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import t11 from "../../../assets/teeth/t11.svg";
import t12 from "../../../assets/teeth/t12.svg";
import t13 from "../../../assets/teeth/t13.svg";
import t14 from "../../../assets/teeth/t14.svg";
import t15 from "../../../assets/teeth/t15.svg";
import t16 from "../../../assets/teeth/t16.svg";
import t17 from "../../../assets/teeth/t17.svg";
import t18 from "../../../assets/teeth/t18.svg";
import t21 from "../../../assets/teeth/t21.svg";
import t22 from "../../../assets/teeth/t22.svg";
import t23 from "../../../assets/teeth/t23.svg";
import t24 from "../../../assets/teeth/t24.svg";
import t25 from "../../../assets/teeth/t25.svg";
import t26 from "../../../assets/teeth/t26.svg";
import t27 from "../../../assets/teeth/t27.svg";
import t28 from "../../../assets/teeth/t28.svg";
import t31 from "../../../assets/teeth/t31.svg";
import t32 from "../../../assets/teeth/t32.svg";
import t33 from "../../../assets/teeth/t33.svg";
import t34 from "../../../assets/teeth/t34.svg";
import t35 from "../../../assets/teeth/t35.svg";
import t36 from "../../../assets/teeth/t36.svg";
import t37 from "../../../assets/teeth/t37.svg";
import t38 from "../../../assets/teeth/t38.svg";
import t41 from "../../../assets/teeth/t41.svg";
import t42 from "../../../assets/teeth/t42.svg";
import t43 from "../../../assets/teeth/t43.svg";
import t44 from "../../../assets/teeth/t44.svg";
import t45 from "../../../assets/teeth/t45.svg";
import t46 from "../../../assets/teeth/t46.svg";
import t47 from "../../../assets/teeth/t47.svg";
import t48 from "../../../assets/teeth/t48.svg";
import { useAnnotatorState } from "../../context/annotator/AnnotatorContext";
import { updateToothStatus } from "../../context/submission/XrayReportActions";
import { ACTIONS } from "./TeethList";
import ToothThumb from "./ToothThumb";

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
    maxHeight: "100%",
  },
  toothDiv: {
    boxSizing: "border-box",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    height: 80,
    width: 60,
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
  thumbnailContainer: {
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

const teethInternational = {
  t18: t18,
  t17: t17,
  t16: t16,
  t15: t15,
  t14: t14,
  t13: t13,
  t12: t12,
  t11: t11,
  t21: t21,

  t22: t22,
  t23: t23,
  t24: t24,
  t25: t25,
  t26: t26,
  t27: t27,
  t28: t28,
  t38: t38,
  t37: t37,
  t36: t36,
  t35: t35,
  t34: t34,
  t33: t33,
  t32: t32,
  t31: t31,
  t41: t41,
  t42: t42,
  t43: t43,
  t44: t44,
  t45: t45,
  t46: t46,
  t47: t47,
  t48: t48,
};

export default function ToothItem({ toothrow, img, isVerified, dispatch }) {
  const [isVisible, setisVisible] = React.useState(
    true
  ); /** @TODO Link to annotation viewer */

  const [annotationState, dispatchAnnotations] = useAnnotatorState();
   // const [isVerified, setIsVerified] = React.useState(toothrow.is_verified);
  const classes = useStyles();
  let findings = React.useRef(toothrow.findings);
  let solutions = React.useRef(toothrow.solutions);
  const toothAnnotations = React.useMemo(() => {
    const result = annotationState.annotations.filter((an) => {
      return an.tooth_id === toothrow.id;
    });
    return result;
  }, [annotationState.annotations]);

  const handleVisibility = (event, value) => {
    dispatchAnnotations({
      type: "SET_TOOTH_FILTER",
      payload: { tooth_name: toothrow.tooth_name, value },
    });
  };

  const handleChangeConditions = (array) => {
    findings.current = array;
    dispatch({
      type: ACTIONS.SET_TOOTH_ISSUES,
      toothName: toothrow.tooth_name,
      issues: array.length,
    });
  };

  const handleChangeSolutions = (array) => {
    solutions.current = array;
  };

  const handleVerify = async () => {
    const updateResult = await updateToothStatus(
      toothrow.id,
      true,
      findings.current,
      solutions.current,
      toothAnnotations
    );
    if (updateResult.status === 200) {
      dispatch({
        type: ACTIONS.SET_TOOTH_VERIFICATION,
        toothName: updateResult.data.tooth_name,
        verified: updateResult.data.is_verified,
      });
    }
  };

  const onAddAnnotation = () => {
    let text_label = "newLabel";
    dispatchAnnotations({
      type: "ADD_TOOTH_ANNOTATION",
      payload: {
        tooth_id: toothrow.id,
        tooth_name: toothrow.tooth_name,
        id: String(Date.now()),
        x: 20,
        y: 20,
        width_rect: 20,
        height_rect: 20,
        text_label: text_label,
        rotation_rect: 0,
      },
    });
  };

  return (
    <Card
      id={"t" + toothrow.tooth_name}
      className={classes.root}
      variant="outlined"
    >
      <CardHeader
        title={
          <Grid container>
            <Grid item>
              <div className={classes.toothDiv}>
                <img
                  className={classes.toothIcon}
                  loading="lazy"
                  src={teethAmerican["t" + toothrow.tooth_name]}
                  alt="src_img"
                />
              </div>
            </Grid>
            <Typography variant={"h5"}>
              <Box fontWeight={700}>
                Tooth&nbsp;{toothrow.tooth_name}:&nbsp;
              </Box>
            </Typography>

            {isVerified ? (
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
      <CardContent>
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

        <Autocomplete
          freeSolo
          fullWidth
          className={classes.text}
          multiple
          id="tags-outlined"
          options={issuesList}
          defaultValue={toothrow.findings}
          onChange={(event, value) => handleChangeConditions(value)}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="outlined"
              color={"secondary"}
              label="Radiographic Findings"
              placeholder="+ Detected issues"
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                color={"secondary"}
                label={
                  <Typography style={{ whiteSpace: "normal" }}>
                    {option}
                  </Typography>
                }
                {...getTagProps({ index })}
              />
            ))
          }
        />
        <Autocomplete
          freeSolo
          className={classes.text}
          multiple
          id="tags-outlined"
          options={treatments}
          defaultValue={toothrow.solutions}
          onChange={(event, value) => handleChangeSolutions(value)}
          getOptionLabel={(option) => option}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Ideal solutions"
              placeholder="+ solution"
              color={"secondary"}
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                color={"secondary"}
                label={
                  <Typography style={{ whiteSpace: "normal" }}>
                    {option}
                  </Typography>
                }
                {...getTagProps({ index })}
              />
            ))
          }
        />
      </CardContent>
      <CardActions className={classes.btn}>
        <Button
          color={"secondary"}
          onClick={onAddAnnotation}
          variant={"outlined"}
        >
          Annotate
        </Button>
        <Button color={"primary"} onClick={handleVerify} variant={"contained"}>
          Verify
        </Button>
      </CardActions>
    </Card>
  );
}

const issuesList = [
  "Periodontal bone loss",
  "Caries",
  "Cavity",
  "Periapical lesion",
  "Residual root",
  "Crown",
  "Implant",
  "Primary dentition",
  "Third molar position",
  "Ectopic and supernumerary teeth",
  "Missing teeth",
  "Filling",
  "Endodontically treated teeth",
  "Post",
  "Soft tissue impaction",
  "Partial boney impaction",
  "Full boney impaction",
];
const treatments = [
  "Bridge",
  "Crown",
  "filling",
  "Root canal treatment",
  "Scale and polish",
  "Braces",
  "Wisdom tooth removal",
  "Dental implant",
  "Dentures",
  "Teeth whitening",
  "Veneer",
  "Extraction",
  "Nightguard",
  "Composite bonding",
  "Oral surgery",
  "Tooth Grinding",
  "Gum Surgery",
  "Bone Surgery",
  "Teeth Cleaning",
];
