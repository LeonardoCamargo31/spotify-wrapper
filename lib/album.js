"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = album;

// ficando assim class.album.getAlbum()
function album() {
  var _this = this;

  return {
    getAlbum: function getAlbum(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id));
    },
    getAlbums: function getAlbums(ids) {
      return _this.request("".concat(_this.apiURL, "/albums/?ids=").concat(ids));
    },
    getAlbumTracks: function getAlbumTracks(id) {
      return _this.request("".concat(_this.apiURL, "/albums/").concat(id, "/tracks"));
    }
  };
}