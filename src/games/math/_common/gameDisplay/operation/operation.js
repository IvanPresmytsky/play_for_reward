import React from 'react';
import getOperationSymbol from '../../_helpers/operationHelper';
import style from './operation.css';

export const Operation = ({ operation }) => (
  <div className={style.operationContainer}>
    <span className={style.operation}>
      {getOperationSymbol(operation)}
    </span>
  </div>
);

export default Operation;
