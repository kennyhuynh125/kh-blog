import React from 'react';
import { Container } from 'reactstrap';
import Text from './Text';

const Unauthorized = () => (
  <Container>
    <Text>Uh oh! You are not authorized to view this page!</Text>
  </Container>
);

export default Unauthorized;
