'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const { log, error } = require('console');

const express = require('express');
const config = require('./config/env'); // look into ./config/env/index.js

let app = express();

require('./config/express')(app);
require('./routes')(app);

app.listen(config.port, function() {
  log(`[Express] Hometrack-API running on port ${config.port}, in ${app.get('env')} mode.`);
});

// Expose app
exports = module.exports = app;
