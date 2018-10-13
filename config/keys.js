// figure out environment to use

if (process.env.NODE_ENV === 'production') {
  // production environment
  module.exports = require('./prod');
} else {
  // dev environment
  module.exports = require('./dev');
}
