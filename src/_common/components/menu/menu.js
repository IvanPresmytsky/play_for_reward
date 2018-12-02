import PropTypes from 'prop-types'; 
import React from 'react';

import styles from './menu.css';

export const Menu = ({ title, subTitle, children }) => (
  <div className={styles.menu}>
    {title && (
      <h2 className={styles.title}>{title}</h2>
    )}
    {subTitle && (
      <h3 className={styles.subTitle}>{subTitle}</h3>
    )}
    {children}
  </div>
);

Menu.defaultProps = {
  children: null,
  subTitle: null,
  title: null,
};

Menu.propTypes = {
  children: PropTypes.object,
  subTitle: PropTypes.string,
  title: PropTypes.string,
};

export default Menu;
