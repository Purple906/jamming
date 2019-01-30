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
          //   below is probably wrong. Pass onAdd from the SearchResults component to the TrackList component.Pass isRemoval with a value of false down to TrackList.
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
