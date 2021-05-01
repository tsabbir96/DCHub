import { Chip } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React from "react";
import mouth from "../../../../assets/diagnobot/mouth.svg";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { loadConditions } from "../../../context/diagnobot/Diagnobot_actions";
import { SET_CONDITIONS } from "../../../context/diagnobot/diagnobot_types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContent: {
    // width: '80%',
  },
  paragraph: {
    marginTop: theme.spacing(4),
    // maxWidth: '60%'
  },
  divider: {
    marginTop: theme.spacing(6),
  },
  btn: {
    marginLeft: "auto",
    margin: theme.spacing(2),
  },
  mouth_img: {
    width: "100%",
    // marginLeft:'auto',
    padding: theme.spacing(6),
  },
}));
const Symptoms = ({ value, setValue }) => {
  // VARIABLES
  const [diagnostate, dispatch] = useDiagnoState();


  const classes = useStyles();

  const [conditions, setConditions] = React.useState(null);

  //HANDLERS
  React.useEffect(() => {
    loadConditions().then((data) => setConditions(data));
  }, []);
  const handleBackClick = () => {
    setValue(value - 1);
  };
  const handleChange = (acchoices) => {
    //todo
    dispatch({ type: SET_CONDITIONS, payload: acchoices });
  };

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Tell us the conditions that you have</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Add as many symptoms as you can for the most accurate results.
              </Box>
            </Typography>
            {conditions ? (
              <Autocomplete
                className={classes.paragraph}
                freeSolo={false}
                multiple
                id="tags-outlined"
                options={conditions}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => handleChange(value)} // p
                defaultValue={diagnostate.conditions}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Conditions"
                    placeholder="Add condition(s)"
                  />
                )}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="default"
                      color="primary"
                      label={
                        <Typography style={{ whiteSpace: "normal" }}>
                          {option.name}
                        </Typography>
                      }
                      {...getTagProps({ index })}
                    />
                  ))
                }
              />
            ) : (
              <h5>Loading...</h5>
            )}

            <Typography color={"textSecondary"}>
              Please inter all your conditions
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <img className={classes.mouth_img} src={mouth} alt="illustration" />
          </Grid>
        </Grid>
      </CardContent>

      <Divider className={classes.divider} />

      <CardActions>
        <Button
          className={classes.btn}
          onClick={handleBackClick}
          variant={"outlined"}
          color={"primary"}
        >
          Back
        </Button>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant={"contained"}
          color={"primary"}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};

export default Symptoms;
