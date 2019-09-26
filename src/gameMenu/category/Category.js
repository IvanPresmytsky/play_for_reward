import React from 'react';
import PropTypes from 'prop-types';
import { Button, buttonMods } from '~/_common/components/Button';

export const Category = ({ id, name, clickHandler }) => (
  <div>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE_X]}
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

