const User = require("../models/users.model");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// Login function

exports.login = (req, res, next) => {
  // Hasheando la contraseña que viene desde el usuario utilizando crypto
  let hashedPass = crypto.createHash('sha512').update(req.body.password).digest('hex');

  User.findOne({ user: req.body.user, password: hashedPass},(err, user) => {
    let response = {
      token: null
    }

    if(user !== null) {
      // Aquí traemos el jwt
      response.token = jwt.sign({
        id: user._id,
        user: user.user
      }, '__secret__')
    }

    res.json(response)
  })
};

