import React, { Component } from 'react';
import { compose, hoistStatics } from 'recompose';
import { Container } from 'reactstrap';
import AuthContainer from '../../actions/auth/container';
import PostContainer from '../../actions/posts/container';
import {
  BlogButton, Error, Loader, Text,
} from '../reusable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      await this.props.postActions.getAllPosts();
      this.setState({
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err,
      });
    }
  }

  // handleOnPostPress = (id) => {

  // };

  render() {
    const { isLoading, error } = this.state;
    console.log(this.props);
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error.message} />;
    }
    return (
      <Container>
        <Text>Hello</Text>
        <BlogButton>Hello</BlogButton>
      </Container>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
  PostContainer,
));

export default enhance(Home);
