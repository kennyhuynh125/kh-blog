import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  createUser,
  logIn,
  logOut,
} from './auth-actions';

const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators({
    createUser,
    logIn,
    logOut,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps);
