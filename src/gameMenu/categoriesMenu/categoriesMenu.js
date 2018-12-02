import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { navigateToCategory } from '~/_common/_helpers/navigationHelper';

import Category from '../category';

export const CategoriesMenu = ({ categories }) => {
  const onCategoryClick = e => {
    e.preventDefault();
    const category = e.target && e.target.id;
    navigateToCategory(category);
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

const mapStateToProps = state => ({
  categories: state.menu.categories,
});

export default withRouter(connect(mapStateToProps, null)(CategoriesMenu));
