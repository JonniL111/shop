import { combineReducers } from 'redux';

import goods from './goods';
import filters from './filters';

const rootReducer = combineReducers({
  goods,
  filters,
});

export default rootReducer;
