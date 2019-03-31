import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    const reducedOpacity = parseFloat((this.props.opacity - 0.1).toFixed(1))

    if (reducedOpacity > 0.5) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={reducedOpacity} />
        </div>
      )
    } else {
      return null
    }
  }
}
