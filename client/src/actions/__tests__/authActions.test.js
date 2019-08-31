import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../auth/auth-actions';
import * as types from '../action-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
describe('auth actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('creates LOGIN_SUCCESS when a user successfully logs in', async () => {
    const expectedActions = [
      { type: types.LOGIN },
      { type: types.LOGIN_SUCCESS, payload: { id: 1, email: 'test@test.com' } },
    ];
    mock.onPut('/users', { email: 'test@test.com', password: 'password' }).reply(200, {
      id: 1,
      email: 'test@test.com',
    });
    const store = mockStore({ user: null });
    await store.dispatch(actions.logIn({ email: 'test@test.com', password: 'password' }));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates LOGOUT_SUCCESS when a user successfully logs out', async () => {
    const expectedActions = [
      { type: types.LOGOUT },
      { type: types.LOGOUT_SUCCESS },
    ];
    const store = mockStore({});
    await store.dispatch(actions.logOut());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
