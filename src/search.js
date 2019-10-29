export default function search() {
  return {
    artists: (query) => this.request(`${this.apiURL}/search?q=${query}&type=artist`),
    albums: (query) => this.request(`${this.apiURL}/search?q=${query}&type=album`),
    tracks: (query) => this.request(`${this.apiURL}/search?q=${query}&type=track`),
    playlists: (query) => this.request(`${this.apiURL}/search?q=${query}&type=playlist`),
  };
}
