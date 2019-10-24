import React from 'react';
import PropTypes from 'prop-types';

import Flex from '~/_common/components/Flex';
import { Button, buttonMods } from '~/_common/components/Button';

import buttonIds from './constants/buttonIds.constants';
import DigitsPanelItem from './components/DigitsPanelItem';

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
    <Flex
      justifyContent="space-between"
      marginTop="auto"
      wrap="wrap"
    >
      {digits}
    </Flex>
  );
};

DigitsPanel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DigitsPanel;
