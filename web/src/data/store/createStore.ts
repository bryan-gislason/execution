import { combineReducers, createStore as createReduxStore } from 'redux';
import * as reducers from '../state/reducers';

interface EnhancedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare var window: EnhancedWindow;

export const createStore = () => {
  const rootReducer = combineReducers(reducers);
  return createReduxStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
