import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import DigitsPanel from '../common/digitsPanel/digitsPanel';
import style from './addition.css';

export class Addition extends Component {
  constructor() {
    super();
    this.state = {
      firstDigit: this.getDigit(),
      isCorrectSolution: false,
      secondDigit: this.getDigit(),
      userInput: '0',
      total: 0,
    };
    this.getTotal = this.getTotal.bind(this);
    this.onSolveClick = this.onSolveClick.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    this.onDigitClick = this.onDigitClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
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

  validateInput(userInput) {
    return userInput.length > 1 && userInput[0] === '0'
      ? userInput.slice(1, userInput.length)
      : userInput;
  }

  onDigitClick(e) {
    e.preventDefault();
    const digit = e.target && e.target.id;
    const { userInput } = this.state;
    const newUserInput = this.validateInput(userInput + digit);
    this.setState({ userInput: newUserInput });
  }

  onRemoveBtnClick(e) {
    e.preventDefault();
    const { userInput } = this.state;
    const newUserInput = userInput.length > 1
      ? this.state.userInput.slice(0, userInput.length - 1)
      : 0;

    this.setState({ userInput: newUserInput });
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
        <DigitsPanel
          digitHandler={this.onDigitClick}
          removeBtnClickHandler={this.onRemoveBtnClick}
        />
      </div>
    );
  }
}

export default hot(module)(Addition);
