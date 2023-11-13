module.exports = () => ({
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader'
      }
    ]
  }
})
