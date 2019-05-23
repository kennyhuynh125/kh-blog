import React, { Component, Fragment } from 'react';
import { compose, hoistStatics } from 'recompose';
import { Container } from 'reactstrap';
import moment from 'moment-timezone';
import AuthContainer from '../../actions/auth/container';
import PostContainer from '../../actions/posts/container';
import { Error, Loader, Spacer } from '../reusable';
import PostCard from '../PostCard';

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

  handleOnPostPress = async (post) => {
    const { success } = await this.props.postActions.setPost(post);
    if (success) {
      this.props.history.push(`/post/${post.id}`);
    }
  };

  render() {
    const { isLoading, error } = this.state;
    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error message={error.message} />;
    }
    const { posts } = this.props.posts;
    const orderedPosts = posts.sort((a, b) => moment(b.created_at).valueOf() - moment(a.created_at).valueOf());
    return (
      <Container>
        {orderedPosts.map(post => (
          <Fragment>
            <PostCard key={post.id} onClick={() => this.handleOnPostPress(post)} post={post} />
            <Spacer />
          </Fragment>
        ))}
      </Container>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
  PostContainer,
));

export default enhance(Home);
