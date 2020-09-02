import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';
import { loadState, saveState } from './localStore';

const localStorageState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, localStorageState, composeEnhancers(
    applyMiddleware(...middlewares)
));

sagaMiddleware.run(sagas);

// const store = createStore(
//     reducers,
//     localStorageState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

store.subscribe(() => {
    saveState({ list: store.getState().list });
})

export default store;