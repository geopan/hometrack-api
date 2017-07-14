'use strict';

/*exports function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, {}, function(err, html) {
    if (err) {
      return res.status(result.status).json(result);
    }

    res.send(html);
  });
};*/


exports.error = function(status, message) {
  message = message || 'Nothing found';
  const err = new Error(message);
  err.status = status;
  return err;
};
