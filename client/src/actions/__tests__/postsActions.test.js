import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../posts/post-actions';
import * as types from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('posts actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('creates CREATE_POST_SUCCESS when a user successfully creates a post', async () => {
    const expectedActions = [
      { type: types.CREATE_POST },
      {
        type: types.CREATE_POST_SUCCESS,
        payload: {
          id: 1,
          title: 'test',
          content: 'test',
        },
      },
    ];
    mock.onPost('/posts', { title: 'test', content: 'test', userId: 1 }).reply(200, {
      id: 1,
      title: 'test',
      content: 'test',
    });
    const store = mockStore({});
    await store.dispatch(actions.createPost({ title: 'test', content: 'test', userId: 1 }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates GET_POSTS_SUCCESS when a user successfully fetches all the posts', async () => {
    const expectedActions = [
      { type: types.GET_ALL_POSTS },
      {
        type: types.GET_ALL_POSTS_SUCCESS,
        payload: [
          {
            id: 1,
            title: 'test',
            content: 'test',
          },
          {
            id: 2,
            title: 'test2',
            content: 'test2',
          },
        ],
      },
    ];
    mock.onGet('/posts').reply(200,
      [
        {
          id: 1,
          title: 'test',
          content: 'test',
        },
        {
          id: 2,
          title: 'test2',
          content: 'test2',
        },
      ]);
    const store = mockStore({});
    await store.dispatch(actions.getAllPosts());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates GET_POST_SUCCESS when a user successfully fetches a post', async () => {
    const expectedActions = [
      { type: types.GET_POST },
      {
        type: types.GET_POST_SUCCESS,
        payload: {
          id: 1,
          title: 'test',
          content: 'test',
        },
      },
    ];
    mock.onGet('/posts/1').reply(200, {
      id: 1,
      title: 'test',
      content: 'test',
    });
    const store = mockStore({});
    await store.dispatch(actions.getPost(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates UPDATE_POST_SUCCESS when a user successfully updates a post', () => {

  });

  it('creates DELETE_POST_SUCCESS when a user successfully deletes a post', () => {

  });

  it('creates SET_POST_SUCCESS when a user successfully sets a post', () => {

  });
});
