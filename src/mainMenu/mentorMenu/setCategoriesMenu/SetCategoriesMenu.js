import List from '~/_common/components/List';
import Menu from '~/_common/components/Menu';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, buttonMods } from '~/_common/components/Button';

import Category from '../category';

export const SetCategoriesMenu = ({ categories, categoriesAndGames }) => {
  const [updatedCategories, setCategories] = useState(categoriesAndGames);

  const onCategoryClick = e => {
    const { name, checked } = e.target;
    const updatedItem = updatedCategories.find(category => category.id === name);

    if (!updatedItem) return;

    updatedItem.isSwitchedOn = checked;
    setCategories(updatedCategories);
  };

  const onSaveClick = e => {
    console.log(updatedCategories);
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
      >
        <Button
          clickHandler={onSaveClick}
          id="save"
          modifiers={[buttonMods.RESPONSIVE_X]}
        >
          Save
        </Button>
      </List>
    </Menu>
  );
};

SetCategoriesMenu.propTypes = {
  categories: PropTypes.array.isRequired,
  categoriesAndGames: PropTypes.array.isRequired,
};

export default SetCategoriesMenu;

