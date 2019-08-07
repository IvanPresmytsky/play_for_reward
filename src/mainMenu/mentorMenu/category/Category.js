import List from '~/_common/components/List';
import PropTypes from 'prop-types';
import React from 'react';

import Game from '../game';
import Card from '../card';
import styles from './Category.css';

export const Category = ({
  clickHandler,
  id,
  isSwitchedOn,
  games,
}) => (
  <div>
    <Card
      checked={isSwitchedOn}
      id={id}
      labelText={id}
      name={id}
      onChange={clickHandler}
    />
    <div className={styles.list}>
      <List
        items={games}
        renderItem={props => (
          <Game clickHandler={clickHandler} {...props} />
        )}
      />
    </div>
  </div>
);

Category.defaultProps = {
  clickHandler: null,
};

Category.propTypes = {
  clickHandler: PropTypes.func,
  id: PropTypes.string.isRequired,
  isSwitchedOn: PropTypes.bool.isRequired,
  games: PropTypes.array.isRequired,
};

export default Category;
