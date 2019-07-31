import AuthReducer from '../auth';
import * as types from '../../actions/action-types';

describe('AuthReducer', () => {
  const initialState = {
    isAuthenticated: false,
    isLoggingIn: false,
    isLoggingOut: false,
    error: null,
    user: null,
  };
  it('should reutrn the initial state', () => {
    expect(AuthReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle LOGIN', () => {
    const mockAction = {
      type: types.LOGIN,
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isLoggingIn: true,
      },
    );
  });

  it('should handle LOGIN_FAIL', () => {
    const mockAction = {
      type: types.LOGIN_FAIL,
      payload: new Error('Login failed!'),
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Login failed!'),
      },
    );
  });

  it('should handle LOGIN_SUCCESS', () => {
    const mockAction = {
      type: types.LOGIN_SUCCESS,
      payload: {
        id: '1',
        email: 'test@test.com',
      },
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isAuthenticated: true,
        user: {
          id: '1',
          email: 'test@test.com',
        },
      },
    );
  });

  it('should handle LOGOUT', () => {
    const mockAction = {
      type: types.LOGOUT,
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isLoggingOut: true,
      },
    );
  });

  it('should handle LOGOUT_FAIL', () => {
    const mockAction = {
      type: types.LOGOUT_FAIL,
      payload: new Error('Logout failed!'),
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Logout failed!'),
      },
    );
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const mockAction = {
      type: types.LOGOUT_SUCCESS,
    };
    expect(AuthReducer(initialState, mockAction)).toEqual(initialState);
  });
});
