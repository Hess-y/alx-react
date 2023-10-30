// Import necessary individual reducers
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

// Import the combineReducers function from Redux
import { combineReducers } from 'redux';

// Define the root reducer using combineReducers
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
