import React, { Component } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          //   Pass isRemoval with a value of true down to TrackList.
          isRemoval={true}
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
