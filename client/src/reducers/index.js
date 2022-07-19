import { combineReducers } from 'redux';

import posts from './posts';

export const reducers = combineReducers({ posts });

//so after creating the reducer in post file now we are using it here 
//after scucsfully adding it here 
//next step is import this in main index.js file of project