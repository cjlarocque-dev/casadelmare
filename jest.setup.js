// jest.setup.js - Polyfills for jsdom
const { TextEncoder, TextDecoder } = require('util');

Object.assign(global, {
  TextEncoder,
  TextDecoder,
});
