import React from 'react';
import { Col, Container } from 'reactstrap';

const defaultStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
};

const Column = ({ children, className, style = defaultStyle } = {}) => (
  <Container>
    <Col className={className} style={style}>
      {children}
    </Col>
  </Container>
);

export default Column;
