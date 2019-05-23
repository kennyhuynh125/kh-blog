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
  SET_POST,
} from '../actions/action-types';

const initialState = {
  posts: [],
  post: null,
  isCreatingPost: false,
  isFetchingPosts: false,
  isFetchingPost: false,
  isUpdatingPost: false,
  isDeletingPost: false,
  error: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        isFetchingPosts: true,
      };
    case GET_ALL_POSTS_FAIL:
      return {
        ...state,
        isFetchingPosts: false,
        error: action.payload,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingPosts: false,
        posts: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        isFetchingPost: true,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        isFetchingPost: false,
        error: action.payload,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isFetchingPost: false,
        post: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        isCreatingPost: true,
      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        isCreatingPost: false,
        error: action.payload,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        isCreatingPost: false,
        post: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        isUpdatingPost: true,
      };
    case UPDATE_POST_FAIL:
      return {
        ...state,
        isUpdatingPost: false,
        error: action.payload,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        isUpdatingPost: false,
        post: action.payload[0],
      };
    case DELETE_POST:
      return {
        ...state,
        isDeletingPost: true,
      };
    case DELETE_POST_FAIL:
      return {
        ...state,
        isDeletingPost: false,
        error: action.payload,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isDeletingPost: false,
        post: null,
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
