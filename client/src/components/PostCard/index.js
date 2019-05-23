import React from 'react';
import moment from 'moment-timezone';
import {
  BlogButton, Card, Spacer, Text,
} from '../reusable';
import { convertToText, getIntro } from '../../utils';

const style = {
  backgroundColor: 'white',
  border: 'solid',
  borderColor: 'black',
  borderRadius: '25px',
  borderWidth: '1px',
  fontFamily: 'Quicksand',
};
const PostCard = ({ post, onClick }) => (
  <Card style={style}>
    <Spacer />
    <Text size='small'>{moment(post.created_at).format('ll')}</Text>
    <Spacer />
    <Text size='big'>{post.title}</Text>
    <Spacer />
    <Text size='small'>{getIntro(convertToText(post.content))}</Text>
    <Spacer />
    <BlogButton onClick={onClick}>Read More</BlogButton>
    <Spacer />
  </Card>
);

export default PostCard;
