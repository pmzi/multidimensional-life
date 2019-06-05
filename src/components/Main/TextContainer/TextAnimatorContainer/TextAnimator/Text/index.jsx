import React from 'react';

import './style.scss';

function Text({left,top,opacity, children, style = {}}) {
  return (
    <span
      style={
        {
          ...style,
          opacity,
          left: `${left}px`,
          top: `${top}px`,
          position: 'relative',
        }
      }
      className="text"
    >
      { children }
    </span>
  );
}

export default Text;