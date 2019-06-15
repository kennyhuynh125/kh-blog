import React from 'react';
import { Container } from 'reactstrap';
import Suggestion from './Suggestion';

const MySuggestions = ({ suggestions }) => (
  <Container>
    {suggestions.map(suggestion => <Suggestion suggestion={suggestion} />)}
  </Container>
);

export default MySuggestions;
