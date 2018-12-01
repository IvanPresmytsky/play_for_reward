import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mathReducer from '~/games/math/reducers/mathReducer';
import menuReducer from '~/gameMenu/reducers/menuReducer';

const reducers = {
  math: mathReducer,
  menu: menuReducer,
  routing: routerReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
}
