import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    return (
      // In the Track.js '-' element, add an onClick property with the value set to the this.removeTrack method.
      // I think I need to break out the different values so this.addTrack is on the '+' and '-' is on the this.removeTrack
      <a
        className="Track-action"
        onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}
      >
        {this.props.isRemoval ? "-" : "+"}
        {/* {if(this.props.isRemove === true) {
            return '-';
        } else {
            return '+';
        }} */}
      </a>
    );
  }

  addTrack() {
    if (!this.props.isRemoval) {
      // this is not a function
      this.props.onAdd(this.props.track);
    }
  }

  removeTrack() {
    if (this.props.isRemoval) {
      this.props.onRemove(this.props.track);
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
