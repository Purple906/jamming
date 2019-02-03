// starts at 72
const clientID = "bb0166aaa72b46d28e910d6993d37fbe";
const redirectURI = "http://localhost:3000/";
var userAccessToken = "";

const Spotify = {
  // number 78-83
  // getAccessToken(){
  //     if(userAccessToken === true){
  //     return;
  // } else {
  //     window.location.href.match((/access_token=([^&]*)/, /expires_in=([^&]*)/)=>{
  //         redirect(https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI})
  //     });
  //     window.setTimeout(() => accessToken = '', expiresIn * 1000);
  //     window.history.pushState('Access Token', null, '/');
  //     }
  // }

  //   starts at 84
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
};

export default Spotify;
