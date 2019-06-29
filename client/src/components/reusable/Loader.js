import React from 'react';
import { Spinner } from 'reactstrap';
import Flex from './Flex';

const Loader = () => (
  <Flex justifyContent='center' alignItems='center'>
    <Spinner type='grow' color='primary' />
  </Flex>
);

export default Loader;
