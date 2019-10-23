import React from 'react';
import PropTypes from 'prop-types';

import Flex from '~/_common/components/Flex';
import { Button, buttonMods } from '~/_common/components/Button';

export const Category = ({ id, name, clickHandler }) => (
  <Flex>
    <Button
      id={id}
      clickHandler={clickHandler}
      modifiers={[buttonMods.RESPONSIVE_X]}
    >
      {name}
    </Button>
  </Flex>
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

