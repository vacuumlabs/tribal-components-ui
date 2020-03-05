module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.tsx', '.ts', '.js'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@storybook': './storybook',
            '@assets': './assets',
          },
        },
      ],
    ],
  }
}
