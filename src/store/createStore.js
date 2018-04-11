import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createReducer from '../reducers/rootReducer';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

function configureStore(initialState={}, history) {
  const isDev = process.env.NODE_ENV === 'development';
  const middlewares = [
    routerMiddleware(history),
  ];

  if (isDev) {
    middlewares.push(loggerMiddleware);
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  if (isDev && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    createReducer(),
    initialState,
    compose(...enhancers),
  );

  return store;
}

export default configureStore;
