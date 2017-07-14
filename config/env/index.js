'use strict';

const path = require('path'); // Node utilities (no need npm insatll) for handling and transforming file paths

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../'),

  // Server port
  port: process.env.PORT || 9000,

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = Object.assign(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
