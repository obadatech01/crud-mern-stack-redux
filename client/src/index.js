import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/employeeReducer';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// ReactDom.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
//   , 
//   document.getElementById('root')
// );