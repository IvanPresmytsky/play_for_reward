import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import operations from '../common/constants/operations';
import DigitsPanel from '../common/digitsPanel/digitsPanel';
import GameDisplay from '../common/gameDisplay/gameDisplay';
import style from './addition.css';
import { StatePanel } from '../common/statePanel/statePanel';

export class Addition extends Component {
  constructor() {
    super();
    this.state = {
      firstDigit: this.getDigit(),
      isCorrectSolution: false,
      secondDigit: this.getDigit(),
      score: 0,
      userInput: '0',
    };
    this.checkSolution = this.checkSolution.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.resetSession = this.resetSession.bind(this);
    this.onSolveClick = this.onSolveClick.bind(this);
    this.onDigitClick = this.onDigitClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  resetSession() {
    this.setState({
      firstDigit: this.getDigit(),
      secondDigit: this.getDigit(),
      userInput: '0',
    });
  }

  getDigit() {
    return Math.floor(Math.random() * 5) + 1;
  }

  getTotal() {
    return this.state.firstDigit + this.state.secondDigit;
  }

  checkSolution() {
    const solution = this.getTotal();
    const {
      score,
      userInput,
    } = this.state;

    const isCorrectSolution = solution === Number(userInput);
    const newScore = isCorrectSolution
      ? (score + 1)
      : (score - 1);

    this.setState({ isCorrectSolution, score: newScore });
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
    this.resetSession();
  }

  render() {
    const {
      firstDigit,
      isCorrectSolution,
      score,
      secondDigit,
      userInput,
    } = this.state;

    return (
      <div className={style.addition}>
        <h2>Addition game</h2>
        <StatePanel
          isCorrectSolution={isCorrectSolution}
          hasSolution={userInput === '0'}
          score={score}
        />
        <GameDisplay
          firstDigit={firstDigit}
          operation={operations.addition.name}
          secondDigit={secondDigit}
          total={userInput}
        />
        <DigitsPanel
          digitBtnHandler={this.onDigitClick}
          removeBtnClickHandler={this.onRemoveBtnClick}
          solveBtnHandler={this.onSolveClick}
        />
      </div>
    );
  }
}

export default hot(module)(Addition);
