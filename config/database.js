const mongoose = require ('mongoose');

const host = 'localhost';
const port = '27017';
// const db = 'HumanResources';
const db = 'mongodb+srv://admin:admin@cluster0.vqkai.mongodb.net/users?retryWrites=true&w=majority';

// Función para hacer la conexión

exports.mongoConnect = () => {
  // const mongoStringCollection = `mongodb://${host}:${port}/${db}`;
  const mongoStringCollection = db;
  mongoose.connect(mongoStringCollection);
  mongoose.Promise = global.Promise;

  // Recibiendo la conexión

  const dbConnection = mongoose.connection;
  dbConnection.on('error', console.error.bind(console, 'mongodb connection error'));
}