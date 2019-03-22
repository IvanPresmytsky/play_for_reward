import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';

import style from './SessionTimer.css';

export const useInterval = (callback, onTimerStarted, onTimerStopped) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (onTimerStarted) {
      onTimerStarted();
    }

    const timer = setInterval(tick, 1000);

    return () => {
      clearInterval(timer);
      if (onTimerStopped) {
        onTimerStopped();
      }
    };
  }, []);
};

export const SessionTimer = ({
  initialTime,
  onTimerStarted,
  onTimerStopped,
}) => {
  const [time, setTime] = useState(initialTime);

  useInterval(
    () => {
      if (time === 0) {
        onTimerStopped();
      }

      setTime(time - 1);
    },
    onTimerStarted,
    onTimerStopped,
  );

  const timeClasses = classnames(style.time, {
    [style.mediumTime]: time && (time < initialTime / 2),
    [style.lowTime]: (time || time === 0) && (time < initialTime / 4),
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
