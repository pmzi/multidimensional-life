import React from 'react';

import './style.scss';

function Text({opacity, children, style}) {
  return (
    <span
      style={
        {
          ...style,
          opacity,
        }
      }
      className="text"
    >
      { children }
    </span>
  );
}

export default Text;