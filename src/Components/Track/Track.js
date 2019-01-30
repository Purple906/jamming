import React, { Component } from "react";
import "./Track.css";

class Track extends Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
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

  renderAction() {
    return (
      <a className="Track-action" onClick={this.addTrack}>
        {this.props.isRemoval ? "-" : "+"}
      </a>
    );
  }
  //   below is probably wrong. Create an .addTrack() method in the Track component. Use it to add this.props.track to the playlist.
  addTrack() {
    if (this.props.onAdd === true) {
      return this.props.track;
    }
  }
}

export default Track;
