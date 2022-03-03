const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  
  app.use(
    '/as/token.oauth2',
    createProxyMiddleware({
      target: 'https://id.mercedes-benz.com/',
      changeOrigin: true,
    }),
  );
  app.use(
    '/vehicledata/v2/vehicles/LE4ZG8DB0NL754335/resources',
    createProxyMiddleware({
      target: 'https://api.mercedes-benz.com/',
      changeOrigin: true,
    }),
  );
};