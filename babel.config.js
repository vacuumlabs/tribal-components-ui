module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // cannot be used, because we cannot compile code into lib/
      // (right now as it is written, it [probably] doesn't work with typescript)
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.tsx', '.ts', '.js'],
          alias: {},
        },
      ],
    ],
  }
}
