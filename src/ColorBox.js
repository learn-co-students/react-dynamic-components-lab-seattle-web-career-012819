import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }
  
}

//got rid of style={{opacity: 2}} from the div tags because i assume we are going to be fiddling with the opacity so it shouldn't be hard coded to one value every time we render the colorbox? idk