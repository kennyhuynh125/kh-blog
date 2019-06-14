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
} from '../actions/action-types';

const initialState = {
  isCreatingSuggestion: false,
  isDeletingSuggestion: false,
  isFetchingSuggestions: false,
  error: null,
  suggestions: [],
};

const SuggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUGGESTION:
      return {
        ...state,
        isCreatingSuggestion: true,
      };
    case CREATE_SUGGESTION_FAIL:
      return {
        ...state,
        isCreatingSuggestion: false,
        error: action.payload,
      };
    case CREATE_SUGGESTION_SUCCESS:
      return {
        ...state,
        isCreatingSuggestion: false,
      };
    case DELETE_SUGGESTION:
      return {
        ...state,
        isDeletingSuggestion: true,
      };
    case DELETE_SUGGESTION_FAIL:
      return {
        ...state,
        isDeletingSuggestion: false,
        error: action.payload,
      };
    case DELETE_SUGGESTION_SUCCESS:
      return {
        ...state,
        isDeletingSuggestion: true,
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        isFetchingSuggestions: true,
      };
    case GET_SUGGESTIONS_FAIL:
      return {
        ...state,
        isFetchingSuggestions: false,
        error: action.payload,
      };
    case GET_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        isFetchingSuggestions: false,
        suggestions: action.payload,
      };
    default:
      return state;
  }
};

export default SuggestionReducer;
