"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = exports.HEADERS = void 0;
var TOKEN_API = 'BQBctG_5yYZmkUMkPpXX8QWsB-pO-RqjmpsKU2g-ymSEVrf6QYFbsWIwI2q_I_hShxJlIFTWphBuZ2CZFFny5f0ORrbSj3-3djwriSvohwfo9E5yNCLW1GVfRSgxefxMt_g4OlTrAXZJ62Gjtx3asPshumiRkI4pnTmI';
var API_URL = 'https://api.spotify.com/v1';
exports.API_URL = API_URL;
var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
exports.HEADERS = HEADERS;