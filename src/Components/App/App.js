import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const { playlistTracks } = this.state;
    if (playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    playlistTracks.push(track);
    this.setState({ playlistTracks });
  }
  removeTrack(track) {
    const { playlistTracks } = this.state;

    const tmpTracks = playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );
    this.setState({ playlistTracks: tmpTracks });
  }

  //   number 57 In App.js create a method called updatePlaylistName with the following functionality: Accepts a name argument, Sets the state of the playlist name to the input argument
  //   updatePlaylistName(name) {
  //     this.setState({ playlistName: name.target.value });
  //   }
  //   Answer: The value of name here is going to be whatever you call the onNameChange prop with in Playlist.js. You could call it with an event (which would have a target and a value) but you it's probably better to get the name off the event at the Playlist level and just call this with the actual name as a string
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  //   number 63 In App.js create a method called savePlaylist with the following functionality: Generates an array of uri values called trackURIs from the playlistTracks property. In a later step, you will pass the trackURIs array and playlistName to a method that will save the user's playlist to their account.
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.id.map();
  }
  // number 67 In App.js create a method called search with the following functionality: Accepts a search term, Logs the term to the console. In a later assessment, we will hook this method up to the Spotify API.
  search(term) {
    Spotify.search(term).then(term => {
      this.setState({ SearchResults: term });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.SearchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
