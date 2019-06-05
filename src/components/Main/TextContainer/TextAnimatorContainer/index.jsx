import React from 'react';

import TextAnimator from './TextAnimator';

import clamp from '../../../../utility/clamp';

const Theatre = window.Theatre;

class TextAnimatorContainer extends React.Component{
  state = {
    x: 0,
    y: 0,
  };

  constructor(props){
    super(props);
    const { timelineName } = this.props;
    const project = Theatre.getProject('Creative Coding');
    this.timeline = project.getTimeline(timelineName);

    const defaultObject = this.timeline.getObject('default', {}, {
      props: {
        x: {
          type: 'number',
        },
        y: {
          type: 'number',
        },
      },
    });
    defaultObject.onValuesChange(({ x, y })=>{
      this.setState({
        x,
        y,
      });
    })
  }

  componentDidMount(){
    const project = Theatre.getProject('Creative Coding');
    const { timelineName } = this.props;
    const mainTimeline = project.getTimeline('Main');
    const textAnimatorObject = mainTimeline.getObject(timelineName, {}, {
      props: {
        show: {
          type: 'number',
        },
      },
    });

    textAnimatorObject.onValuesChange(({ show })=>{
      this.timeline.time = clamp(show, 0, 1000);
    });
  }
  getTexts(){
    const parsedElements = [];
    const textRegExp = /\{(.+?)\}/g;
    const textRegExp1 = /.*\{(.+)/;
    const { children } = this.props;
    let parsedText;
    while(parsedText = textRegExp.exec(children)){
      let style = {};
      parsedText = parsedText[1].trimRight();
      if(textRegExp1.test(parsedText)){
        parsedText = parsedText.replace(/[\{\}]/g, '').trimRight();
        style = {
          display: 'block',
        };
      }
      parsedElements.push(
        <TextAnimator
          style={style}
          timeline={this.timeline}
          key={parsedText.trim()}
          name={parsedText.trim().substr(0, 10)}
        >
          { parsedText }
        </TextAnimator>
      );
    }
    return parsedElements;
  }

  render(){
    const { x, y } = this.state;
    const { style } = this.props;
    return (
      <div style={{
        left: x,
        top: y,
        position: 'absolute',
        ...style,
      }}>
        { this.getTexts() }
      </div>
    );
  }
}

export default TextAnimatorContainer;