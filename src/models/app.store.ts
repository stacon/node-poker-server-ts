import { createStore, applyMiddleware, compose } from 'redux';
import {
  createEpicMiddleware,
} from 'redux-observable';
import rootReducer from './root.reducer';
import rootEpic from './root.epic';
import { SystemState } from '../libs/types';


export interface AppState {
  system: SystemState,
}

const { __REDUX_DEVTOOLS_EXTENSION__: devToolsExtension } = (global as any);

const enhancers: any[] = [];

if (devToolsExtension && typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}


const epicMiddleware = createEpicMiddleware();
const middlewares = [
  epicMiddleware,
];

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middlewares),
    ...enhancers,
  ),
);

epicMiddleware.run(<any>rootEpic);


export default store;