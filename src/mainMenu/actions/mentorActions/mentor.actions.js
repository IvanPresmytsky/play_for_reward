import { createActions } from 'redux-actions';

export const mentorActions = {
  SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
};

export const {
  setCurrentPlayer,
} = createActions(...Object.values(mentorActions));
