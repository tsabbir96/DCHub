import {
  Avatar,
  Box,
  ButtonBase,
  createStyles,
  Grid,
  Typography
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizTwoToneIcon from "@material-ui/icons/MoreHorizTwoTone";
import React from "react";
import {
  get_doctor_name_and_avatar,
  get_patient_name_and_avatar
} from "../../../context/profile_data/ProfileDataActions";
import PostOptions from "./PostOptions";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "16px 0 48px 0",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    marginHorizental: {
      padding: "16px",
    },
    optionsButton: {
      width: "30px",
      height: "30px",
    },
    textBody: {
      margin: "0 40px 0 16px",
      textAlign: "start",
    },
    postImg: {
      width: "100%",
      objectFit: "cover",
    },
    postImgBtnBase: {
      width: "100%",
    },
    size: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    marginLeft: {
      marginLeft: "16px",
    },
  })
);

const Post = ({ blog, handleClickOpen }) => {
  const classes = useStyles();
  const [writerInfo, setWriterInfo] = React.useState({
    first_name: "",
    last_name: "",

    avatar: "",
  });
  React.useEffect(() => {
    if (blog.writer.account_type.toLowerCase() === "patient") {
      get_patient_name_and_avatar(blog.writer.id).then((res) => {
        if (res.status === 200) {
           setWriterInfo({
            first_name: res.data[0].first_name,
            last_name: res.data[0].last_name,

            avatar: res.data[0].profile_img,
          });
        }
      });
    } else {
      get_doctor_name_and_avatar(blog.writer.id).then((res) => {
        if (res.status === 200) {
          setWriterInfo({
            first_name: res.data[0].first_name,
            last_name: res.data[0].last_name,
            avatar: res.data[0].profile_img,
          });
        }
      });
    }
  }, []);

  const handlePostDetail = () => {
    handleClickOpen(blog);
  };
  var mdate = new Date(blog.creation_date);

  return (
    <div>
      <Card
        className={classes.root}
        onClick={handlePostDetail}
        variant="outlined"
      >
        <Grid
          className={classes.marginHorizental}
          container
          direction="row"
          alignItems={"center"}
        >
          <Grid item xs>
            <Grid container direction={"row"}>
              <Grid item>
                <Avatar
                  className={classes.size}
                  alt="avatar"
                  src={writerInfo.avatar}
                />
              </Grid>

              <Grid item>
                <Typography
                  variant={"subtitle1"}
                  className={classes.marginLeft}
                >
                  <Box fontWeight="fontWeightBold">
                    {writerInfo.first_name + " " + writerInfo.last_name}{" "}
                  </Box>
                </Typography>

                <Typography variant={"body2"} className={classes.marginLeft}>
                  <Box fontWeight="fontWeightLight">
                    {mdate.toLocaleString()}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <ButtonBase>
              <MoreHorizTwoToneIcon
                color={"primary"}
                className={classes.optionsButton}
              />
            </ButtonBase>
          </Grid>
        </Grid>

        <div>
          <ButtonBase onClick={handlePostDetail}>
            <Typography className={classes.textBody} variant="body1">
              {blog.excerpt}
            </Typography>
          </ButtonBase>

          {blog.image && (
            <ButtonBase
              onClick={handlePostDetail}
              className={classes.postImgBtnBase}
            >
              <img
                className={classes.postImg}
                alt="post img"
                src={blog.image}
              />
            </ButtonBase>
          )}
        </div>

        <PostOptions />
      </Card>
    </div>
  );
};

export default Post;
