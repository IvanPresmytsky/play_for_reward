import React from 'react';
import mainMenuItems from './mainMenuItems.constants';
import MainMenu from './MainMenu';

export default (props) => <MainMenu menuItems={mainMenuItems} {...props} />;
