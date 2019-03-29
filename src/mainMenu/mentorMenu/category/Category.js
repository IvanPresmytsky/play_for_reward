import React from 'react';
import PropTypes from 'prop-types';
import List from '~/_common/components/list';

import Game from '../game';
import Card from '../card';
import styles from './Category.css';

export const Category = ({ data, clickHandler }) => (
  <div>
    <Card
      checked={data.isSwitchedOn}
      id={data.id}
      labelText={data.id}
      name={data.id}
      onChange={clickHandler}
    />
    <div className={styles.list}>
      <List
        clickHandler={clickHandler}
        Component={Game}
        items={data.games}
      />
    </div>
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
