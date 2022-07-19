import React from 'react';
import ReactDOM from 'react-dom';
//here we import provider for keep track of the store of golbl state 
import { Provider } from 'react-redux';
// we also import the these
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//after creating our reducer in reducer folder now we are importing ths here
import { reducers } from './reducers';
import App from './App';
import './index.css';

//now this store variable is succesfully created we are importing this here
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(

  //now we wrap the componenet here 
  //our app is succesfully using redux we can start using all of its capabilites 
  //for using redux first of all install it using cmd npm install react-redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
