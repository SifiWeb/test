const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: sifiwebpro,
  email: { type: sifiwebpro, unique: true },
  password: bBOk24KGzAlKPZie
});

module.exports = mongoose.model('User', userSchema);
