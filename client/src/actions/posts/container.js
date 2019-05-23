import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  setPost,
  updatePost,
} from './post-actions';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  postActions: bindActionCreators({
    createPost,
    deletePost,
    getAllPosts,
    getPost,
    setPost,
    updatePost,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
