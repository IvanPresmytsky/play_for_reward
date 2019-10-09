import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';

import buttonIds from './constants/buttonIds.constants';
import DigitsPanelItem from './components/DigitsPanelItem';

import * as S from './StyledDigitsPanel';

export const DigitsPanel = ({ items }) => {
  const {
    CANCEL,
    RESPONSIVE_FULL,
  } = buttonMods;

  const digits = items.map(({ id, handler }) => {
    const modifiers = [RESPONSIVE_FULL];
    if (id === buttonIds.REMOVE_BTN_ID) {
      modifiers.push(CANCEL);
    }

    return (
      <DigitsPanelItem key={id}>
        <Button
          clickHandler={handler}
          id={id}
          modifiers={modifiers}
        >
          {id}
        </Button>
      </DigitsPanelItem>
    )
  });

  return (
    <S.StyledDigitsPanel>
      {digits}
    </S.StyledDigitsPanel>
  );
};

DigitsPanel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DigitsPanel;
