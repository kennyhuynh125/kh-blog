import SuggestionReducer from '../suggestions';
import * as types from '../../actions/action-types';

describe('SuggestionReducer', () => {
  const initialState = {
    isCreatingSuggestion: false,
    isDeletingSuggestion: false,
    isFetchingSuggestions: false,
    error: null,
    suggestions: [],
  };

  it('should return the initialState', () => {
    expect(SuggestionReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle CREATE_SUGGESTION', () => {
    const mockAction = {
      type: types.CREATE_SUGGESTION,
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isCreatingSuggestion: true,
      },
    );
  });

  it('should handle CREATE_SUGGESTION_FAIL', () => {
    const mockAction = {
      type: types.CREATE_SUGGESTION_FAIL,
      payload: new Error('Create failed!'),
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Create failed!'),
      },
    );
  });

  it('should handle CREATE_SUGESTION_SUCCESS', () => {
    const mockAction = {
      type: types.CREATE_SUGGESTION_SUCCESS,
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(initialState);
  });

  it('should handle DELETE_SUGGESTION', () => {
    const mockAction = {
      type: types.DELETE_SUGGESTION,
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isDeletingSuggestion: true,
      },
    );
  });

  it('should handle DELETE_SUGGESTION_FAIL', () => {
    const mockAction = {
      type: types.DELETE_SUGGESTION_FAIL,
      payload: new Error('Delete failed!'),
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Delete failed!'),
      },
    );
  });

  it('should handle DELETE_SUGGESTION_SUCCESS', () => {
    const mockAction = {
      type: types.DELETE_SUGGESTION_SUCCESS,
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(initialState);
  });

  it('should handle GET_SUGGESTIONS', () => {
    const mockAction = {
      type: types.GET_SUGGESTIONS,
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        isFetchingSuggestions: true,
      },
    );
  });

  it('should handle GET_SUGGESTIONS_FAIL', () => {
    const mockAction = {
      type: types.GET_SUGGESTIONS_FAIL,
      payload: new Error('Fetch failed!'),
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        error: new Error('Fetch failed!'),
      },
    );
  });

  it('should handle GET_SUGGESTIONS_SUCCESS', () => {
    const mockAction = {
      type: types.GET_SUGGESTIONS_SUCCESS,
      payload: [
        {
          id: 1,
          type: 'blog',
          suggestion: 'test suggestion',
        },
        {
          id: 2,
          type: 'feature',
          suggestion: 'add comments',
        },
      ],
    };
    expect(SuggestionReducer(initialState, mockAction)).toEqual(
      {
        ...initialState,
        suggestions: [
          {
            id: 1,
            type: 'blog',
            suggestion: 'test suggestion',
          },
          {
            id: 2,
            type: 'feature',
            suggestion: 'add comments',
          },
        ],
      },
    );
  });
});
