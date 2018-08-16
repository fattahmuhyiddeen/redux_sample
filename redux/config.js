import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducer';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = applyMiddleware(sagaMiddleware)(createStore)(reducers);
  sagaMiddleware.run(saga);
  return store;
};

