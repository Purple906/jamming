// starts at 72
const clientID = "bb0166aaa72b46d28e910d6993d37fbe";
const redirectURL = "http://localhost:3000/";
var userAccessToken = "";

const Spotify = {
  // number 78-83
  // Inside the Spotify module, create a method called getAccessToken. Check if the user's access token is already set. If it is, return the value saved to access token.

  // If the access token is not already set, check the URL to see if it has just been obtained. You will be using the Implicit Grant Flow to setup a user's account and make requests. The implicit grant flow returns a user's access token in the URL. Use the guide to determine how to parse the URL and set values for your access token and expiration time.

  //   In the implicit grant flow, values for the access token and expiration time are in the URL parameter after authentication.Use window.location.href and the .match() method to retrieve the access token and expiration time from the URL. Use the .match() method on the URL string. Provide the regular expressions below as inputs: (/access_token=([^&]*)/, /expires_in=([^&]*)/)

  //   If the access token and expiration time are in the URL, implement the following steps: Set the access token value, Set a variable for expiration time, Set the access token to expire at the value for expiration time, Clear the parameters from the URL, so the app doesn't try grabbing the access token after it has expired, The hint below contains the code that wipes the access token and URL parameters.

  //   Back in your conditional statement, redirect users to the following URL: . Interpolate your client ID and redirect URI variables In place of CLIENT_ID and REDIRECT_URI.

//   this is what I was able to attempt, but it's not finished, as I got kind of lost
  getAccessToken(){
      if(userAccessToken === true){
      return;
  } else {
      window.location.href.match((access_token=([^&]*), expires_in=([^&]*))=>{
          redirect(`https://accounts.spotify.com/authorize?client_id=${clientID&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`)
      });
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      }
  }

  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${clientID}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonReponse => {
        if (jsonReponse.tracks) {
          return jsonReponse.tracks.map(tracks => {
            return {
              ID: tracks.id,
              Name: tracks.name,
              Artist: tracks.artists[0].name,
              Album: tracks.album.name,
              URI: tracks.uri
            };
          });
        }
      });
  }

  // the whole thing below here is about 9 steps. I think a call may be best to handle this one.

  //   savePlaylist(name, []){
  // var accesstoken = clientID,

  //   }
};

export default Spotify;
