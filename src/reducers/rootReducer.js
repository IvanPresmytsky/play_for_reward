import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gamesReducer from '../games/reducers/gamesReducer';
import mathReducer from '../games/math/reducers/mathReducer';
import menuReducer from '../gameMenu/reducers/menuReducer';

const reducers = {
  games: gamesReducer,
  math: mathReducer,
  menu: menuReducer,
  routing: routerReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
};
