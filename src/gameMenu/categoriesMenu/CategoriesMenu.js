import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React from 'react';

import { navigateToCategory } from '~/_common/_helpers/navigationHelper';

import Category from '../category';

export const CategoriesMenu = ({ categories, getCurrentCategory }) => {
  const onCategoryClick = e => {
    e.preventDefault();
    const category = e.target && e.target.id;
    getCurrentCategory(category);
    navigateToCategory(category);
  };

  return (
    <Menu
      subTitle="Choose the category"
      title="Games categories list"
    >
      <List
        items={categories}
        renderItem={props => (
          <Category clickHandler={onCategoryClick} {...props} />
        )}
      />
    </Menu>
  );
};

CategoriesMenu.PropTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoriesMenu;
