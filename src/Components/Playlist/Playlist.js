import React, { Component } from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }
  //   Whatever you pass to this.props.onNameChange is what you have to deal with in App.js … here you were passing an object with a playlistName property with the value of the input (event.target is the input element), so updatePlaylistName was getting { playlistName: "whatever was in the input field" } … that obviously doesn't have a target (so it's undefined) and you can't access value of undefined
  //   handleNameChange(e) {
  //     this.props.onNameChange({ playlistName: e.target.value });
  //   }
  handleNameChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          //   Pass isRemoval with a value of true down to TrackList.
          isRemoval={true}
        />
        <a className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}

export default Playlist;
