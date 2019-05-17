import operations from '../../constants/operations';

export default (firstDigit, secondDigit, operation) => {
  if (operation === operations.addition.name) {
    return firstDigit + secondDigit;
  } else if (operation === operations.subtraction.name) {
    return firstDigit - secondDigit;
  }
  return null;
};
