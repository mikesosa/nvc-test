import { combineReducers } from '@reduxjs/toolkit';
import showsReducer from './shows';

const combinedReducer = combineReducers({
  shows: showsReducer
});

export default combinedReducer;
