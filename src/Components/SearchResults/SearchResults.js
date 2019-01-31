import React, { Component } from "react";
import "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          //   below is probably wrong. Pass isRemoval with a value of false down to TrackList.
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
