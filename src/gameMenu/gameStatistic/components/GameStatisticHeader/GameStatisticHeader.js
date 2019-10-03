import React from 'react';

import StatisticLabel from '../StatisticLabel'
import * as S from './StyledGameStatisticHeader';

const GameStatisticHeader = () => (
  <S.StyledGameStatisticHeader>
    <StatisticLabel text="duration" />
    <StatisticLabel text="expression" />
    <StatisticLabel text="solution" />
    <StatisticLabel text="correct" />
  </S.StyledGameStatisticHeader>
);

export default GameStatisticHeader;
