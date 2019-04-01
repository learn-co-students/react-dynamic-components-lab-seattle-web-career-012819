import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if(this.props.opacity > 0.2){
      console.log(this.props.opacity)
      return (
        <div class="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    }else{
      return null;
    }
  }

}
