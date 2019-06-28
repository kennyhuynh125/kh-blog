import React from 'react';
import Container from './Container';
import Flex from './Flex';
import Spacer from './Spacer';
import Text from './Text';
import { ERROR_TEXT } from '../../constants';

const Error = ({ message = null } = {}) => (
  <Container>
    <Flex flexDirection='column'>
      <Text>{ERROR_TEXT}</Text>
      <Text>Error: {message}</Text>
    </Flex>
    <Spacer />
  </Container>
);

export default Error;
