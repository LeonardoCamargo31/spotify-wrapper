import { searchAlbums } from '../src/main';
import { HEADERS } from '../src/config';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus', HEADERS);
albums.then((data) => console.log(data));
