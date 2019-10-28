"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEADERS = exports.API_URL = void 0;
var TOKEN_API = 'BQBi8Jm5QAd-kAG5oZ6qR5vYeWOdL08IqZL7kvujcCDd1gr5kvNZAE8M9uIYf63NAzPTC1DAiWyTnC5tYVRzqrb1ahYZjVmwi8Lw0o_-nmhA9ZgByxXzXK2FipcwEF2dyz2eI_n-AZUxAAdQhV6k2ihp-xUvnLcNFmqC';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;