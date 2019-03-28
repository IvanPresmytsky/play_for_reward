import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React from 'react';

import Category from '../category';

export const PlayerCategories = ({ categories }) => {
  const onCategoryClick = e => {
    const { name, value } = e.target;
    console.log(name, value);
  };

  return (
    <Menu
      subTitle="Choose the category"
      title="Games categories list"
    >
      <List
        clickHandler={onCategoryClick}
        Component={Category}
        items={categories}
      />
    </Menu>
  );
};

PlayerCategories.PropTypes = {
  categories: PropTypes.array.isRequired,
};

export default PlayerCategories;
