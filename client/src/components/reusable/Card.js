import React from 'react';
import { Container } from 'reactstrap';
import { COLORS } from '../../constants';

const defaultStyle = {
  backgroundColor: 'white',
  fontFamily: 'Quicksand',
  color: COLORS.DARK_BLUE,
};

const Card = ({ children, style = defaultStyle }) => (
  <Container style={style}>
    {children}
  </Container>
);

export default Card;
