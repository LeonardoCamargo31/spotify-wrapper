const TOKEN_API = 'BQBctG_5yYZmkUMkPpXX8QWsB-pO-RqjmpsKU2g-ymSEVrf6QYFbsWIwI2q_I_hShxJlIFTWphBuZ2CZFFny5f0ORrbSj3-3djwriSvohwfo9E5yNCLW1GVfRSgxefxMt_g4OlTrAXZJ62Gjtx3asPshumiRkI4pnTmI';

const API_URL = 'https://api.spotify.com/v1';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
};

export { HEADERS, API_URL };
