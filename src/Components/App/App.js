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
    this.state.addTrack = this.state.addTrack.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      return;
    }
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
              onAdd={this.state.addTrack()}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
