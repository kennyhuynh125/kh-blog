import React from 'react';
import { Container, Spinner } from 'reactstrap';

const Loader = () => (
  <Container>
    <Spinner type='grow' color='primary' />
  </Container>
);

export default Loader;
