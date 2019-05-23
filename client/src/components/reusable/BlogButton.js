import React from 'react';
import { Button, Container } from 'reactstrap';
import { COLORS } from '../../constants';

const BlogButton = ({
  children = null,
  color = 'primary',
  onClick = null,
  outline = true,
  size,
} = {}) => (
  <Container>
    <Button
      color={color}
      onClick={onClick}
      outline={outline}
      style={{ color: COLORS.BABY_BLUE, fontFamily: 'Quicksand' }}
      size={size}
      type='submit'
    >
      {children}
    </Button>
  </Container>
);

export default BlogButton;
