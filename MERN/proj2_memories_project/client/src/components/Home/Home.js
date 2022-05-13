import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { getPosts } from "../../actions/posts";
import { useDispatch } from "react-redux"; // can be used to dispatch an action

import Form from "../Form/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null); // I'll need id for update purpose
  // We can do this using redux too he said?
  // He said if we arn't using redux, I need to get data here, then send to the form & post (app is like parent of both)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  // He put some extra stuff from 30:50 to 31:30... But not req ig (that info is false). Later explained while debugging

  {
    /*Grow - animation,  Typography - text style*/
  }
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          {/* xs = 12 full size on extram small devices, sm = 7 size for small or medium */}
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
