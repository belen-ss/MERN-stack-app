const Empleado = require("../models/empleados.model");
let response = {
  msg: "",
  exito: false,
};
// Creando el método de insert

exports.create = (req, res) => {
  // Agregamos new model dónde vamos a meter nuestros valores de cada campo
  let empleado = new Empleado({
    nombre: req.body.nombre,
    apellidop: req.body.apellidop,
    apellidom: req.body.apellidom,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
  });

  // Añadiendo métodos que brinda mongoose
  // El método save recibe un callback, que es el que se ejecuta cuando se termine de ejecutar el método
  empleado.save((err) => {
    // Cuando termine de enviar el registro, regresa una respuesta
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al guardar empleado");
      res.json(response);
      return;
    }
    (response.exito = true), (response.msg = "Empleado guardado correctamente");
    res.json(response);
  });
};

// FIND METHOD
exports.find = (req, res) => {
  Empleado.find((err, empleados) => {
    res.json(empleados);
  });
};

// FINDONE METHOD
exports.findOne = (req, res) => {
  Empleado.findOne({ _id: req.params.id }, (err, empleado) => {
    res.json(empleado);
  });
};

// UPDATE METHOD
exports.update = (req, res) => {
  let empleado = {
    nombre: req.body.nombre,
    apellidop: req.body.apellidop,
    apellidom: req.body.apellidom,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
  };
  // Añadiendo la función para modificar
  Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, (err) => {
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al actualizar empleado");
      res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "Empleado actualizado correctamente");
    res.json(response);
  });
};

exports.remove = (req, res) => {
  Empleado.findByIdAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      console.error(err);
      (response.exito = false), (response.msg = "Error al eliminar empleado");
      res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "Empleado eliminando correctamente");
    res.json(response);
  });
}