import React from 'react';

import styles from './CardOptions.css';

const CardOptions = () => (
  <div className={styles.cardOption}>
    <h3>Options</h3>
    <span>Reward per score:</span>
    <input type="number" name="quantity" min="1" max="10" />
  </div>
);

export default CardOptions;
