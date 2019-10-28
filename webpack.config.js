const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'spotify-wrapper.umd.js',
    // Universal Module Definition, trabalha com amd, CommonJS e para navegadores com prototypes
    // e guardamos na dist esses arquivos em umd, que podem ser utilizados
    // tanto no node quanto no navegador
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  module: {
    rules: [
      {
        // chamando o loadar do babel, já que nosso código esta em es6 fazer o traspiler
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
