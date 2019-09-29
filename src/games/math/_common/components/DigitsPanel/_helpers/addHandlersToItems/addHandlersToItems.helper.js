import buttonIds from '../../constants/buttonIds.constants';

export default (
  items,
  digitHandler,
  removeHandler,
  solveHandler
) => items.map(item => {
  const { id } = item;
  if (id === buttonIds.SOLVE_BTN_ID) {
    item.handler = solveHandler;
  } else if (id === buttonIds.REMOVE_BTN_ID) {
    item.handler = removeHandler;
  } else {
    item.handler = digitHandler;
  }
  return item;
});