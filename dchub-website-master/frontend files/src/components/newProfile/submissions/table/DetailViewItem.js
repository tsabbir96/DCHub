import { Box, Tooltip } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import { amber, green, lightGreen, red } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CancelTwoToneIcon from "@material-ui/icons/CancelTwoTone";
import ContactSupportTwoToneIcon from "@material-ui/icons/ContactSupportTwoTone";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import QueuePlayNextTwoToneIcon from "@material-ui/icons/QueuePlayNextTwoTone";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import React from "react";
import { useHistory } from "react-router-dom";
import { useProfileData } from "../../../context/profile_data/ProfileDataContext";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  xray: {
    margin: theme.spacing(2),
    marginLeft: theme.spacing(16),
    borderRadius: "6px",
    objectFit: "cover",
    width: "80px",
    height: "80px",
  },
  icon: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(16),

    borderRadius: "6px",
    objectFit: "cover",
    width: "80px",
    height: "80px",
    color: "white",
    backgroundColor: theme.palette.primary.light,
  },
  consultationIcon: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(16),

    borderRadius: "6px",
    objectFit: "cover",
    width: "80px",
    height: "80px",
    color: "white",
    backgroundColor: green["500"],
  },
  noXrayIcon: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    marginLeft: theme.spacing(16),

    borderRadius: "6px",
    objectFit: "cover",
    width: "80px",
    height: "80px",
    color: "white",
    backgroundColor: red["500"],
  },
  success: {
    backgroundColor: lightGreen["A700"],
    color: "white",
    borderRadius: "6px",
    width: "100px",
  },
  pending: {
    backgroundColor: amber["700"],
    color: "white",
    borderRadius: "6px",
    width: "100px",
  },
  error: {
    backgroundColor: red["500"],
    color: "white",
    borderRadius: "6px",
    width: "100px",
  },
  rowType: {
    maxWidth: "80px",
    width: "80px",
  },
  xrayErrorGrid: {
    backgroundColor: red["500"],
  },
}));
const DetailViewItem = ({ fullData }) => {
  let history = useHistory();
  const [profileData] = useProfileData();
  const classes = useStyles();
   var mdate = new Date(fullData.meeting_date);

  const handleUploadXray = () => {
    history.push({
      pathname: `/uploadXray`,
      state: {
        xrayId: fullData.xray.id,
        userId: fullData.owner.id,
        submissionId: fullData.id,
        fullData:fullData
      },
    });
  };
  const handleViewXray = () => {
    if (fullData.verifier) {
      history.push({
        pathname: "/xrayview",
        state: {
          xrayId: fullData.xray.id,
          verifierId: fullData.verifier.user.id,
        },
      });
    } else {
      history.push({
        pathname: "/xrayview",
        state: {
          xrayId: fullData.xray.id,
        },
      });
    }
  };
  const handleViewImage = () => {
    history.push({
      pathname: "/mouthview",
      state: fullData.mouth_images.id,
    });
  };
  const handleViewDiagno = () => {
    history.push({
      pathname: "/diagnoview",
      state: fullData,
    });
  };
  const handleViewConsultation = () => {
    history.push({
      pathname: "/consultationDetails",
      state: fullData,
    });
  };

  if (fullData.status.toLowerCase() === "incomplete") {
    return (
      <Typography className={classes.root}>
        This submission is missing some information, please delete it and make a
        new one
      </Typography>
    );
  } else if (
    fullData.status.toLowerCase() === "missing_xray" &&
    fullData.type.toLowerCase() === "limited_evaluation"
  ) {
    return (
      <Grid container direction={"column"} className={classes.root}>
        <Grid item container alignItems={"center"} justify={"space-around"}>
          <ContactSupportTwoToneIcon className={classes.icon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Diagnobot</Box>
          </Typography>
          {fullData.diagnobot.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.diagnobot.nbr_issues} issues found
            </Box>
          ) : null}
          {fullData.diagnobot.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : fullData.diagnobot.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />
        <Grid
          item
          // className={classes.xrayErrorGrid}
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <CancelTwoToneIcon className={classes.noXrayIcon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>X-ray</Box>
          </Typography>

          <Typography>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              0 issues found
            </Box>
          </Typography>

          <Typography className={classes.error}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              Missing xray
            </Box>
          </Typography>

          {profileData.profile.user.is_superuser && (
            <ButtonBase>
              <Tooltip title="Send upload link to dentist" placement="bottom">
                <LinkRoundedIcon onClick={handleUploadXray} />
              </Tooltip>
            </ButtonBase>
          )}
        </Grid>

        <Divider />
        <Grid item container alignItems={"center"} justify={"space-around"}>
          <img
            loading="lazy"
            alt="images"
            className={classes.xray}
            src={fullData.mouth_images.closed_up}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>images</Box>
          </Typography>

          {fullData.mouth_images.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.mouth_images.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.mouth_images.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : fullData.mouth_images.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewImage} />
          </ButtonBase>
        </Grid>
      </Grid>
    );
  } else if (fullData.type.toLowerCase() === "diagnobot") {
    return (
      <Grid container direction={"column"} className={classes.root}>
        <Grid
          onClick={handleViewDiagno}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <ContactSupportTwoToneIcon className={classes.icon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Diagnobot</Box>
          </Typography>
          {fullData.diagnobot.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.diagnobot.nbr_issues} issues found
            </Box>
          ) : null}
          {fullData.diagnobot.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : fullData.diagnobot.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
      </Grid>
    );
  } else if (
    fullData.status.toLowerCase() === "missing_xray" &&
    fullData.type.toLowerCase() === "consultation"
  ) {
    return (
      <Grid container direction={"column"} className={classes.root}>
        <Grid
          onClick={handleViewDiagno}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <ContactSupportTwoToneIcon className={classes.icon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Diagnobot</Box>
          </Typography>
          {fullData.diagnobot.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.diagnobot.nbr_issues} issues found
            </Box>
          ) : null}
          {fullData.diagnobot.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : fullData.diagnobot.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />

        <Grid
          item
          // className={classes.xrayErrorGrid}
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <CancelTwoToneIcon className={classes.noXrayIcon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>X-ray</Box>
          </Typography>

          <Typography>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              0 issues found
            </Box>
          </Typography>

          <Typography className={classes.error}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              Missing xray
            </Box>
          </Typography>

          {profileData.profile.user.is_superuser && (
            <ButtonBase>
              <Tooltip title="Send upload link to dentist" placement="bottom">
                <LinkRoundedIcon onClick={handleUploadXray} />
              </Tooltip>
            </ButtonBase>
          )}
        </Grid>
        <Divider />
        <Grid
          onClick={handleViewImage}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <img
            loading="lazy"
            alt="images"
            className={classes.xray}
            src={fullData.mouth_images.closed_up}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>images</Box>
          </Typography>

          {fullData.mouth_images.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.mouth_images.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.mouth_images.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : fullData.mouth_images.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewImage} />
          </ButtonBase>
        </Grid>
        <Divider />

        <Grid
          onClick={handleViewConsultation}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <QueuePlayNextTwoToneIcon className={classes.consultationIcon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Video consultation</Box>
          </Typography>

          <Typography className={classes.rowType} color={"textPrimary"}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {mdate.toLocaleDateString() + " " + mdate.toTimeString()}
            </Box>
          </Typography>

          {fullData.meeting_date ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                READY
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                PENDING
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />
      </Grid>
    );
  } else if (fullData.type.toLowerCase() === "consultation") {
    return (
      <Grid container direction={"column"} className={classes.root}>
        <Grid
          onClick={handleViewDiagno}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <ContactSupportTwoToneIcon className={classes.icon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Diagnobot</Box>
          </Typography>
          {fullData.diagnobot.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.diagnobot.nbr_issues} issues found
            </Box>
          ) : null}
          {fullData.diagnobot.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : fullData.diagnobot.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />
        <Grid
          onClick={handleViewXray}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <img
            loading="lazy"
            alt="xray"
            className={classes.xray}
            src={fullData.xray.xray_image}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>X-ray</Box>
          </Typography>

          {fullData.xray.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.xray.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.xray.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.xray.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.xray.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          ) : fullData.xray.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          ) : fullData.xray.status.toLowerCase() === "missing_xray" ? (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                Missing xray
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewXray} />
          </ButtonBase>
        </Grid>
        <Divider />
        <Grid
          onClick={handleViewImage}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <img
            loading="lazy"
            alt="images"
            className={classes.xray}
            src={fullData.mouth_images.closed_up}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>images</Box>
          </Typography>

          {fullData.mouth_images.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.mouth_images.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.mouth_images.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : fullData.mouth_images.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewImage} />
          </ButtonBase>
        </Grid>
        <Divider />

        <Grid
          onClick={handleViewConsultation}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <QueuePlayNextTwoToneIcon className={classes.consultationIcon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Video consultation</Box>
          </Typography>

          <Typography className={classes.rowType} color={"textPrimary"}>
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {mdate.toLocaleDateString() + " " + mdate.toTimeString()}
            </Box>
          </Typography>

          {fullData.meeting_date ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                READY
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                PENDING
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />
      </Grid>
    );
  } else {
    return (
      <Grid container direction={"column"} className={classes.root}>
        <Grid
          onClick={handleViewDiagno}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <ContactSupportTwoToneIcon className={classes.icon} />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>Diagnobot</Box>
          </Typography>
          {fullData.diagnobot.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.diagnobot.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.diagnobot.nbr_issues} issues found
            </Box>
          ) : null}
          {fullData.diagnobot.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : fullData.diagnobot.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.diagnobot.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewDiagno} />
          </ButtonBase>
        </Grid>
        <Divider />
        <Grid
          onClick={handleViewXray}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <img
            loading="lazy"
            alt="xray"
            className={classes.xray}
            src={fullData.xray.xray_image}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>X-ray</Box>
          </Typography>

          {fullData.xray.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.xray.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.xray.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.xray.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.xray.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          ) : fullData.xray.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          ) : fullData.xray.status.toLowerCase() === "missing_xray" ? (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                Missing xray
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewXray} />
          </ButtonBase>
        </Grid>
        <Divider />
        <Grid
          onClick={handleViewImage}
          item
          container
          alignItems={"center"}
          justify={"space-around"}
        >
          <img
            loading="lazy"
            alt="images"
            className={classes.xray}
            src={fullData.mouth_images.closed_up}
          />

          <Typography className={classes.rowType}>
            <Box textAlign={"center"}>images</Box>
          </Typography>

          {fullData.mouth_images.nbr_issues > 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.nbr_issues} issues found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 1 ? (
            <Typography color={"error"}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.nbr_issues} issue found
              </Box>
            </Typography>
          ) : fullData.mouth_images.nbr_issues === 0 ? (
            <Box fontWeight="fontWeightBold" textAlign={"center"}>
              {fullData.mouth_images.nbr_issues} issues found
            </Box>
          ) : null}

          {fullData.mouth_images.status.toLowerCase() === "ready" ? (
            <Typography className={classes.success}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : fullData.mouth_images.status.toLowerCase() === "pending" ? (
            <Typography className={classes.pending}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.mouth_images.status}
              </Box>
            </Typography>
          ) : (
            <Typography className={classes.error}>
              <Box fontWeight="fontWeightBold" textAlign={"center"}>
                {fullData.xray.status}
              </Box>
            </Typography>
          )}

          <ButtonBase>
            <VisibilityTwoToneIcon onClick={handleViewImage} />
          </ButtonBase>
        </Grid>
      </Grid>
    );
  }
};
export default DetailViewItem;
