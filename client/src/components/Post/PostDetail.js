import React from 'react';
import Parser from 'html-react-parser';
import { Card, Text } from '../reusable';

const PostDetail = ({ post }) => (
  <Card>
    <Text size='big'>{post.title}</Text>
    <Text>
      {Parser(post.content)}
    </Text>
  </Card>
);

export default PostDetail;
