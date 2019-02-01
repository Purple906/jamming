import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [
        {
          name: "Smooth Criminal",
          artist: "Michael Jackson",
          album: "Bad",
          id: 1
        },
        {
          name: "I want to be rich",
          artist: "Lianel Richie",
          album: "Richy Rich",
          id: 2
        },
        {
          name: "Ring of Fire",
          artist: "Johnny Cash",
          album: "Fire of the Rings",
          id: 3
        }
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        {
          name: "Heavy into your arms",
          artist: "Mumford and Sons",
          album: "Babel",
          id: 5
        },
        {
          name: "Closer",
          artist: "Kings of Leon",
          album: "Buterflies",
          id: 9
        },
        {
          name: "One Foot",
          artist: "Walk the Moon",
          album: "Painting",
          id: 10
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const playlistTracks = this.state;
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      playlistTracks.push(track);
      this.setState(playlistTracks);
    }
  }
  //   create a method called removeTrack with the following functionality: Accepts a track argument, Uses the track's id property to filter it out of playlistTracks, Sets the new state of the playlist
  removeTrack(track) {
    const playlistTracks = this.state;

    const tmpTracks = playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );
    this.setState(playlistTracks, tmpTracks);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
