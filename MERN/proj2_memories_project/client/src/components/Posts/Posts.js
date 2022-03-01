import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // to fetch data from redux store
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); // .posts - see index.js (reducers)

  //console.log(posts); // data from database (ofcourse using redux)

  // if len != 0 show the posts else CircularProgress
  // the hmtl code here is for the outer layout. just comment/change values n play
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />{" "}
          {/* So I am sending the data for parameter */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
