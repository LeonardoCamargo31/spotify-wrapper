# Spotify Wrapper

[![Build Status](https://travis-ci.org/LeonardoCamargo31/spotify-wrapper.svg?branch=master)](https://travis-ci.org/LeonardoCamargo31/spotify-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/LeonardoCamargo31/spotify-wrapper/badge.svg?branch=master)](https://coveralls.io/github/LeonardoCamargo31/spotify-wrapper?branch=master)

Um wrapper para trabalhar com a [Spotify Web API](https://developer.spotify.com/documentation/web-api/)

## Dependências

Essa biblioteca depende de [fetch](https://fetch.spec.whatwg.org/) para fazer requisições a Spotify Web API. Para ambientes que não oferecem suporte à busca, é necessário fornecer um [polyfill](https://github.com/github/fetch) para navegador ou [polyfill](https://github.com/bitinn/node-fetch) para Node.

## Instalação

```
npm install spotify-wrapper-leonardo --save
```

## Como usar

### ES6

```js
// importar um método específico
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'SEU_TOKEN_AQUI'
});

// usando o método
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'SEU_TOKEN_AQUI'
});
```

### UMD no Browser

```html
<script src="spotify-wrapper.umd.js"></script>
```

Depois disso, a biblioteca estará disponível para o Global como `SpotifyWrapper`. Siga um exemplo:

```js

const spotify = new SpotifyWrapper({
  token: 'SEU_TOKEN_AQUI'
});

const albums = spotify.search.albums('Artista escolhido');
