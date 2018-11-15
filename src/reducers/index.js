import { combineReducers } from 'redux';
import SoulPrintReducer from './reducer_soul_print'

const rootReducer = combineReducers({
  soulPrint: SoulPrintReducer
});

export default rootReducer;
