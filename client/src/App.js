import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
//for using hooks in redux we import usedispatch
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
//our next steps is to perform some action for that we importing it here
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  // we use dispatch as hook
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <div className='container'>
    <div className="row bg-light mt-3" >
            <div className="offset-4 col-md-8">
            <span class="display-1">Student Data</span>  <img src={memories}  height="100" alt=""/>
            </div>
            {/* <div className="col-md-6">
                form input data
            </div> */}
        </div>

    </div>
    <br></br>
    <Container maxWidth="lg">
    
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  );
};

export default App;
