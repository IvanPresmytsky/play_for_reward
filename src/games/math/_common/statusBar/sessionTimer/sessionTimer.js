import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import style from './sessionTimer.css';


export const SessionTimer = ({
  initialTime,
  onTimerStarted,
  onTimerStopped,
}) => {
  const [time, setTime] = useState(initialTime);
  let timer;

  const stopTimer = () => {
    clearTimeout(timer);
    onTimerStopped();
  };

  const setTimer = () => {
    const newTime = time - 1;

    if (time > 0) {
      setTime(newTime);
    } else {
      stopTimer();
    }
  };

  const startTimer = () => {
    if (time === initialTime) {
      onTimerStarted();
    }
    timer = setTimeout(setTimer, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

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
};

SessionTimer.propTypes = {
  initialTime: PropTypes.number.isRequired,
  onTimerStarted: PropTypes.func.isRequired,
  onTimerStopped: PropTypes.func.isRequired,
};

export default SessionTimer;
