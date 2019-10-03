import React from 'react';
import PropTypes from 'prop-types';

import StatisticLabel from '../StatisticLabel'
import * as S from './StyledStatisticItem';

export const StatisticItem = ({
  correctSolution,
  condition,
  duration,
  isCorrectSolution,
  solution,
}) => (
  <S.StyledStatisticItem>
    <StatisticLabel text={`${duration} sec `} />
    <StatisticLabel text={`${condition} = `} />
    <StatisticLabel color="green" text={` ${solution}`} />
    <StatisticLabel color="red" text={!isCorrectSolution ? ` ${correctSolution}` : ''} />
  </S.StyledStatisticItem>
);

StatisticItem.propTypes = {
  correctSolution: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isCorrectSolution: PropTypes.bool.isRequired,
  solution: PropTypes.number.isRequired,
};

export default StatisticItem;
