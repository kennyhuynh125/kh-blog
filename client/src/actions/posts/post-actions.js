import axios from 'axios';
import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  CREATE_POST,
  CREATE_POST_FAIL,
  CREATE_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_FAIL,
  UPDATE_POST_SUCCESS,
  DELETE_POST,
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
} from '../action-types';
import { isResponseOk } from '../../utils';

export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS });
  try {
    const url = '/posts';
    const response = await axios.get(url);
    if (isResponseOk(response.status)) {
      dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: GET_ALL_POSTS_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const getPost = id => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    const url = `/posts/${id}`;
    const response = await axios.get(url);
    if (isResponseOk(response.status)) {
      dispatch({ type: GET_POST_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: GET_POST_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const updatePost = ({ id, title, content }) => async (dispatch) => {
  dispatch({ type: UPDATE_POST });
  try {
    const url = `/posts/${id}`;
    const response = await axios.put(url, {
      title,
      content,
    });
    if (isResponseOk(response.status)) {
      dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
    } else {
      throw Object.assign(new Error(), response.data);
    }
  } catch (err) {
    dispatch({ type: UPDATE_POST_FAIL, payload: err });
    return { success: false, payload: err };
  }
  return null;
};

export const createPost = ({ title, content }) => async (dispatch) => {
  dispatch({ CREATE_POST });
  try {
    const url = '/posts';
    const response = await axios.post(url, {
      title,
      content,
    });
    if (isResponseOk(response.status)) {
      dispatch({ CREATE_POST_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: CREATE_POST_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const deletePost = id => async (dispatch) => {
  dispatch({ type: DELETE_POST });
  try {
    const url = `/posts/${id}`;
    const response = await axios.post(url);
    if (isResponseOk(response.status)) {
      dispatch({ DELETE_POST_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: DELETE_POST_FAIL, payload: err });
    return { success: false, payload: err };
  }
};
