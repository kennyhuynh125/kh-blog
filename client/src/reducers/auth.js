import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
} from '../actions/action-types';

const initialState = {
  isAuthenticated: false,
  isLoggingIn: false,
  isLoggingOut: false,
  error: null,
  user: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggingIn: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggingOut: true,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoggingOut: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: null,
      };
    case CREATE_USER:
      return {
        ...state,
        isCreatingUser: true,
      };
    case CREATE_USER_FAIL:
      return {
        ...state,
        isCreatingUser: false,
        error: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreatingUser: false,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};

export default AuthReducer;
