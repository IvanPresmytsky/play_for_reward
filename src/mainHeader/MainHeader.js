import React from 'react';

import { Title, titleTypes } from '~/_common/components/Title';
import HeaderMenu from './components/HeaderMenu';

import * as S from './StyledMainHeader';

const MainHeader = () => (
  <S.StyledMainHeader>
    <Title text="Play for reward" type={titleTypes.h1} />
    <HeaderMenu />
  </S.StyledMainHeader>
);

export default MainHeader;
