/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  app.use('/api/addresses', require('./api/address'));

  app.get('/api', function(req, res) {
    res.redirect('/');
  });

  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    if (next) {
      res.status(status).send({ error: err.message });
    }
  });

};
