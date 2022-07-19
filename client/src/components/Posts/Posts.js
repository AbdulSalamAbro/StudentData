import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

//to get the data from the api we import the useselector in our posts component
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {

  //here we create hook for which give us the posts of data
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
            <div class="container">
            <div className="row">
                <div className="col-md-12">
            <Post post={post} setCurrentId={setCurrentId} />
            </div>
            </div>
            </div>
          
        ))}
      </Grid>
    )
  );
};

export default Posts;
