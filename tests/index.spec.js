import { expect } from 'chai';
import SpotifyWrapper from '../src/index';


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
});
