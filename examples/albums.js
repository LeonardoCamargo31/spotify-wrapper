import SpotifyWrapper from '../index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQDEKkbrj1pib8V2iMFR89IQ6ELCsNyhrRsGJXu8s9_zQrpwJTufzbHAclIXbjaC61QjOi0UX_V4ZpueaFXltCo_GoG2HTtrEq5XUn1pRbbUPVJ-CE7bYEyzaFUeUnYrxex1CFlXnBBP63xhO0Kqm4elpPol_gMDNtR2',
});

const albums = spotify.search.albums('System of a down');

albums.then((data) => {
  console.log(data);
});
