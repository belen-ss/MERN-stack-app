const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creando el schema

const EmpleadosSchema = new Schema({
  nombre: {type: String, required: true, max: 60},
  apellidop: {type: String, required: true, max: 40},
  apellidom: {type: String, required: true, max: 40},
  telefono: {type: String, required: true, max: 15},
  mail: {type: String, required: false, max: 70},
  direccion: {type: String, required: false, max: 150},
});

module.exports = mongoose.model('empleados', EmpleadosSchema);