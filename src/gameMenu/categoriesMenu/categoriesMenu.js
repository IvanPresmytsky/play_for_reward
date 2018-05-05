import React from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentCategory } from '../actions/menuActions';
import { navigateToCategory } from '../../common/_helpers/navigationHelper';
import Menu from '../common/menu/menu';
import List from '../common/list/list';
import Category from '../category/category';

export const CategoriesMenu = ({ ...props }) => {
  const onCategoryClick = (e) => {
    e.preventDefault();
    const categoryId = e.target && e.target.id;
    props.setCurrentCategory(categoryId);
    navigateToCategory(categoryId);
  };

  return (
    <Menu
      subTitle="Choose the category"
      title="Games categories list"
    >
      <List
        clickHandler={onCategoryClick}
        Component={Category}
        items={props.categories}
      />
    </Menu>
  );
};

const mapStateToProps = state => ({
  categories: state.menu.categories,
});

const mapDispatchToProps = dispatch => ({
  setCurrentCategory: bindActionCreators(setCurrentCategory, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu));
