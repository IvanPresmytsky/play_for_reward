import PropTypes from 'prop-types';
import React from 'react';

import getOperationSymbol from '../../../_common/_helpers/operationHelper';
import style from './Operation.css';

export const Operation = ({ operation }) => (
  <div className={style.operationContainer}>
    <span className={style.operation}>
      {getOperationSymbol(operation)}
    </span>
  </div>
);

Operation.propTypes = {
  operation: PropTypes.object.isRequired,
};

export default Operation;
