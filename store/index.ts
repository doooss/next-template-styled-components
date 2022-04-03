import { createStore, Store, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import counter from './counter';
import todos from './todo';

const rootReducer = combineReducers({
  counter,
  todos,
});

const makeStore = () => createStore(rootReducer);

export const wrapper = createWrapper<Store>(makeStore, { debug: true });
