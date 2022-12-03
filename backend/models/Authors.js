const mongoose = require('mongoose')

const Authorschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
      },
      born: {
        type: Number,
      },
})

module.exports = mongoose.model('Author', Authorschema)