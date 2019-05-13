import React, { Component } from 'react';

export default class ColorBox extends Component {

  constructor(props){
    super(props)
    this.opacityHelper = this.opacityHelper.bind(this)
  }

  
  opacityHelper(){
    let propHelper = this.props.opacity
    console.log("Before change = ", propHelper)
    let convertedProp
    if(propHelper >= 0.2) {
      propHelper = propHelper - 0.1
      if (propHelper > 0.1 && propHelper < 0.2) {
        convertedProp = 0.2
      } else {
        convertedProp = parseFloat(propHelper.toString().slice(0,3))
      }

      console.log(convertedProp)
      console.log("After change = ", convertedProp)
      
      return <div className="color-box" style={{opacity: convertedProp}}>
              <ColorBox opacity={convertedProp}/>
            </div>
    } else if (convertedProp < 0.1) {
      return null
    }
  }


  render() {

    console.log("should be opacity",this.props.opacity)


    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.opacityHelper()}
      </div>
    )
  }
  
}