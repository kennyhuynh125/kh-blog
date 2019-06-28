import React from 'react';
import { COLORS } from '../../constants';

const Text = ({
  children,
  color = COLORS.DARK_BLUE,
  size = null,
} = {}) => {
  let fontSize = '18px';
  if (size === 'small') {
    fontSize = '14px';
  }
  if (size === 'big') {
    fontSize = '32px';
  }
  const style = {
    color,
    fontSize,
    fontFamily: 'Quicksand',
  };
  return (
    <span style={style}>
      {children}
    </span>
  );
};

export default Text;
