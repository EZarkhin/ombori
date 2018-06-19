import { combineReducers } from 'redux';

import users from './users';
import details from './details';

export default combineReducers({
  users,
  details,
});
