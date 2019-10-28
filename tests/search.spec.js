import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';// fazer a integração do sinon com o chai

import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/search';

// o chai vai usar o sinonChai e toda sua interface
chai.use(sinonChai);
// habilite pra nossa interface o global.fetch que é usado no navegador
// para que o fetch funcione tanto no browser como no node
global.fetch = require('node-fetch');

describe('Search', () => {
  let stubedFetch;
  beforeEach(() => {
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
    it('deve existir o método `search`', () => {
      expect(search).to.exist;
    });

    it('deve existir o método `searchAlbums`', () => {
      expect(searchAlbums).to.exist;
    });

    it('deve existir o método `searchArtists`', () => {
      expect(searchArtists).to.exist;
    });

    it('deve existir o método `searchTracks`', () => {
      expect(searchTracks).to.exist;
    });

    it('deve existir o método `searchPlaylists`', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('generic search', () => {
    it('deve chamar a função fetch', () => {
      search();
      // que seja chamado uma vez
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      context('passando um `type`', () => {
        search('Incubus', 'artist');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        search('Incubus', 'album');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });
      context('passando mais de um `type`', () => {
        search('Incubus', ['artist', 'album']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });

    it('deve retornar um JSON ao resolver a promise', () => {
      // que vai nos retornar uma promise pendente
      const artists = search('Incubus', 'artist');
      // então usamos o .then como forma de resolver essa Promise
      // to.deep.equal deve ser produndamente igual, verificação de todas as propriedades
      artists.then((data) => {
        expect(data).to.deep.equal({ artist: 'name' });
      });
    });
  });

  describe('searchArtists', () => {
    it('deve chamar a função fetch', () => {
      searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      searchArtists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

      searchArtists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist');
    });
  });

  describe('searchAlbums', () => {
    it('deve chamar a função fetch', () => {
      searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      searchAlbums('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');

      searchAlbums('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album');
    });
  });

  describe('searchTracks', () => {
    it('deve chamar a função fetch', () => {
      searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      searchTracks('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');

      searchTracks('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track');
    });
  });

  describe('searchPlaylists', () => {
    it('deve chamar a função fetch', () => {
      searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      searchPlaylists('Incubus');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');

      searchPlaylists('Muse');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist');
    });
  });
});
