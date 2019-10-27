import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbumTracks } from '../src/album';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => ({ album: 'name' }) });
  });
  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke test', () => {
    it('deve existir o método `getAlbum`', () => {
      expect(getAlbum).to.exist;
    });
    it('deve existir o método `getAlbumTracks`', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum', () => {
    it('deve chamar a função fetch', () => {
      getAlbum();
      // que seja chamado uma vez
      expect(stubedFetch).to.have.been.calledOnce;
    });
    it('deve receber a url correta quando chamar o fetch', () => {
      getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj');

      getAlbum('0sNOF9WDwhWunNAHPD3Bajk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Bajk');
    });
    it('deve retornar um JSON ao resolver a promise', () => {
      const album = getAlbum('0sNOF9WDwhWunNAHPD3Baj');
      // .deep.equal deve ser produndamente igual, verificação de todas as propriedades
      album.then((data) => {
        expect(data).to.deep.equal({ album: 'name' });
      });
    });
  });
});