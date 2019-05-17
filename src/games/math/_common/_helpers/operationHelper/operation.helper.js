import operations from '../../constants/operations';

export const getOperationSymbol = operation => operations[operation] && operations[operation].symbol;

export default getOperationSymbol;
