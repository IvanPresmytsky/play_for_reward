const initialState = {
  categories: ['math'],
  games: ['addition'],
};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default gamesReducer;
