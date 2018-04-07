import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Addition from './games/math/addition/addition';
import createStore from './store/createStore';

import style from './app.css';

const initialState = {};

const store = createStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <div className={style.app}>
      <h1>Play for reward</h1>
      <Addition />
    </div>
  </Provider>,
  document.getElementById('root'),
);
