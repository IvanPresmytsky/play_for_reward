import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mathReducer from '../games/math/reducers/mathReducer';
import gamesReducer from '../games/reducers/gamesReducer';

const reducers = {
  routing: routerReducer,
  math: mathReducer,
  games: gamesReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
};
