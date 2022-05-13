import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch(); // to dispatch the actions
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const user = JSON.parse(localStorage.getItem("profile"));
  // find the post with that id. if not found return null
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  // populate the form when post (above 2 lines) change
  useEffect(() => {
    if (post) setPostData(post);
  }, [post /*when to run this funct */]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh

    if (!currentId) {
      // if no id, create the post
      // dispatch(createPost(postData)); // dispatch by calling createPost from posts.js (actions) with all the data from form
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      clear();
    } else {
      // else update the post
      // dispatch(updatePost(currentId, postData));
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      ); // had written createPost in place of updatePost. Created issue!!
      clear();
    }
  };

  if (!user?.result?.name) {
    // Question: how this running autometically?
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Pleae login to create or like a post
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <h1>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? `Editing "${post.title}"` : "Creating a Memory"}
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            multiline
            rows={4}
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags (coma separated)"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            {/*Diddn't get what's this FileBase */}
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </h1>
  );
};

export default Form;
