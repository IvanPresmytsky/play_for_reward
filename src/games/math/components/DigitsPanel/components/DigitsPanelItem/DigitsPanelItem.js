import React from 'react';
import Flex from '~/_common/components/Flex';

const DigitsPanelItem = ({ children }) => (
  <Flex height="50px" marginBottom="0.33%" width="33%">
    {children}
  </Flex>
);

export default DigitsPanelItem;
