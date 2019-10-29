import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let spotifyInstance;
  beforeEach(() => {
    spotifyInstance = new SpotifyWrapper({
      token: 'foo',
    });
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke test', () => {
    it('deve existir o método `getAlbum`', () => {
      expect(spotifyInstance.album.getAlbum).to.exist;
    });
    it('deve existir o método `getAlbums`', () => {
      expect(spotifyInstance.album.getAlbums).to.exist;
    });
    it('deve existir o método `getAlbumTracks`', () => {
      expect(spotifyInstance.album.getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.album.getAlbum();
      // que seja chamado uma vez
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      spotifyInstance.album.getAlbum('0sNOF9WDwhWunNAHPD3Bajk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bajk');
    });
    it('deve retornar um JSON ao resolver a promise', () => {
      const album = spotifyInstance.album.getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      // .deep.equal deve ser produndamente igual, verificação de todas as propriedades
      album.then((data) => {
        expect(data).to.deep.equal({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.album.getAlbums(['0sNOF9WDwhWunNAHPD3Baj', '0sNOF9WDwhWunNAHPD3Baja']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=0sNOF9WDwhWunNAHPD3Baj,0sNOF9WDwhWunNAHPD3Baja');
    });
    it('deve retornar um JSON ao resolver a promise', () => {
      const albums = spotifyInstance.album.getAlbums(['0sNOF9WDwhWunNAHPD3Baj', '0sNOF9WDwhWunNAHPD3Baja']);
      albums.then((data) => {
        expect(data).to.deep.equal({ album: 'name' });
      });
    });
  });

  describe('getAlbumTracks', () => {
    it('deve chamar a função fetch', () => {
      spotifyInstance.album.getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      spotifyInstance.album.getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj/tracks');
    });
    it('deve retornar um JSON ao resolver a promise', () => {
      const tracks = spotifyInstance.album.getAlbumTracks('0sNOF9WDwhWunNAHPD3Baj');
      tracks.then((data) => {
        expect(data).to.deep.equal({ album: 'name' });
      });
    });
  });
});
