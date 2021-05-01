import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import red from "@material-ui/core/colors/red";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import copy from "copy-to-clipboard";
import React, { useState } from "react";
import how_cc from "../../../../assets/how_cc_email.webp";
import bitewing from "../../../../assets/xray/bitewing_compressed.webp";
import conebeam from "../../../../assets/xray/conebeam_compressed.webp";
import fullmouth from "../../../../assets/xray/fulllmouth_compressed.webp";
import pano from "../../../../assets/xray/pano_xray_compressed.webp";
import { useAlertSnackbarContext } from "../../../context/AlertSnackbarContext";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import {
  SET_IS_XRAY_MISSING,
  SET_XRAY
} from "../../../context/diagnobot/diagnobot_types";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import {
  create_xray,
  create_xray_report,
  create_xray_without_img,
  update_submission_xray
} from "../../../context/submission/SubmissionsActions";
import BackDialogXray from "./BackDialogXray";

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
  uploadSection: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    borderStyle: "dashed",
    borderColor: theme.palette.text.disabled,
    borderWidth: "2px",
    margin: theme.spacing(0, 6),
    marginTop: theme.spacing(2),
    // height: "400px",
    alignItems: "center",
  },
  icon: {
    height: "60px",
    width: "60px",
    margin: theme.spacing(4),
    color: theme.palette.text.disabled,
  },
  input: {
    display: "none",
  },
  errorText: {
    color: red[500],
  },
  imgToUpload: {
    maxWidth: "100%",
    "&:hover": {
      filter: "grayscale(2.2)",
    },
  },
  hiddenBtn: {
    position: "absolute",
    left: "inherit",
    transform: "translateX(-100%) translateY(100%)",
  },
  imgdiv: {
    "&:hover": {
      filter: "grayscale(2.2)",
    },
  },
  allowGrid: {
    marginTop: theme.spacing(4),
  },
  allowTextField: {
    marginTop: theme.spacing(2),
  },
  titleCanUse: {
    marginTop: theme.spacing(8),
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: "18px",
    marginLeft: theme.spacing(2),
  },
  exampleImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    padding: theme.spacing(2),
  },
  descriptionXray: {
    marginTop: theme.spacing(2),
    fontSize: "20px",
  },
  leftCard: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    borderColor: "gray",
  },
   
  rowGrid: {
    marginTop: theme.spacing(6),
  },
  requestform: {
    // fontFamily:'Arial, Helvetica, Gill Sans, Lucida, Helvetica Narrow, sans-serif',
    lineHeight: "200%",
    textAlign: "justify",
  },
  gridForm: {
    padding: theme.spacing(0, 4),
  },
  titlestep01: {
    fontWeight: "700",
    fontSize: "18px",
    marginBottom: theme.spacing(8),
  },
  email_img: {
    width: "100%",
    height: "100%",
  },
}));
const isValid = (inputText) => {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
const report = {
  quadrants: [
    {
      teeth_array: [
        {
          position: [],
          tooth_name: "1",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },

        {
          position: [],
          tooth_name: "2",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "3",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "4",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "5",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "6",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "7",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "8",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
      ],
      quadrant_info_name: "URQ",
      report_type: "XRAY",
    },

    {
      teeth_array: [
        {
          position: [],
          tooth_name: "9",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },

        {
          position: [],
          tooth_name: "10",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "11",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "12",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "13",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "14",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "15",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "16",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
      ],
      quadrant_info_name: "ULQ",
      report_type: "XRAY",
    },

    {
      teeth_array: [
        {
          position: [],
          tooth_name: "17",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },

        {
          position: [],
          tooth_name: "18",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "19",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "20",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "21",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "22",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "23",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "24",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
      ],
      quadrant_info_name: "LLQ",
      report_type: "XRAY",
    },

    {
      teeth_array: [
        {
          position: [],
          tooth_name: "25",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },

        {
          position: [],
          tooth_name: "26",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "27",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "28",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "29",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "30",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "31",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
        {
          position: [],
          tooth_name: "32",
          remarks: "",
          findings: [],
          solutions: [],
          is_verified: false,
        },
      ],
      quadrant_info_name: "LRQ",
      report_type: "XRAY",
    },
  ],
  update_date: null,
  remarks_and_summ: "",
};

const generateMessage = (profile) => {
  return `  I, 
  ${profile.last_name}  ${profile.last_name}
  DOB: ${profile.birthday}, authorize any of my dental radiographs and
  clinical photos available to be released to
  DentistConsultationHub for an AI evaluation. If there are
  any questions or concern, please contact me at
  this email. `;
};
const Xray = ({ value, setValue }) => {
  //###########################################
  //DECLARING VARIABLES
  //###########################################
  const [diagnostate, dispatch] = useDiagnoState();
  const [profileData, dispatchProfileData] = useProfileData();
  const [isDisabled, setisDisabled] = useState(true);
  const [xray, setXray] = useState(null);
  const [error, setError] = useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const classes = useStyles();
  const toUpload = React.useRef();
  // const [missingXray, setMissingXray] = useState(false);
  const [contactDr, setContactDr] = useState(false);
  const [noXray, setNoXray] = useState(false);
  const [dr_email, setDrEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [type, setType] = React.useState("provide");
  const message = generateMessage(profileData.profile);

  const { open } = useAlertSnackbarContext();

  const handleCopy = () => {
    copy(message);
    open("success", "Copied");
  };

  const handleCheck = (event) => {
    setType(event.target.value);
    switch (event.target.value) {
      case "provide":
        setNoXray(false);
        setContactDr(false);
        setisDisabled(true);

        break;
      case "doctor":
        setContactDr(true);
        setNoXray(false);
        setisDisabled(true);

        break;
      case "missing":
        setNoXray(true);
        setContactDr(false);
        setisDisabled(false);

        break;

      default:
        break;
    }
  };
  //###########################################
  //HANDLE SUBMIT CLICK
  //###########################################
  const handleClick = () => {
    if (contactDr || noXray) {
      handleMissingXrayClick();
    } else {
      dispatch({ type: SET_XRAY, payload: xray });
      const owner_id = profileData.profile.user.id;
      const verification_date = "";
      const status = "PENDING";
      const nbr_issues = 0;
      const preliminary_results = "{}";
      const verifier_id = "";
      const xray_image = toUpload.current;

      setisDisabled(true);

      create_xray_report(report).then((data) => {
        if (data.status === 201) {
          create_xray(
            xray_image,
            preliminary_results,
            nbr_issues,
            data.data.id,
            owner_id,
            status,
            verification_date,
            verifier_id
          ).then((data) => {
            if (data.status === 201) {
              update_submission_xray(
                diagnostate.submissionId,
                data.data.id
              ).then((data) => {
                if (data.status === 200) {
                  setValue(value + 1);
                } else {
                  setisDisabled(false);
                }
              });
            } else {
              setisDisabled(false);
            }
          });
        }
      });
    }
  };
  //###########################################
  //  handleMissingXrayClick
  //###########################################
  const handleMissingXrayClick = () => {
    dispatch({ type: SET_XRAY, payload: xray });
    const owner_id = profileData.profile.user.id;
    const verification_date = "";
    const status = "MISSING_XRAY";
    const nbr_issues = 0;
    const preliminary_results = "{}";
    const verifier_id = "";
    const xray_upload_request = "";
    setisDisabled(true);

    create_xray_report(report).then((data) => {
      if (data.status === 201) {
        create_xray_without_img(
          preliminary_results,
          nbr_issues,
          data.data.id,
          owner_id,
          status,
          verification_date,
          verifier_id,
          dr_email
          // xray_upload_request
        ).then((data02) => {
          if (data02.status === 201) {
            dispatch({ type: SET_IS_XRAY_MISSING, payload: true });
            update_submission_xray(
              diagnostate.submissionId,
              data02.data.id
            ).then((data03) => {
              if (data03.status === 200) {
                setValue(value + 1);
              } else {
                setisDisabled(false);
              }
            });
          } else {
            setisDisabled(false);
          }
        });
      }
    });
  };

  //###########################################
  //HANDLE  BACK CLICK
  //###########################################
  const handleBackClick = () => {
    setOpenDialog(true);
  };

  const handleClose = (value) => {
    setOpenDialog(false);
  };

  //###########################################
  //HANDLE IMAGE CHANGE
  //###########################################
  const handleImageChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];
    if (selected && ALLOWED.includes(selected.type)) {
      toUpload.current = evt.target.files[0];
      setError(false);
      let reader = new FileReader();
      reader.readAsDataURL(selected);
      reader.onloadend = () => {
        setXray(reader.result);
        // setnoImgError(false);
        // setisUnique(true);
        setisDisabled(false);
      };
    } else {
      setError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmailError(!isValid(e.target.value));
    if (isValid(e.target.value)) {
      setisDisabled(false);
      setDrEmail(e.target.value);
    } else {
      setisDisabled(true);
    }
  };
  //###########################################
  //RETURN FUNCTION
  //###########################################
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload any xray you have</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                we need any xray to make a comprehensive analysis, if your xray
                is with your doctor, please authorize us to retrieve it for you
              </Box>
            </Typography>

            {profileData.profile.user.account_type.toLowerCase() ===
              "patient" && (
              <Grid
                className={classes.allowGrid}
                container
                alignItems="center"
                item
              >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Method</FormLabel>
                  <RadioGroup
                    aria-label="method"
                    name="method"
                    value={type}
                    onChange={handleCheck}
                  >
                    <FormControlLabel
                      value="provide"
                      control={<Radio />}
                      label="I have my xray"
                    />
                    <FormControlLabel
                      value="doctor"
                      control={<Radio />}
                      label="My xray is with my dentist, I authorize you to retrieve it"
                    />
                    <FormControlLabel
                      value="missing"
                      control={<Radio />}
                      label="I don't have an xray"
                    />
                  </RadioGroup>
                </FormControl>

                {contactDr && (
                  <TextField
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                    error={emailError}
                    className={classes.allowTextField}
                    variant="outlined"
                    fullWidth
                    type="email"
                    required
                    label="Your doctor's email"
                  />
                )}
              </Grid>
            )}
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            {!contactDr && !noXray && (
              <div className={classes.uploadSection}>
                {!xray && (
                  <>
                    <CloudUploadIcon className={classes.icon} />
                    {!error && (
                      <Typography color={"textSecondary"}>
                        <Box textAlign={"center"}>
                          Drag and drop your xray or click upload
                        </Box>
                      </Typography>
                    )}
                    {error && (
                      <Typography
                        // color = {"textSecondary"}
                        className={classes.errorText}
                      >
                        <Box textAlign={"center"}>
                          File type not supported! try :png, jpg, jpeg, webp
                        </Box>
                      </Typography>
                    )}
                    <div>
                      <input
                        style={{ display: "none" }}
                        id="contained-button-file"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="contained-button-file">
                        <Button color="primary" component="span">
                          Upload your Xray
                        </Button>
                      </label>
                    </div>
                  </>
                )}
                {xray && (
                  <div
                    className={classes.imgdiv}
                    onMouseEnter={() => setShowBtn(true)}
                    onMouseLeave={() => setShowBtn(false)}
                  >
                    <img
                      className={classes.imgToUpload}
                      src={xray}
                      alt="your_xray"
                    />
                    {showBtn && (
                      <React.Fragment>
                        <input
                          style={{ display: "none" }}
                          id="contained-button-file"
                          accept={"image/*"}
                          onChange={handleImageChange}
                          type="file"
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            className={classes.hiddenBtn}
                            variant={"contained"}
                            color={"primary"}
                            component="span"
                          >
                            change
                          </Button>
                        </label>
                      </React.Fragment>
                    )}
                  </div>
                )}
              </div>
            )}
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        {contactDr ? (
          <Grid container direction="column">
            <Grid container className={classes.rowGrid} item>
              <Grid container className={classes.gridForm} item xs={6}>
                <Card className={classes.leftCard} variant="outlined">
                  <Typography className={classes.requestform}>
                    {message}
                  </Typography>
                </Card>
              </Grid>
              <Grid container direction="column" item xs={6}>
                <Typography className={classes.titlestep01}>
                  1. Copy the dental record release form
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleCopy}
                  startIcon={<FileCopyIcon />}
                  color="primary"
                >
                  Copy to clipboard
                </Button>
              </Grid>
            </Grid>

            <Grid container item className={classes.rowGrid}>
              <Grid container className={classes.gridForm} item xs={6}>
                <Card className={classes.leftCard} variant="outlined">
                  <img
                    className={classes.email_img}
                    src={how_cc}
                    alt="how_cc"
                  />
                </Card>
              </Grid>
              <Grid container direction="column" item xs={6}>
                <Typography className={classes.titlestep01}>
                  2. CC our email: contact@dentistconsultationhub.com <br />
                  with your dentist's email and then click send
                </Typography>
               </Grid>
            </Grid>

           
          </Grid>
        ) : null}
        {!contactDr && !noXray ? (
          <>
            <Typography className={classes.titleCanUse}>
              What dental x-rays we can use?
            </Typography>
            <Grid container>
              <Grid container item>
                <Grid container item xs={5}>
                  <img
                    className={classes.exampleImg}
                    src={fullmouth}
                    alt="full_mouth_xray"
                  />
                </Grid>
                <Grid container xs={7} item>
                  <Typography
                    className={classes.descriptionXray}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<p><span style="color: #4360D6;">Full Mouth X-ray:</span> Used for evaluation of dental conditions. It can be used for detection of oral pathologies, root infections, teeth extraction, dental implants and detection of dental caries.</p>',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid container item xs={5}>
                  <img className={classes.exampleImg} src={pano} alt="pano" />
                </Grid>
                <Grid container xs={7} item>
                  <Typography
                    className={classes.descriptionXray}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<p><span style="color: #4360D6;">Panoramic X-ray:</span> Used for overall evaluation of dental conditions. It can be used for detection of oral pathologies, root infections, teeth extraction, dental implants and large dental caries.</p>',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid container item xs={5}>
                  <img
                    className={classes.exampleImg}
                    src={bitewing}
                    alt="bitewing"
                  />{" "}
                </Grid>
                <Grid container xs={7} item>
                  <Typography
                    className={classes.descriptionXray}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<p><span style="color: #4360D6;">Bitewing X-rays:</span> Ideal for detection of both small and large dental cavities, recurrent decay, leaky fillings, open contacts and filling overhang.</p>',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container item>
                <Grid container item xs={5}>
                  <img
                    className={classes.exampleImg}
                    src={conebeam}
                    alt="conebeam"
                  />
                </Grid>
                <Grid container xs={7} item>
                  <Typography
                    className={classes.descriptionXray}
                    dangerouslySetInnerHTML={{
                      __html:
                        '<p><span style="color: #4360D6;">3D Cone Beam CT Scan:</span> The best x-ray for evaluation of dental implant placement or removal of impacted teeth. The x-ray allows AI to detect the height and width of bone present.</p>',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : null}

        <BackDialogXray
          value={value}
          setValue={setValue}
          handleClose={handleClose}
          open={openDialog}
        />
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
          disabled={isDisabled ? true : false}
        >
          Next
        </Button>
      </CardActions>
    </Card>
  );
};
export default Xray;
