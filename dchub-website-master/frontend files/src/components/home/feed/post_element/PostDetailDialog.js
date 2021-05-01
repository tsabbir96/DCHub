import {
  Avatar,
  Card,
  CardContent,
  Container,
  Dialog,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React from "react";
import Header from "../../../commun/Header";
import {
  get_doctor_name_and_avatar,
  get_patient_name_and_avatar
} from "../../../context/profile_data/ProfileDataActions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
   },
  container: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4, 0),
  },
  size: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(2, 2),
  },
  name: {
    fontWeight: "800",
  },
  closeBtn: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    width: "32px",
    height: "32px",
    color: "gray",
  },
  excerpt: {
    padding: theme.spacing(4, 4),
  },
  mainimg: {
    width: "100%",
  },
}));

export default function PostDetailDialog({ handleClose, open, dialogData }) {
  const classes = useStyles();

  const [writerInfo, setWriterInfo] = React.useState({
    first_name: "",
    last_name: "",
  });
  React.useEffect(() => {
    if (dialogData) {
      if (dialogData.writer.account_type.toLowerCase() === "patient") {
        get_patient_name_and_avatar(dialogData.writer.id).then((res) => {
          if (res.status === 200) {
            setWriterInfo({
              first_name: res.data[0].first_name,
              last_name: res.data[0].last_name,
              avatar: res.data[0].profile_img,
            });
          }
        });
      } else {
        get_doctor_name_and_avatar(dialogData.writer.id).then((res) => {
          if (res.status === 200) {
            setWriterInfo({
              first_name: res.data[0].first_name,
              last_name: res.data[0].last_name,
              avatar: res.data[0].profile_img,
            });
          }
        });
      }
    }
  }, [dialogData]);
  const bullet = <span>•</span>;

  if (dialogData) {
    var mdate = new Date(dialogData.creation_date);

    return (
      <Dialog
        className={classes.root}
        onClose={handleClose}
        fullScreen
        // maxWidth='xl'
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <div className={classes.root}>
          <Header />
       
          <Container className={classes.container}>
          <HighlightOffIcon
                  className={classes.closeBtn}
                  onClick={handleClose}
                />
            <Card variant="outlined">
              <Grid container alignItems="center">
                <Avatar
                  className={classes.size}
                  alt="avatar"
                  src={writerInfo.avatar}
                />
                <Typography className={classes.name}>
                  {writerInfo.first_name + " " + writerInfo.last_name}
                </Typography>
                &nbsp; &nbsp; &nbsp; {bullet}&nbsp; &nbsp; &nbsp;
                <Typography>{mdate.toLocaleString()}</Typography>
                &nbsp; &nbsp; {bullet}&nbsp; &nbsp;
                <Typography>{dialogData.reading_time} min read</Typography>
                {/* <HighlightOffIcon
                  className={classes.closeBtn}
                  onClick={handleClose}
                /> */}
              </Grid>

              <Typography className={classes.excerpt}>
                {dialogData.excerpt}{" "}
              </Typography>
              {dialogData.image && (
                <img
                  alt="blog_img"
                  loading="lazy"
                  className={classes.mainimg}
                  src={dialogData.image}
                />
              )}
                            <CardContent>

              <div
              className={classes.content}
                dangerouslySetInnerHTML={{
                  __html: dialogData.paragraph,
                }}
              />
              </CardContent>
            </Card>
          </Container>
        </div>
      </Dialog>
    );
  } else {
    return <h4>loading...</h4>;
  }
}
