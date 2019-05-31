import { combineReducers } from 'redux';

import { reducer as podcasts } from './podscats';

const reducers = combineReducers({
  podcasts,
});

export default reducers;
