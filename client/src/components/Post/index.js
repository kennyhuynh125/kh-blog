import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { compose, hoistStatics } from 'recompose';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import * as Yup from 'yup';
import AuthContainer from '../../actions/auth/container';
import PostContainer from '../../actions/posts/container';
import EditModal from './EditModal';
import PostDetail from './PostDetail';
import { BlogButton, Loader } from '../reusable';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editingPost: false,
      editorState: EditorState.createEmpty(),
      error: null,
      isLoading: true,
      title: '',
    };
  }

  async componentDidMount() {
    try {
      const { post } = this.props.posts;
      const postContent = htmlToDraft(post.content);
      const contentState = ContentState.createFromBlockArray(postContent.contentBlocks);
      this.setState({
        title: post.title,
        editorState: EditorState.createWithContent(contentState),
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        error: err.message,
      });
    }
  }

  handleOnChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  // @todo
  handleOnSubmit = async (values) => {
    const { title } = values;
    const { editorState } = this.state;
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const { post } = this.props.posts;
    const { id } = post;
    try {
      const { success } = await this.props.postActions.updatePost({
        title,
        content,
        id,
      });
      if (success) {
        this.setState({
          editingPost: false,
        });
      } else {
        throw Object.assign(new Error(), 'Unable to edit post.');
      }
    } catch (e) {
      this.setState({
        error: e.message,
      });
    }
  }

  handleToggleModal = () => {
    this.setState({
      editingPost: !this.state.editingPost,
    });
  }


  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    const { post } = this.props.posts;
    const { user } = this.props.auth;
    const { editingPost, editorState, title } = this.state;
    return (
      <Container>
        <EditModal
          isOpen={editingPost}
          toggle={this.handleToggleModal}
          editorState={editorState}
          initialValues={{ title }}
          onEditorStateChange={this.handleOnChange}
          onSubmit={this.handleOnSubmit}
          validationSchema={Yup.object().shape({
            title: Yup.string().required('Title is required!'),
          })}
        />
        <PostDetail post={post} />
        {user && (
          <BlogButton onClick={this.handleToggleModal}>
            Edit Post
          </BlogButton>
        )}
      </Container>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
  PostContainer,
));

export default enhance(Post);
