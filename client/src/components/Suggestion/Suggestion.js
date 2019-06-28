import React from 'react';
import {
  Card, Container, Spacer, Text,
} from '../reusable';

const Suggestion = ({ suggestion }) => (
  <Container>
    <Card>
      <Text>{suggestion.suggestion}</Text>
    </Card>
    <Spacer />
  </Container>
);

export default Suggestion;
