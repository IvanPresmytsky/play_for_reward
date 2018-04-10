import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addScore, checkSolution, generateDigits, getTotal, removeScore, startGame } from '../actions/mathActions';
import operations from '../common/constants/operations';
import DigitsPanel from '../common/digitsPanel/digitsPanel';
import GameDisplay from '../common/gameDisplay/gameDisplay';
import style from './addition.css';
import { StatusBar } from '../common/statusBar/statusBar';

export class Addition extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '0',
    };

    this.checkSolution = this.checkSolution.bind(this);
    this.resetSession = this.resetSession.bind(this);
    this.onStartSessionClick = this.onStartSessionClick.bind(this);
    this.onSolveClick = this.onSolveClick.bind(this);
    this.onDigitClick = this.onDigitClick.bind(this);
    this.onRemoveBtnClick = this.onRemoveBtnClick.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  resetSession() {
    this.props.generateDigits();
    this.props.getTotal();
    this.setState({
      userInput: '0',
    });
  }

  checkSolution() {
    const {
      userInput,
    } = this.state;

    const {
      addScore,
      checkSolution,
      isCorrectSolution,
      removeScore,
    } = this.props;

    checkSolution(Number(userInput));

    if(isCorrectSolution) {
      addScore();
    } else {
      removeScore();
    }  
  }

  validateInput(userInput) {
    return userInput.length > 1 && userInput[0] === '0'
      ? userInput.slice(1, userInput.length)
      : userInput;
  }

  onStartSessionClick(e) {
    e.preventDefault();
    this.props.startGame()
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
      initialTime,
      time,
      userInput,
    } = this.state;

    const {
      gameStarted,
      hasSolution,
      isCorrectSolution,
      score,
    } = this.props;

    return (
      <div className={style.addition}>
        <h2>Addition game</h2>
        <StatusBar
          gameStarted={gameStarted}
          isCorrectSolution={isCorrectSolution}
          hasSolution={userInput}
          score={score}
          startSessionBtnHandler={this.onStartSessionClick}
        />
        <GameDisplay
          operation={operations.addition.name}
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

const mapStateToProps = state => ({
  gameStarted: state.math.gameStarted,
  isCorrectSolution: state.math.isCorrectSolution,
  hasSolution: state.math.hasSolution,
  total: state.math.total,
  score: state.math.score,
});

const mapDispatchToProps = dispatch => ({
  addScore: bindActionCreators(addScore, dispatch),
  checkSolution: bindActionCreators(checkSolution, dispatch),
  generateDigits: bindActionCreators(generateDigits, dispatch),
  getTotal: bindActionCreators(getTotal, dispatch),
  removeScore: bindActionCreators(removeScore, dispatch),
  startGame: bindActionCreators(startGame, dispatch),
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(Addition));
