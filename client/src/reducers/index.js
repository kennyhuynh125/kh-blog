import { combineReducers } from 'redux';
import AuthReducer from './auth';
import PostReducer from './posts';
import SuggestionReducer from './suggestions';

const rootReducer = combineReducers({
  auth: AuthReducer,
  posts: PostReducer,
  suggestions: SuggestionReducer,
});

export default rootReducer;
