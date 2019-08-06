import React, { Component } from 'react';
import ImageSlider from './ImageSlider.js'

export default class Bomb extends Component {

constructor(props) {
    super(props)
    this.state = {
        secondsLeft: props.initialCount
    }
}


  render() {
      return(
          this.state.secondsLeft === 0 ? <h3>Boom!</h3> : <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
      )
  }
}
