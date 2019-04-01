import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const opacity = this.props.opacity;
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity}}>
          <ColorBox opacity={opacity - .1} />
        </div>
      )
    } else return null;
  }
}
