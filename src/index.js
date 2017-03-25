import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Fights from './containers/Fights.js';
import Fight from './containers/Fight.js';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Fights}/>
        <Route path="/fight/:id" component={Fight}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
