import PropTypes from 'prop-types';
import React from 'react';
import ScoreDisplay from './scoreDisplay';
import SessionTimer from './sessionTimer';
import SolutionDisplay from './solutionDisplay';
import LevelDisplay from './levelDisplay';

import style from './StatusBar.css';

export const StatusBar = ({
  isCorrectSolution,
  hasSolution,
  level,
  onTimerStarted,
  onTimerStopped,
  score,
}) => (
  <div className={style.statusBar}>
    <SessionTimer
      onTimerStarted={onTimerStarted}
      onTimerStopped={onTimerStopped}
      initialTime={200}
    />
    <LevelDisplay level={level} />
    <SolutionDisplay
      isCorrectSolution={isCorrectSolution}
      hasSolution={hasSolution}
    />
    <ScoreDisplay score={score} />
  </div>
);

StatusBar.propTypes = {
  isCorrectSolution: PropTypes.bool.isRequired,
  hasSolution: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  onTimerStarted: PropTypes.func.isRequired,
  onTimerStopped: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default StatusBar;
