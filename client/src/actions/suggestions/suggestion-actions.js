import axios from 'axios';
import {
  CREATE_SUGGESTION,
  CREATE_SUGGESTION_FAIL,
  CREATE_SUGGESTION_SUCCESS,
  DELETE_SUGGESTION,
  DELETE_SUGGESTION_FAIL,
  DELETE_SUGGESTION_SUCCESS,
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_FAIL,
  GET_SUGGESTIONS_SUCCESS,
} from '../action-types';
import { isResponseOk } from '../../utils';

export const getSuggestions = () => async (dispatch) => {
  dispatch({ type: GET_SUGGESTIONS });
  try {
    const url = '/suggestions';
    const response = await axios.get(url);
    if (isResponseOk(response.status)) {
      dispatch({ type: GET_SUGGESTIONS_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: GET_SUGGESTIONS_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const createSuggestion = ({ name, suggestion, suggestionType }) => async (dispatch) => {
  dispatch({ type: CREATE_SUGGESTION });
  try {
    const url = '/suggestions';
    const response = await axios.post(url, {
      name,
      suggestion,
      suggestionType,
    });
    if (isResponseOk(response.status)) {
      dispatch({ type: CREATE_SUGGESTION_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: CREATE_SUGGESTION_FAIL, payload: err });
    return { success: false, payload: err };
  }
};

export const deleteSuggestion = id => async (dispatch) => {
  dispatch({ type: DELETE_SUGGESTION });
  try {
    const url = `/suggestions/${id}`;
    const response = await axios.post(url);
    if (isResponseOk(response.status)) {
      dispatch({ type: DELETE_SUGGESTION_SUCCESS, payload: response.data });
      return { success: true, payload: response.data };
    }
    throw Object.assign(new Error(), response.data);
  } catch (err) {
    dispatch({ type: DELETE_SUGGESTION_FAIL, payload: err });
    return { success: false, payload: err };
  }
};
