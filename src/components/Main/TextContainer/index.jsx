import React from 'react';

import TextAnimatorContainer from './TextAnimatorContainer';

function TextContainer({ timeline }){
  return (
    <React.Fragment>
      <TextAnimatorContainer
        timelineName="First"
        style={{
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)'
        }}
      >
        { `
          { The effect }
          {{ of }}
          { having multi-dimensional life }
        ` }
      </TextAnimatorContainer>
      <TextAnimatorContainer
        timelineName="Second"
        style={{
          top: '50%',
          left: '10%',
          transform: 'translateY(-50%)'
        }}
      >
        { `
          { Let's consider two types of people }
          {{ Developers }}
          {{ & }}
          {{ Artists! }}
        ` }
      </TextAnimatorContainer>
    </React.Fragment>
  );
}

export default TextContainer;