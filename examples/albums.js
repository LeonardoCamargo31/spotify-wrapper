import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQAvnfpiNS3Jw8NA8VT56xtmHmIwyLVd9S1qLu6-zDN-hARckKKcqbsFc8U2BmDM05sjC9uulBKPLNG7mZpnDdtVw4YO13UB6R5TfOEaUbh-NteOruBzJVBRH-whR0aPTTaQvMjsM7AAuqgYRAs',
});

const albums = spotify.search.albums('Incubus');

albums.then((data) => {
  console.log(data);
});
