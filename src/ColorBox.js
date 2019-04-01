import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      // <div className="color-box" style={{opacity: 2}}>
      //   {if (opacity < 0.2){
      //     return null
      //   }else{
      //     return colorbox
      //     opacity = opacity - 0.1
      //   }
      //   }}
      // </div>
      <div className="color-box" style={{opacity: this.props.opacity}}>
       {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
     </div>
    )
  }

}
