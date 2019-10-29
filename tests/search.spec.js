import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';// fazer a integração do sinon com o chai
import SpotifyWrapper from '../src/index';

// o chai vai usar o sinonChai e toda sua interface
chai.use(sinonChai);
// habilite pra nossa interface o global.fetch que é usado no navegador
// para que o fetch funcione tanto no browser como no node
global.fetch = require('node-fetch');

describe('Search', () => {
  let stubedFetch;
  let spotifyInstance;
  beforeEach(() => {
    spotifyInstance = new SpotifyWrapper({
      token: 'foo',
    });
    // criando o stub
    // quero fazer um stub do metodo fetch que esta no ambiente global
    stubedFetch = sinon.stub(global, 'fetch');
    // permite retornar uma Promise e com isso, podemos simular a resposta do nosso fetch
    stubedFetch.resolves({ json: () => ({ artist: 'name' }) });
  });
  afterEach(() => {
    // limpando meu stubedFetch
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('deve existir o método `searchAlbums`', () => {
      expect(spotifyInstance.search.albums).to.exist;
    });

    it('deve existir o método `searchArtists`', () => {
      expect(spotifyInstance.search.artists).to.exist;
    });

    it('deve existir o método `searchTracks`', () => {
      expect(spotifyInstance.search.tracks).to.exist;
    });

    it('deve existir o método `searchPlaylists`', () => {
      expect(spotifyInstance.search.playlists).to.exist;
    });
  });

  describe('searchArtists', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.search.artists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      spotifyInstance.search.artists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.search.albums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      spotifyInstance.search.albums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchTracks', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.search.tracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      spotifyInstance.search.tracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.search.playlists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      spotifyInstance.search.playlists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
