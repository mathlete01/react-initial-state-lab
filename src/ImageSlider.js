import React, { Component } from "react";

export default class ImageSLider extends Component {
  //Use th constructor to set the initial state
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
  }

  render() {
    return (
      <div className="ImageSlider">
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}
