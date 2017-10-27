const path = require('path');
const glob = require('glob-to-regexp');
const blacklist = require('react-native/packager/blacklist');

module.exports = {
  getProvidesModuleNodeModules() {
    return [
      'react',
      'react-native',
      'prop-types',
    ];
  },
  getBlacklistRE() {
    return blacklist([
      glob(`${path.resolve(__dirname, '..')}/node_modules/*`),
    ]);
  },
};
