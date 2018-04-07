import { combineReducers } from 'redux';
import mathReducer from '../games/math/reducers/mathReducer';

const reducers = {
  math: mathReducer,
};

export default function createReducer() {
  return combineReducers({ ...reducers });
};
