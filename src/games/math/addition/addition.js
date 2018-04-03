import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import style from './addition.css';

export class Addition extends Component {
  render() {
    return (
      <div className={style.addition}>
        <h2>Addition game</h2>
      </div>
    );
  }
}

export default hot(module)(Addition);
