import classnames from 'classnames';
import React from 'react';
import style from './sessionTimer.css';

export const SessionTimer = ({ initialTime, time }) => {
  const timeClasses = classnames(style.time, {
    [style.mediumTime]: (time < initialTime / 2),
    [style.lowTime]: (time < initialTime / 4),
  });
  return (
    <div className={style.sessionTimer}>
      <span className={style.timerText}>{'Time: '}</span>
      <span className={timeClasses}>{time}</span>
    </div>
  );
};

export default SessionTimer;
