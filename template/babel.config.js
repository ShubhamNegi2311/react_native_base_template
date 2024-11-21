module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          context: './src/context',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          types: './src/types',
          utilities: './src/utilities',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
