// import {
//   search, searchArtists, searchAlbums, searchPlaylists, searchTracks,
// } from './search';

// import { getAlbum, getAlbums, getAlbumTracks } from './album';

// export {
//   search,
//   searchArtists,
//   searchAlbums,
//   searchPlaylists,
//   searchTracks,
//   getAlbum,
//   getAlbums,
//   getAlbumTracks,
// };


export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || 'https://api.spotify.com/v1';
    this.token = options.token;
  }
}
