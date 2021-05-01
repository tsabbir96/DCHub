import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  get_first_blogs,
  get_page_blogs,
} from "../../context/blogs/BlogActions";
import Post from "./post_element/Post";
import PostDetailDialog from "./post_element/PostDetailDialog";

// import mouthimg from '../../../assets/mytooth.png'
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: "40px",
    },
  })
);

const PostContainer = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [blogs, setBlogs] = React.useState([]);
  const [hasMore, setHasMore] = React.useState(false);
  const [nextPage, setNextPage] = React.useState(null);
  const observer = React.useRef();
  const [open, setOpen] = React.useState(false);
  const [dialogData, setDialogData] = React.useState();
  const handleClickOpen = (blog) => {
    setDialogData(blog);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const lastBlogElementRef = React.useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          handleGetNext();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  React.useEffect(() => {
    get_first_blogs().then((res) => {
      if (res.status === 200) {
        setBlogs(res.data.results);
        setLoading(false);
        if (res.data.next) {
          setNextPage(res.data.next);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      }
    });
  }, []);
  const handleGetNext = () => {
    setLoading(true);
    get_page_blogs(nextPage).then((res) => {
      if (res.status === 200) {
        setLoading(false);

        setBlogs(blogs.concat(res.data.results));

        if (res.data.next) {
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      } else {
        setError(true);
      }
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {blogs.map((item, index) => {
        if (blogs.length === index + 1) {
          return (
            <div ref={lastBlogElementRef}>
              <Post handleClickOpen={handleClickOpen} blog={item} />
            </div>
          );
        }
        return (
          <div>
            <Post handleClickOpen={handleClickOpen} blog={item} />
          </div>
        );
      })}

      <PostDetailDialog
        dialogData={dialogData}
        handleClose={handleClose}
        open={open}
      />

      {loading && <h4>LOADING...</h4>}
      {error && <h4>error</h4>}
    </div>
  );
};

export default PostContainer;
