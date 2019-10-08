import React from 'react';

import { Title, titleTypes } from '~/_common/components/Title';

import styles from './CardOptions.css';

const CardOptions = () => (
  <div className={styles.cardOption}>
    <Title text="Options" type={titleTypes.h3} />
    <span>Reward per score:</span>
    <input type="number" name="quantity" min="1" max="10" />
  </div>
);

export default CardOptions;
