import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('deve retornar `Fizz` quando for multiplo de 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('deve retornar `Buzz` quando for multiplo de 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('deve retornar `FizzBuzz` quando for multiplo de 3 e 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('deve retornar um numero quando não ser multiplo de nada', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });
});
