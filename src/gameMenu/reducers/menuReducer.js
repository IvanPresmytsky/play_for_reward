import { menuActions } from '../actions/menuActions';

const initialState = {
  currentCategory: 'math',
  currentGame: '',
};
  
export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case menuActions.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currrentCategory: action.category,
      }
    case menuActions.SET_CURRENT_GAME:
      return {
        ...state,
        currentGame: action.game,
      }
    default:
      return state;
  }
}
  
export default menuReducer;
