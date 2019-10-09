import React from 'react';
import * as S from './StyledDigitsPanelItem';

const DigitsPanelItem = ({ children }) => (
  <S.StyledDigitsPanelItems>
    {children}
  </S.StyledDigitsPanelItems>
);

export default DigitsPanelItem;
