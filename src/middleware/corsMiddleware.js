var HttpError = require('../exceptions/http');

/**
 * Error Middleware Function.
 *
 * @param {Object} req is the Http request
 * @param {Object} res is the Http response
 * @param {Object} next is the Http next object
 *
 */
const corsMiddleware = (req, res, next) => {
  try {
    var origin = '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, PATCH, POST, GET, DELETE, HEAD,OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Cache-Control, Origin, X-Requested-With, Content-Type, Accept,X-REQUEST-TYPE, X-LANGUAGE-CODE, Authorization'
    );
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  } catch (err) {
    return next(new HttpError('Cors error', 401));
  }
};

module.exports = corsMiddleware;
