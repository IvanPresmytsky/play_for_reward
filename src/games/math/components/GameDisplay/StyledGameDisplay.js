import React from 'react';

import styled from 'styled-components';
import Label from '~/_common/components/Label';

export const StyledGameDisplay = styled.div`
  align-items: center;
  border: 4px solid green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const StyledLabel = ({ text }) => (
  <Label
    color="green"
    fontSize="40px"
    fontWeight="bold"
    marginRight="2%"
    text={text}
  />
);
