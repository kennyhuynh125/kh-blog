import React from 'react';
import {
  BlogButton, Flex, Spacer, Text,
} from '../reusable';

const AddSuggestion = () => (
  <Flex alignItems='center' flexDirection='column'>
    <Text>Have a suggestion for what I should blog or how to improve the site? Let me know!</Text>
    <Spacer />
    <BlogButton>
      <a href='/add/suggestion'>
        <Text>Add a suggestion</Text>
      </a>
    </BlogButton>
  </Flex>
);

export default AddSuggestion;
