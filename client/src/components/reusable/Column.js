import React from 'react';
import { Col } from 'reactstrap';

const defaultStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
};

const Column = ({ children, className, style = defaultStyle } = {}) => (
  <Col className={className} style={style}>
    {children}
  </Col>
);

export default Column;
