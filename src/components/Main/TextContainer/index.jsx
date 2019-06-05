import React from 'react';

import TextAnimatorContainer from './TextAnimatorContainer';

function TextContainer({ timeline }){
  return (
    <React.Fragment>
      <TextAnimatorContainer
        timelineName="First"
      >
        { `
          { salam } { khubi? }
        ` }
      </TextAnimatorContainer>
      <TextAnimatorContainer
        timelineName="Second"
      >
        { `
          { salam } { khubi? }
        ` }
      </TextAnimatorContainer>
    </React.Fragment>
  );
}

export default TextContainer;