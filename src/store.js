import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers'
// Нужен для того, чтобы все reducer файлы объединялись в один.

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));
    return store;
};

