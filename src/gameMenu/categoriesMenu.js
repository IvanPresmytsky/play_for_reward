import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import GameList from './gamesList';

import style from './categoriesMenu.css';

export const CategoriesMenu = ({ ...props }) => {
  return (
    <div className={style.categoriesMenu}>
      <h2 className={style.title}>Games categories list</h2>
      <h3 className={style.subTitle}>Choose the category</h3>
      {props.categories}
    </div>
  );
};

const mapStateToProps = state => ({
  games: state.games.categories,
});

export default withRouter(connect(mapStateToProps, null)(CategoriesMenu));
