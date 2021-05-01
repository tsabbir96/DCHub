import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import ButtonBase from "@material-ui/core/ButtonBase";
import { green, orange } from "@material-ui/core/colors";
import Chip from "@material-ui/core/Chip";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import t11 from "../../../../assets/teeth/t18.svg";
import { useImageConfig } from "../../../report_viewer/main_panel/ImageConfigContext";
import { useImageMouthConfig } from "../../ImagesMouthConfigContext";


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
  },
}));
export default function ToothImageRowReadOnly({
  toothrow,
  img,

  
}) {
  const [isVisible, setisVisible] = React.useState(true);
  const [state, dispatch] = useImageMouthConfig();
  const classes = useStyles();
 
  const handleClick = () => {
    setisVisible(!isVisible);
  };
  const bullet = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        className={classes.cardHeader}
        title={
          <Grid container>
            <div className={classes.toothDiv}>
              <img className={classes.toothIcon} src={t11} alt={"tooth"} />
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
          //todo
          // onClick={this.renderFilterRequest()}
          <ButtonBase onClick={handleClick}>
            {isVisible ? (
              <VisibilityOffTwoToneIcon />
            ) : (
              <VisibilityTwoToneIcon />
            )}
          </ButtonBase>
        }
      />
      <CardContent className={classes.cardContent}>
        <Grid>
          <Typography >
            <Box fontWeight='800'>Findings:</Box>
          </Typography>
          <Typography className={classes.typographyRow}>
            {toothrow.findings.length===0?
              (
                <Box>Nothing</Box>
              ): 
            toothrow.findings.map((item) => (
              <Box>
                |&nbsp; {item}
                &nbsp;
              </Box>
            ))}
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.idealSolutions}>
            <Box fontWeight='800'>Solutions:</Box>
          </Typography>
            <Typography className={classes.typographyRow}>
            {
            
            
            toothrow.solutions.length===0?
              (
                <Box>Nothing</Box>
              ): 
            toothrow.solutions.map((item) => (

              <Box>
              |&nbsp; {item}
                &nbsp;
              </Box>
                     ))}
            </Typography>
   
        </Grid>

        <img
          className={classes.toothimg}
          style={{
            filter: `contrast(${state.contrast}%)  brightness(${state.brightness}%) invert(${state.invert})`,
          }}
          src={img}
          alt="default"
        />
        <img
          className={classes.toothimg}
          style={{
            filter: ` invert(1)`,
          }}
          src={img}
          alt="negative"
        />
        <img
          className={classes.toothimg}
          style={{
            filter: `  brightness(50%) `,
          }}
          src={img}
          alt="2xbrightness"
        />
        <img
          className={classes.toothimg}
          style={{
            filter: `  contrast(200%) `,
          }}
          src={img}
          alt="2xcontrast"
        />
      </CardContent>
      <CardActions className={classes.btn}></CardActions>
    </Card>
  );
}
