
import React from 'react';

const Flex = ({
  children,
  className,
  alignItems = 'center',
  flexDirection = 'row',
  justifyContent = 'center',
  overStyle = {},
  width = '100%',
} = {}) => {
  const style = {
    display: 'flex',
    alignItems,
    flexDirection,
    justifyContent,
    width,
    ...overStyle,
  };
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Flex;
