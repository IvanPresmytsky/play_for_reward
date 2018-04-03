import React from 'react';
import ReactDOM from 'react-dom';
import Addition from './games/math/addition/addition';

import style from './app.css';

ReactDOM.render(
  <div className={style.app}>
    <h1>Play for reward</h1>
    <Addition />
  </div>,
  document.getElementById('root'),
);
