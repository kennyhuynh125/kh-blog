import axios from 'axios';
import {
  CREATE_USER,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
} from '../action-types';
import { isResponseOk } from '../../utils';

export const createUser = ({ email, password }) => async (dispatch) => {
  dispatch({ type: CREATE_USER });
  try {
    const url = '/users';
    const response = axios.post(url, {
      email,
      password,
    });
    if (isResponseOk(response.status)) {
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: CREATE_USER_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const logIn = ({ email, password }) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const url = '/users';
    const response = await axios.put(url, {
      email,
      password,
    });
    if (isResponseOk(response.status)) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    dispatch({ type: LOGOUT_SUCCESS });
    return { success: true };
  } catch (err) {
    dispatch({ type: LOGOUT_FAIL, payload: err });
    return { success: false, payload: err };
  }
};
