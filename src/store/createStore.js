import '@babel/polyfill';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import rootSaga from '~/sagas/root.saga';
import createReducer from '~/reducers/root.reducer';


function configureStore(initialState = {}, history) {
  const isDev = process.env.NODE_ENV === 'development';
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];
  
  if (isDev) {
    const loggerMiddleware = createLogger();
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

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
