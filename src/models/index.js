const conection = require('../database/database');

const models = {
  User: conection.import('./user')
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {models, conection };