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
import React, { useState } from "react";
import down from "../../../../assets/diagnobot/down.jpg";
import front from "../../../../assets/diagnobot/front.png";
import left from "../../../../assets/diagnobot/left.jpg";
import LowBite from "../../../../assets/diagnobot/lowBite.jpg";
import right from "../../../../assets/diagnobot/right.jpg";
import up from "../../../../assets/diagnobot/up.png";
import { useAlertSnackbarContext } from "../../../context/AlertSnackbarContext";
import { useDiagnoState } from "../../../context/diagnobot/DiagnobotContext";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
import {
  create_images_bundle,
  create_images_report,
  update_submission_imagesBundle
} from "../../../context/submission/SubmissionsActions";
import BackDialogImages from "./BackDialogImages";
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
    margin: theme.spacing(0, "auto"),
    maxWidth: "360px",
    marginTop: theme.spacing(2),
    alignItems: "center",
  },
  divImgHolderFront: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${front}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
  },
  divImgHolderUp: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${up}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
  },
  divImgHolderDown: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${down}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
  },

  divImgHolderLeft: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${left}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
  },
  divImgHolderRight: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${right}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
  },
  divImgHolderLowBite: {
    background: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url("${LowBite}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "400px",
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
  gridItem: {
    margin: theme.spacing(6, 0),
  },
}));

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
      report_type: "IMG",
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
      report_type: "IMG",
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
      report_type: "IMG",
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
      report_type: "IMG",
    },
  ],
  update_date: null,
  remarks_and_summ: "",
};

const Images = ({ value, setValue, type }) => {
  //###########################################
  //DECLARING VARIABLES
  //###########################################

  const [diagnostate, dispatch] = useDiagnoState();
  const [profileData, dispatchProfileData] = useProfileData();
  const [openDialog, setOpenDialog] = React.useState(false);

  const [isDisabled, setisDisabled] = useState(false);
  const [images, setImages] = useState({
    closedup: null,
    front: null,
    left: null,
    openeddown: null,
    openedup: null,
    right: null,
  });
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const classes = useStyles();
  const { open } = useAlertSnackbarContext();

  const toUploadopened_up = React.useRef();
  const toUploadclosed_up = React.useRef();
  const toUploadclosed_left = React.useRef();
  const toUploadclosed_right = React.useRef();
  const toUploadclosed_front = React.useRef();
  const toUploadopened_down = React.useRef();

  //###########################################
  //HANDLE SUBMIT BUTTON
  //###########################################
  const handleClick = () => {
    setisDisabled(true);
    //preparing variables
    const opened_up = toUploadopened_up.current;
    const closed_up = toUploadclosed_up.current;
    const closed_left = toUploadclosed_left.current;
    const closed_right = toUploadclosed_right.current;
    const closed_front = toUploadclosed_front.current;
    const opened_down = toUploadopened_down.current;
    const owner_id = profileData.profile.user.id;
    const verifier_id = "";
    const nbr_issues = 0;
    const status = "PENDING";
    const verification_date = "";
    if (
      opened_up &&
      closed_up &&
      closed_left &&
      closed_right &&
      closed_front &&
      opened_down
    ) {
      create_images_report(report).then((data) => {
        if (data.status === 201) {
          create_images_bundle(
            opened_up,
            closed_up,
            closed_left,
            closed_right,
            closed_front,
            opened_down,
            data.data.id,
            owner_id,
            verifier_id,
            nbr_issues,
            status,
            verification_date
          ).then((data) => {
            if (data.status === 201) {
              if (diagnostate.isXrayMissing) {
                if (profileData.profile.is_subscribed) {
                  update_submission_imagesBundle(
                    diagnostate.submissionId,
                    data.data.id,
                    "MISSING_XRAY"
                  ).then((data) => {
                    if (data.status === 200) {
                      setisDisabled(false);

                      setValue(value + 1);
                    } else {
                      //todo show error
                      setisDisabled(false);
                    }
                  });
                } else {
                  update_submission_imagesBundle(
                    diagnostate.submissionId,
                    data.data.id,
                    "MISSING_XRAY"
                  ).then((data) => {
                    if (data.status === 200) {

                      setisDisabled(false);

                      setValue(value + 1);


                      // //TODO UPDATE   EVAL SLOTS
                      // switch (type) {
                      //   case "LIMITED_EVALUATION":
                      //     decreaseLimitedEvalSlots(profileData.profile.id, profileData.profile.limited_eval_slots-1).then((resSlots) => {
                      //       if (resSlots.status === 200) {
                      //         setisDisabled(false);

                      //         setValue(value + 1);
                      //       } else {
                      //         //todo show error
                      //         setisDisabled(false);
                      //       }
                      //     });
                      //     // code block
                      //     break;
                      //   case "CONSULTATION":
                      //     // code block

                      //     decreaseComprehensiveEvalSlots(profileData.profile.id, profileData.profile.comprehensive_eval_slots-1).then((resSlots) => {
                      //       if (resSlots.status === 200) {
                      //         setisDisabled(false);

                      //         setValue(value + 1);
                      //       } else {
                      //         //todo show error
                      //         setisDisabled(false);
                      //       }
                      //     });

                      //     break;
                      //   default:
                      //   // code block
                      // }
                    } else {
                      //todo show error
                      setisDisabled(false);
                    }
                  });
                }
              } else {
                //xray is provided

                if (profileData.profile.is_subscribed) {
                  update_submission_imagesBundle(
                    diagnostate.submissionId,
                    data.data.id,
                    "PENDING"
                  ).then((data) => {
                    if (data.status === 200) {
                      // switch (type) {
                      //   case "LIMITED_EVALUATION":
                      //     decreaseLimitedEvalSlots(profileData.profile.id, profileData.profile.limited_eval_slots-1).then((resSlots) => {
                      //       if (resSlots.status === 200) {
                      //         setisDisabled(false);

                      //         setValue(value + 1);
                      //       } else {
                      //         //todo show error
                      //         setisDisabled(false);
                      //       }
                      //     });
                      //     // code block
                      //     break;
                      //   case "CONSULTATION":
                      //     // code block

                      //     decreaseComprehensiveEvalSlots(profileData.profile.id, profileData.profile.comprehensive_eval_slots-1).then((resSlots) => {
                      //       if (resSlots.status === 200) {
                      //         setisDisabled(false);

                      //         setValue(value + 1);
                      //       } else {
                      //         //todo show error
                      //         setisDisabled(false);
                      //       }
                      //     });

                      //     break;
                      //   default:
                      //   // code block
                      // }
                    } else {
                      //todo show error
                      setisDisabled(false);
                    }
                  });
                } else {
                  //todo update slots
                  update_submission_imagesBundle(
                    diagnostate.submissionId,
                    data.data.id,
                    "PENDING"
                  ).then((data) => {
                    if (data.status === 200) {
                      setisDisabled(false);

                      setValue(value + 1);
                    } else {
                      //todo show error
                      setisDisabled(false);
                    }
                  });
                }
              }
            } else {
              setisDisabled(false);
            }
          });
        }
      });
    } else {
      setisDisabled(false);

      open("error", "please upload all images");
    }
  };

  //###########################################
  //HANDLE BACK BUTTON
  //###########################################
  const handleBackClick = () => {
    setOpenDialog(true);
  };

  //###########################################
  //handleClose
  //###########################################
  const handleClose = (value) => {
    setOpenDialog(false);
  };
  //###########################################
  //HANDLE CHANGE IMAGE
  //###########################################

  const handleImageChange = (evt) => {
    const ALLOWED = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
    const selected = evt.target.files[0];
    if (selected && ALLOWED.includes(selected.type)) {
      switch (evt.target.id) {
        case "image01":
          toUploadopened_up.current = evt.target.files[0];
          break;
        case "image02":
          toUploadclosed_front.current = evt.target.files[0];
          break;

        case "image03":
          toUploadopened_down.current = evt.target.files[0];
          break;

        case "image04":
          toUploadclosed_left.current = evt.target.files[0];
          break;

        case "image05":
          toUploadclosed_right.current = evt.target.files[0];
          break;

        case "image06":
          toUploadclosed_up.current = evt.target.files[0];
          break;

        default:
          break;
      }
      setError(false);
      let reader = new FileReader();
      reader.readAsDataURL(selected);
      reader.onloadend = () => {
        switch (evt.target.id) {
          case "image01":
            return setImages({ ...images, closedup: reader.result });

          case "image02":
            return setImages({ ...images, front: reader.result });
          case "image03":
            return setImages({ ...images, left: reader.result });

          case "image04":
            return setImages({ ...images, openeddown: reader.result });
          case "image05":
            return setImages({ ...images, openedup: reader.result });
          case "image06":
            return setImages({ ...images, right: reader.result });

          default:
            return;
        }
      };
    } else {
      setError(true);
    }
  };

  const handleShowBtn = (isShown) => {
    if (!isDisabled) {
      setShowBtn(isShown);
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
              <Box fontWeight={700}>Upload your upper teeth image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.closedup && (
                <div className={classes.divImgHolderUp}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your upper teeth image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image01"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image01">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.closedup && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.closedup}
                    alt={"closedup"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image01"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image01">
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

        {/* image02 */}

        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload your front bite image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.front && (
                <div className={classes.divImgHolderFront}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your front bite image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image02"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image02">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.front && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.front}
                    alt={"front"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image02"
                        front
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image02">
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

        {/* image03
         */}

        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload your lower teeth image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.left && (
                <div className={classes.divImgHolderDown}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your lower teeth image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image03"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image03">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.left && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.left}
                    alt={"left"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image03"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image03">
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

        {/* image04 */}

        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload your left bite image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.openeddown && (
                <div className={classes.divImgHolderLeft}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your left bite image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image04"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image04">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.openeddown && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.openeddown}
                    alt={"openeddown"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image04"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image04">
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

        {/* image05 */}

        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload your right bite image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.openedup && (
                <div className={classes.divImgHolderRight}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your right bite image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image05"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image05">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.openedup && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.openedup}
                    alt={"openedup"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image05"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image05">
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

        {/* image06
         */}

        <Grid container>
          <Grid direction={"column"} xs={6}>
            <Typography variant={"h6"}>
              <Box fontWeight={700}>Upload your bite image</Box>
            </Typography>
            <Typography className={classes.paragraph}>
              <Box textAlign={"justify"}>
                Make sure you use your flashlight, and the image is not blurry
              </Box>
            </Typography>
          </Grid>
          <Grid direction={"column"} xs={6} alignItems={"center"}>
            <div className={classes.uploadSection}>
              {!images.right && (
                <div className={classes.divImgHolderLowBite}>
                  <CloudUploadIcon className={classes.icon} />
                  {!error && (
                    <Typography color={"textSecondary"}>
                      <Box textAlign={"center"}>
                        Please upload your bite image
                      </Box>
                    </Typography>
                  )}
                  {error && (
                    <Typography className={classes.errorText}>
                      <Box textAlign={"center"}>
                        File type not supported! try :png, jpg, jpeg, webp
                      </Box>
                    </Typography>
                  )}
                  <div>
                    <input
                      style={{ display: "none" }}
                      id="image06"
                      accept={"image/*"}
                      onChange={handleImageChange}
                      type="file"
                    />
                    <label htmlFor="image06">
                      <Button
                        color="primary"
                        variant="outlined"
                        component="span"
                      >
                        Upload your Image
                      </Button>
                    </label>
                  </div>
                </div>
              )}
              {images.right && (
                <div
                  className={classes.imgdiv}
                  onMouseEnter={() => handleShowBtn(true)}
                  onMouseLeave={() => handleShowBtn(false)}
                >
                  <img
                    className={classes.imgToUpload}
                    src={images.right}
                    alt={"right"}
                  />
                  {showBtn && (
                    <React.Fragment>
                      <input
                        style={{ display: "none" }}
                        id="image06"
                        accept={"image/*"}
                        onChange={handleImageChange}
                        type="file"
                      />
                      <label htmlFor="image06">
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

        <BackDialogImages
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
          Finish
        </Button>
      </CardActions>
    </Card>
  );
};
export default Images;
