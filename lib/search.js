"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

function search() {
  var _this = this;

  return {
    artists: function artists(query) {
      return _this.request("".concat(_this.apiURL, "/search?q=").concat(query, "&type=artist"));
    },
    albums: function albums(query) {
      return _this.request("".concat(_this.apiURL, "/search?q=").concat(query, "&type=album"));
    },
    tracks: function tracks(query) {
      return _this.request("".concat(_this.apiURL, "/search?q=").concat(query, "&type=track"));
    },
    playlists: function playlists(query) {
      return _this.request("".concat(_this.apiURL, "/search?q=").concat(query, "&type=playlist"));
    }
  };
}