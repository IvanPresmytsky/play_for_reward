import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';
import style from './Category.css';

export const Category = ({ data, clickHandler }) => (
  <div className={style.category}>
    <Button
      id={data.id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE]}
    >
      {data.name}
    </Button>
  </div>
);

Category.defaultProps = {
  clickHandler: null,
};

Category.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default Category;

