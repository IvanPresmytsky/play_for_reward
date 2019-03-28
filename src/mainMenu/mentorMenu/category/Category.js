import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '~/_common/components/checkboxInput';

export const Category = ({ data, clickHandler }) => (
  <div>
    <Checkbox
      id={data.id}
      labelText={data.id}
      name={data.id}
      onChange={clickHandler}
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
