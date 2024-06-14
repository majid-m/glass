module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "~/components": "./src/components",
          "~/constants": "./src/constants",
          "~/helpers": "./src/helpers",
          "~/hooks": "./src/hooks",
          "~/images": "./src/images",
          "~/pages": "./src/pages",
          "~/stacks": "./src/stacks",
          "~/styles": "./src/styles",
        }
      }
    ]
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};