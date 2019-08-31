import PostReducer from '../posts';
import * as types from '../../actions/action-types';

describe('PostReducer', () => {
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

  it('should return initialState', () => {
    expect(PostReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle GET_ALL_POSTS', () => {
    const mockAction = {
      type: types.GET_ALL_POSTS,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isFetchingPosts: true,
      },
    );
  });

  it('should handle GET_ALL_POSTS_FAIL', () => {
    const mockAction = {
      type: types.GET_ALL_POSTS_FAIL,
      payload: new Error('Fetch failed!'),
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Fetch failed!'),
      },
    );
  });

  it('should handle GET_ALL_POSTS_SUCCESS', () => {
    const mockAction = {
      type: types.GET_ALL_POSTS_SUCCESS,
      payload: [
        {
          id: 1,
          title: 'test post',
          content: 'hello this is a test post',
        },
      ],
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        posts: [
          {
            id: 1,
            title: 'test post',
            content: 'hello this is a test post',
          },
        ],
      },
    );
  });

  it('should handle GET_POST', () => {
    const mockAction = {
      type: types.GET_POST,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isFetchingPost: true,
      },
    );
  });

  it('should handle GET_POST_FAIL', () => {
    const mockAction = {
      type: types.GET_POST_FAIL,
      payload: new Error('Fetch failed!'),
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Fetch failed!'),
      },
    );
  });

  it('should handle GET_POST_SUCCESS', () => {
    const mockAction = {
      type: types.GET_POST_SUCCESS,
      payload: {
        id: 1,
        title: 'test',
        content: 'test post',
      },
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        post: {
          id: 1,
          title: 'test',
          content: 'test post',
        },
      },
    );
  });

  it('should handle CREATE_POST', () => {
    const mockAction = {
      type: types.CREATE_POST,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isCreatingPost: true,
      },
    );
  });

  it('should handle CREATE_POST_FAIL', () => {
    const mockAction = {
      type: types.CREATE_POST_FAIL,
      payload: new Error('Creation failed!'),
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Creation failed!'),
      },
    );
  });

  it('should handle CREATE_POST_SUCCESS', () => {
    const mockAction = {
      type: types.CREATE_POST_SUCCESS,
      payload: {
        id: 1,
        title: 'created post',
        content: 'created test post',
      },
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        post: {
          id: 1,
          title: 'created post',
          content: 'created test post',
        },
      },
    );
  });

  it('should handle UPDATE_POST', () => {
    const mockAction = {
      type: types.UPDATE_POST,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isUpdatingPost: true,
      },
    );
  });

  it('should handle UPDATE_POST_FAIL', () => {
    const mockAction = {
      type: types.UPDATE_POST_FAIL,
      payload: new Error('Update failed!'),
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Update failed!'),
      },
    );
  });

  it('should handle UPDATE_POST_SUCCESS', () => {
    const mockAction = {
      type: types.UPDATE_POST_SUCCESS,
      payload: [{
        id: 1,
        title: 'test',
        content: 'updated post',
      }],
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        post: {
          id: 1,
          title: 'test',
          content: 'updated post',
        },
      },
    );
  });

  it('should handle DELETE_POST', () => {
    const mockAction = {
      type: types.DELETE_POST,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isDeletingPost: true,
      },
    );
  });

  it('should handle DELETE_POST_FAIL', () => {
    const mockAction = {
      type: types.DELETE_POST_FAIL,
      payload: new Error('Delete failed!'),
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Delete failed!'),
      },
    );
  });

  it('should handle DELETE_POST_SUCCESS', () => {
    const mockAction = {
      type: types.DELETE_POST_SUCCESS,
    };
    expect(PostReducer(initialState, mockAction)).toEqual(initialState);
  });

  it('should handle SET_POST', () => {
    const mockAction = {
      type: types.SET_POST,
      payload: {
        id: 1,
        title: 'test',
        content: 'post content',
      },
    };
    expect(PostReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        post: {
          id: 1,
          title: 'test',
          content: 'post content',
        },
      },
    );
  });
});
