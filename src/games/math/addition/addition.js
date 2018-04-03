import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import style from './addition.css';

export class Addition extends Component {
  constructor() {
    super();
    this.state = {
      firstDigit: this.getDigit(),
      isCorrectSolution: false,
      secondDigit: this.getDigit(),
      userInput: '',
      total: 0,
    };
    this.getTotal = this.getTotal.bind(this);
    this.onSolveClick = this.onSolveClick.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    this.onDigitClick = this.onDigitClick.bind(this);
  }

  renderDigits() {
    return Array.from(Array(10).keys())
      .map(digit => <button id={digit} key={digit} onClick={this.onDigitClick}>{digit}</button>);
  }

  getDigit() {
    return Math.floor(Math.random() * 5) + 1;
  }

  getTotal() {
    return this.state.firstDigit + this.state.secondDigit;
  }

  checkSolution() {
    const solution = this.getTotal();
    this.setState({ isCorrectSolution: solution === Number(this.state.userInput) });
  }

  onDigitClick(e) {
    e.preventDefault();
    const digit = e.target.id;
    this.setState({ userInput: this.state.userInput + digit });
  }

  onSolveClick(e) {
    e.preventDefault();
    this.checkSolution();
  }

  render() {
    return (
      <div className={style.addition}>
        <h2>Addition game</h2>
        <div className={style.firstDigit}>
          {this.state.firstDigit}
        </div>
        <div>
          {'+'}
        </div>
        <div className={style.secondDigit}>
          {this.state.secondDigit}
        </div>
        <div>
          {'='}
        </div>
        <div className={style.total}>
          {this.state.userInput}
        </div>
        <button className={style.solveBtn} onClick={this.onSolveClick}>
          {'Solve'}
        </button>
        <div>
          {this.state.isCorrectSolution.toString()}
        </div>
        {this.renderDigits()}
      </div>
    );
  }
}

export default hot(module)(Addition);
