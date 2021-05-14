const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creando el schema

const UsersSchema = new Schema({
  user: {type: String, required: true, max: 100},
  password: {type: String, required: true, max: 128}
});

module.exports = mongoose.model('users', UsersSchema);