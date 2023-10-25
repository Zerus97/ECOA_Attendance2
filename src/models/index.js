//olhar https://cursos.alura.com.br/forum/topico-sequelize-import-is-not-a-function-121516
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../utilities/config.utils');
const db = {};

const database = config.getProperty('DB_NAME');
const username = config.getProperty('DB_USER');
const password = config.getProperty('DB_PASS');
const dbhost = config.getProperty('DB_HOST');
const dbport = config.getProperty('DB_PORT');
const dialect = config.getProperty('DB_DIALECT', 'postgres');
let sequelize = new Sequelize(
  database, username, password, {
    host: dbhost,
    port: dbport,
    dialect: dialect,
    logging: false
  });


sequelize.authenticate()
  .then(() => {
    console.log('Health-check: Connection has been established successfully.');
   // sequelize.sync({force:false}); // sincronização do modelo sequelize com o banco (estamos fazendo de forma manual)
  })
  .catch(err => {
    console.error('Health-check: Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.') !== 0) &&
    (file !== basename) &&
    (file.slice(-9) === '.model.js'))
  .forEach(file => {
    //const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.dbSession = sequelize;

module.exports = db;