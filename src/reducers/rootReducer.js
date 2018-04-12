import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mathReducer from '../games/math/reducers/mathReducer';

const reducers = {
  routing: routerReducer,
  math: mathReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
};
