import React, { Component } from 'react';
import { compose, hoistStatics } from 'recompose';
import AuthContainer from './actions/auth/container';
import PostContainer from './actions/posts/container';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  async componentDidMount() {
    await this.props.postActions.getAllPosts();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.children}
          </a>
        </header>
      </div>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
  PostContainer,
));

export default enhance(App);
