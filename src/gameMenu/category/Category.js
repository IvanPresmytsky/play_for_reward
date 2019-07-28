import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';
import style from './Category.css';

export const Category = ({ id, name, clickHandler }) => (
  <div className={style.category}>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE]}
    >
      {name}
    </Button>
  </div>
);

Category.defaultProps = {
  clickHandler: null,
};

Category.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Category;

