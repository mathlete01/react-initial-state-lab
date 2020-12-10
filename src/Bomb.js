import React, { Component } from "react";

export default class Bomb extends Component {
  //Use th constructor to set the initial state
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    return (
      <div className="Bomb">
          {this.state.secondsLeft < 1 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    );
  }
}
