import React from 'react';
import { Container } from 'reactstrap';
import Text from './Text';
import { ERROR_TEXT } from '../../constants';

const Error = ({ message = null } = {}) => (
  <Container>
    <Text>{ERROR_TEXT}</Text>
    <Text>Error: {message}</Text>
  </Container>
);

export default Error;
