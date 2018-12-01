import React from 'react';
import Title from './_common/title';
import HeaderMenu from './_common/headerMenu';

import styles from './mainHeader.css'

const MainHeader = ({}) => (
  <header className={styles.mainHeader}>
      <Title
        text="Play for reward"
      />
      <HeaderMenu />
  </header>
);

export default MainHeader;
