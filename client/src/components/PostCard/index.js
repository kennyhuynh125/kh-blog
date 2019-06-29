import React from 'react';
import moment from 'moment-timezone';
import {
  BlogButton, Flex, Spacer, Text,
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
  <Flex overStyle={style} flexDirection='column'>
    <Flex justifyContent='space-between' width='90%'>
      <Text size='big'>{post.title}</Text>
      <Text size='small'>{moment(post.created_at).format('ll')}</Text>
    </Flex>
    <Spacer />
    <Flex justifyContent='space-between' width='90%'>
      <Text size='small'>{getIntro(convertToText(post.content))}</Text>
      <BlogButton onClick={onClick}>Read More</BlogButton>
    </Flex>
    <Spacer />
  </Flex>
);

export default PostCard;
