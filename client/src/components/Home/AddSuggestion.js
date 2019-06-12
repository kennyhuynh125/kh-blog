import React from 'react';
import { Container } from 'reactstrap';
import { BlogButton, Text } from '../reusable';

const AddSuggestion = () => (
  <Container>
    <Text>Have a suggestion for what I should blog or how to improve the site? Let me know!</Text>
    <BlogButton>
      <a href='/add/suggestion'>
        <Text>Add a suggestion</Text>
      </a>
    </BlogButton>
  </Container>
);

export default AddSuggestion;
