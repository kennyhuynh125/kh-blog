import React from 'react';
import { Route } from 'react-router';

import AddPost from '../AddPost';
import Home from '../Home';
import Login from '../Login';

const Main = () => (
  <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/add' component={AddPost} />
      <Route exact path={process.env.REACT_APP_SECRET_ROUTE} component={Login} />
  </div>
);

export default Main;
