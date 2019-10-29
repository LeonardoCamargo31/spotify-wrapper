import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SpotifyWrapper from '../src/index';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Index', () => {
  it('deve criar uma nova instancia de SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper({});
    // e espero que seja uma instancia de SpotifyWrapper
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('deve receber apiURL como uma opção', () => {
    const spotify = new SpotifyWrapper({
      apiURL: 'blabla',
    });
    expect(spotify.apiURL).to.be.equal('blabla');
  });
  it('deve usar o apiURL padrão se não for fornecido', () => {
    const spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });
  it('deve receber token como uma opção', () => {
    const spotify = new SpotifyWrapper({
      token: 'dwed4ewd4e8d4we26',
    });
    expect(spotify.token).to.be.equal('dwed4ewd4e8d4we26');
  });

  describe('request method', () => {
    let stubedFetch;
    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      stubedFetch.resolves({ json: () => ({ album: 'name' }) });
    });
    afterEach(() => {
      stubedFetch.restore();
    });

    it('deve existir o método `request`', () => {
      const spotify = new SpotifyWrapper({});
      expect(spotify.request).to.exist;
    });

    it('deve chamar o fetch ao executar o request', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('deve receber a url correta quando chamar o fetch', () => {
      const spotify = new SpotifyWrapper({});
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });
    it('deve chamar fetch com o headers certo passado', () => {
      const spotify = new SpotifyWrapper({
        token: 'ddewdew54',
      });
      spotify.request('url');

      const headers = {
        headers: {
          Authorization: 'Bearer ddewdew54',
        },
      };
      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  });
});
