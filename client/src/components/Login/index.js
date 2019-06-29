import React, { Component } from 'react';
import { compose, hoistStatics } from 'recompose';
import * as Yup from 'yup';
import { Container, Error } from '../reusable';
import AuthContainer from '../../actions/auth/container';
import LoginForm from './form';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const { success } = await this.props.authActions.logIn({
        email,
        password,
      });
      if (success) {
        this.props.history.push('/');
      } else {
        throw new Error('Unable to log in.');
      }
    } catch (err) {
      this.setState({
        error: err.message,
      });
    }
  };

  render() {
    const { error, email, password } = this.state;
    const initialValues = { email, password };
    return (
      <Container>
        {error && <Error message={'Unable to log in. Please try again.'} />}
        <LoginForm
          initialValues={initialValues}
          onSubmit={this.handleSubmit}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required('Email is required!'),
            password: Yup.string().required('Password is required!'),
          })}
        />
      </Container>
    );
  }
}

const enhance = hoistStatics(compose(
  AuthContainer,
));

export default enhance(Login);
