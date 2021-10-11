import { combineReducers } from 'redux';
import { modalReducer } from './modal';
import { settingsReducer } from './settings';
import { buildsReducer } from './builds';

export const rootReducer = combineReducers({
  builds: buildsReducer,
  modal: modalReducer,
  settings: settingsReducer,
});
