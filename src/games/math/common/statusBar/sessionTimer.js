import classnames from 'classnames';
import React, { Component } from 'react';
import style from './sessionTimer.css';

export class SessionTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTime: 20,
    };

    this.initTimer = this.initTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
  }

  initTimer() {
    const { initialTime } = this.state;
    this.setState({ time: initialTime });
  }

  setTimer() {
    const { time } = this.state;
    const newTime = time - 1;

    if (time > 0) {
      this.setState({ time: newTime });
    } else {
      window.clearInterval(this.timer);
    }
  }

  componentDidMount() {
    const { time } = this.state;
//    console.log(this.props);
 //   if (this.nextProps.gameStarted) {
      if (!time) this.initTimer();
      this.timer = window.setInterval(this.setTimer, 1000);
//    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
/*
  componentWillReceiveProps(nextProps) {
    const { time } = this.state;
    console.log(this.props);
    if (this.nextProps.gameStarted) {
      if (!time) this.initTimer();
      this.timer = window.setInterval(this.setTimer, 1000);
    }
  }
*/
  render() {
    const { initialTime, time } = this.state;
    const timeClasses = classnames(style.time, {
      [style.mediumTime]: time && (time < initialTime / 2),
      [style.lowTime]: time && (time < initialTime / 4),
    });

    return (
      <div className={style.sessionTimer}>
        <span className={style.timerText}>{'Time: '}</span>
        <span className={timeClasses}>{time}</span>
      </div>
    );
  }
};

export default SessionTimer;
