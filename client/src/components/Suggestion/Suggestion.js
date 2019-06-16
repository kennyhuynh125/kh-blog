import React from 'react';
import { Container } from 'reactstrap';
import { Card, Spacer, Text } from '../reusable';

const Suggestion = ({ suggestion }) => (
  <Container>
    <Card>
      <Text>{suggestion.suggestion}</Text>
    </Card>
    <Spacer />
  </Container>
);

export default Suggestion;
