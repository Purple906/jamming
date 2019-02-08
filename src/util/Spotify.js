// starts at 72
const clientID = "bb0166aaa72b46d28e910d6993d37fbe";
const redirectURL = "http://localhost:3000/";
var userAccessToken = "";

const Spotify = {
  getAccessToken() {
    if (userAccessToken !== null) {
      return userAccessToken;
    }
    var accessTokenMatches = window.location.href.match(/access_token=([^&]*)/);
    var expiresInMatches = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatches.length === 0 || expiresInMatches.length === 0) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
      return;
    }
    userAccessToken = accessTokenMatches[1];
    var expiresIn = expiresInMatches[1];
    window.setTimeout(() => (userAccessToken = ""), expiresIn * 1000);
    window.history.pushState("Access Token", null, "/");
  },

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${this.getAccessToken()}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.map(tracks => {
            return {
              ID: tracks.id,
              Name: tracks.name,
              Artist: tracks.artists[0].name,
              Album: tracks.album.name,
              URI: tracks.uri
            };
          });
        }
        return [];
      });
  },

  savePlaylist(name, tracksArray) {
    if (name === undefined || tracksArray === undefined) {
      return;
    }
    var accessToken = userAccessToken;
    var headers = { Authorization: `Bearer ${userAccessToken}` };
    var userID = "";
    return fetch("https://api.spotify.com/v1/me", { headers })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.id) {
          userID = jsonResponse.id;
        }
      });
  }
};

export default Spotify;
