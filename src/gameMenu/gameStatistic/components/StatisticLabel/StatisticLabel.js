import React from 'react'
import PropTypes from 'prop-types';

import * as S from './StyledStatisticLabel';

const StatisticLabel = ({ color, text }) => (
  <S.SyledStatisticLabel color={color}>
      {`${text}`}
  </S.SyledStatisticLabel>
);

StatisticLabel.defaultProps = {
  color: '#000',
  text: '',
}

StatisticLabel.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default StatisticLabel;
