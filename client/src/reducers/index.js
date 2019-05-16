import { combineReducers } from 'redux';
import AuthReducer from './auth';
import PostReducer from './posts';

const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
});

export default rootReducer;
