import classnames from 'classnames';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { navigateToGameStatistic } from '~/_common/_helpers/navigationHelper';
import { finishGame, startGame } from '../../../actions/mathActions';
import style from './sessionTimer.css';

export class SessionTimer extends Component {
  state = {
    initialTime: 20,
  };

  initTimer = () => {
    const { initialTime } = this.state;
    this.setState({ time: initialTime });
    this.props.startGame();
  }

  setTimer = () => {
    const { time } = this.state;
    const { match } = this.props;
    const { category, game } = match.params;
    const newTime = time - 1;

    if (time > 0) {
      this.setState({ time: newTime });
    } else {
      window.clearInterval(this.timer);
      this.props.finishGame();
      navigateToGameStatistic(category, game);
    }
  }

  componentDidMount() {
    const { time } = this.state;
    if (!time) this.initTimer();
    this.timer = window.setInterval(this.setTimer, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

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
}

const mapDispatchToProps = dispatch => ({
  finishGame: bindActionCreators(finishGame, dispatch),
  startGame: bindActionCreators(startGame, dispatch),
});

export default withRouter(connect(null, mapDispatchToProps)(SessionTimer));
