import operations from '../../constants/operations';
import getDigit from '../getDigit';

export default (quantity, level, operation) => {
  const digits = Array.from({ length: quantity }, () => getDigit(level));

  if (operation === operations.subtraction.name) {
    return digits.sort((a, b) => b - a);
  }

  return digits;
};
