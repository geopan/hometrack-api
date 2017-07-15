'use strict';

module.exports = function(app) {

  app.use('/', require('./api/address'));

  app.use(function(err, req, res, next) {
    var status = err.status || 500;
    res.status(status).send({ error: err.message });
  });

};
