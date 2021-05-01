import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import React from "react";
import { useHistory, useLocation } from "react-router";
import bitewing from "../../../assets/xray/bitewing_compressed.webp";
import conebeam from "../../../assets/xray/conebeam_compressed.webp";
import fullmouth from "../../../assets/xray/fulllmouth_compressed.webp";
import pano from "../../../assets/xray/pano_xray_compressed.webp";
import { useAlertSnackbarContext } from "../../context/AlertSnackbarContext";
import { get_patient_name } from "../../context/profile_data/ProfileDataActions";
import {
  update_submission_status,
  update_xray_image
} from "../../context/submission/SubmissionsActions";
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
  container: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.background.default,
  },
  note: {
    marginTop: theme.spacing(8),
  },
}));
export default function UploadXray(props) {
  const classes = useStyles();
  const location = useLocation();

  const [isDisabled, setisDisabled] = React.useState(true);
  const [xray, setXray] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [patientInfo, setpatientInfo] = React.useState("");
  const [showBtn, setShowBtn] = React.useState(false);
  const toUpload = React.useRef();
  const [loading, setLoading] = React.useState(true);
  const { open } = useAlertSnackbarContext();
  const history = useHistory();

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
  const handleClick = () => {
    setisDisabled(true);
    const xray_image = toUpload.current;
    update_xray_image(location.state.xrayId, "PENDING", xray_image).then(
      (res) => {
        if (res.status === 200) {
          update_submission_status(location.state.submissionId, "PENDING").then(
            (res02) => {
              if (res02.status === 200) {
                open("success", "Login sucessful");
                history.push("/profile/Admins");
              } else {
                open("error", "error updating report");
                setisDisabled(false);
              }
            }
          );
        } else {
          open("error", "error updating report");
          setisDisabled(false);
        }
      }
    );
  };

  React.useEffect(() => {
 
    get_patient_name(location.state.userId).then((res) => {
      if (res.status === 200) {
        setpatientInfo(res.data[0]);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className={classes.container}>
        <Container>
          <Card className={classes.root} variant="outlined">
            <CardContent className={classes.cardContent}>
              {location.state.fullData.xray.dr_email === "" ? (
                <h4>
                  this person doesn't have an xray, and didn't visit a dentist
                  before
                </h4>
              ) : (
                <>
                  <Grid container>
                    <Grid direction={"column"} xs={6}>
                      <Typography variant={"h6"}>
                        <Box fontWeight={700}>Upload xray</Box>
                      </Typography>
                      <Typography className={classes.paragraph}>
                        <Box textAlign={"justify"}>
                          Please upload xray for{" "}
                          {patientInfo.first_name + " " + patientInfo.last_name}
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid direction={"column"} xs={6} alignItems={"center"}>
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
                                  File type not supported! try :png, jpg, jpeg,
                                  webp
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
                    </Grid>
                  </Grid>
                  <Divider className={classes.divider} />

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
                        <img
                          className={classes.exampleImg}
                          src={pano}
                          alt="pano"
                        />
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

                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    className={classes.note}
                  >
                    Are you interested to join DentistConsultationHub as a
                    network dentist? <br /> Please send us an email to
                    Contact@DentistConsultationahub.com
                  </Typography>
                </>
              )}
            </CardContent>

            <Divider className={classes.divider} />
            <CardActions>
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
        </Container>
      </div>
    );
  }
}
