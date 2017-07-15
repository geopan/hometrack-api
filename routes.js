'use strict';

module.exports = function(app) {

  app.use('/', require('./api/address'));

  app.use(function(err, req, res, next) {
    var status = err.status || 500;

    if (err instanceof SyntaxError && err.status === 400) {
      console.error('Could not decode request: JSON parsing failed');
    }

    res.status(status).send({ error: err.message });

  });

};
