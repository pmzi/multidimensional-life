import React from 'react';

import Text from './Text/index';

class TextAnimator extends React.PureComponent{

  state = {
    opacity: 0,
    left: 0,
    top: 0,
  };

  componentDidMount(){
    this.initializeTheatre();
  }

  initializeTheatre(){
    const { name, timeline } = this.props;

    const textAnimatorObject = timeline.getObject(name, {}, {
      props: {
        opacity: {
          type: 'number',
        },
        left: {
          type: 'number',
        },
        top: {
          type: 'number',
        },
      },
    });

    textAnimatorObject.onValuesChange(({ opacity, left, top })=>{
      this.setState({
        opacity,
        left,
        top,
      })
    })
  }

  render(){
    const { opacity, left, top } = this.state;
    
    return (
      <Text
        { ...this.props }
        left={left}
        top={top}
        opacity={opacity}
      />
    );
  }
}

export default TextAnimator;