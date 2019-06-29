import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
};

const Container = ({ children }) => (
  <div style={style}>
    {children}
  </div>
);

export default Container;
