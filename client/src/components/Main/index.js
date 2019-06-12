import React from 'react';
import { Route } from 'react-router';

import AddPost from '../AddPost';
import Home from '../Home';
import Login from '../Login';
import Post from '../Post';
import Suggestion from '../Suggestion';

const Main = () => (
  <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/add/post' component={AddPost} />
      <Route exact path='/add/suggestion' component={Suggestion} />
      <Route exact path='/post/:id' component={Post} />
      <Route exact path={process.env.REACT_APP_SECRET_ROUTE} component={Login} />
  </div>
);

export default Main;
