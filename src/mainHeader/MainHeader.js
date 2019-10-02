import React from 'react';

import Title from './_common/title';
import HeaderMenu from './_common/headerMenu';

import * as S from './StyledMainHeader';

const MainHeader = () => (
  <S.StyledMainHeader>
    <Title text="Play for reward" />
    <HeaderMenu />
  </S.StyledMainHeader>
);

export default MainHeader;
