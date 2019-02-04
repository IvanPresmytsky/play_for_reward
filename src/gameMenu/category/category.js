import React from 'react';
import PropTypes from 'prop-types';
import Button from '~/_common/components/button';
import style from './category.css';

export const Category = ({ data, clickHandler }) => (
  <div className={style.category}>
    <Button
      className={style.categoryBtn}
      id={data.id}
      clickHandler={clickHandler}
      text={data.name}
    />
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
