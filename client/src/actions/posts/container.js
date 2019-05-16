import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getAllPosts,
} from './post-actions';

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = dispatch => ({
  postActions: bindActionCreators({
    getAllPosts,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
