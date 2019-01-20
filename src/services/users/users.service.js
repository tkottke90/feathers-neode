// Initializes the `users` service on path `/users`
const createService = require('../../../neode/service-neode');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const Model = app.get('neode').model('users');
  const paginate = app.get('paginate');

  const options = {
    model: model,
    paginate: paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
};
