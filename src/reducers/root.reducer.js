import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mathReducer from '~/games/math/reducers/mathReducer';
import menuReducer from '~/gameMenu/reducers/menuReducer';
import usersReducer from '~/mainMenu/reducers/usersReducer';

const reducers = {
  math: mathReducer,
  menu: menuReducer,
  routing: routerReducer,
  users: usersReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
}
