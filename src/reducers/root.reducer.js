import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mathReducer from '~/games/math/reducers/mathReducer';
import menuReducer from '~/gameMenu/reducers/menuReducer';
import themeReducer from '~/app/reducers/themeReducer';
import usersReducer from '~/mainMenu/reducers/usersReducer';

const reducers = {
  math: mathReducer,
  menu: menuReducer,
  routing: routerReducer,
  theme: themeReducer,
  users: usersReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
}
