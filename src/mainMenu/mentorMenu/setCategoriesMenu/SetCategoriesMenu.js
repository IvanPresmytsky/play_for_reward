import Button from '~/_common/components/button';
import List from '~/_common/components/list';
import Menu from '~/_common/components/menu';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Category from '../category';

export const SetCategoriesMenu = ({ categories }) => {
  const [updatedCategories, setCategories] = useState([categories]);

  const onCategoryClick = e => {
    const { name, checked } = e.target;
    const updatedItem = updatedCategories.find(item => item.name === name);
    if (updatedItem) {
      updatedItem.isSwitchedOn = checked;
      setCategories(updatedCategories);
    } else {
      setCategories([...updatedCategories, { name, isSwitchedOn: checked }]);
    }

    console.log(name, checked);
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
        clickHandler={onCategoryClick}
        Component={Category}
        items={categories}
      />
      <Button
        clickHandler={onSaveClick}
        text="Save"
      />
    </Menu>
  );
};

SetCategoriesMenu.PropTypes = {
  categories: PropTypes.array.isRequired,
};

export default SetCategoriesMenu;

