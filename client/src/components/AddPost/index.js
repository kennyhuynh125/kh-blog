import React, { Component } from 'react';
import { compose, hoistStatics } from 'recompose';
import { Container } from 'reactstrap';
import { EditorState, convertToRaw } from 'draft-js';
import * as Yup from 'yup';
import draftToHtml from 'draftjs-to-html';
import AuthContainer from '../../actions/auth/container';
import PostContainer from '../../actions/posts/container';
import AddPostForm from './AddPostForm';
import { Error, Unauthorized } from '../reusable';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      error: null,
      title: '',
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  handleOnSubmit = async (values) => {
    const { editorState } = this.state;
    const { title } = values;
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const userId = this.props.auth.user.id;
    try {
      const { success } = await this.props.postActions.createPost({
        title,
        content,
        userId,
      });
      if (success) {
        this.props.history.push('/');
      }
      throw Object.assign(new Error(), 'Unable to create post.');
    } catch (e) {
      this.setState({
        error: e.message,
      });
    }
  }

  render() {
    if (!this.props.auth.user) {
      return <Unauthorized />;
    }
    const { editorState, error, title } = this.state;
    return (
      <Container>
        {error && <Error message={error} />}
        <AddPostForm
          editorState={editorState}
          initialValues={{ title }}
          onEditorStateChange={this.onChange}
          onSubmit={this.handleOnSubmit}
          validationSchema={Yup.object().shape({
            title: Yup.string().required('Title is required!'),
          })}
        />
      </Container>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
  PostContainer,
));

export default enhance(AddPost);
