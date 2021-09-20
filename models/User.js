const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    first_name: {
        type: String,
        required: true
    },

    last_name: {
        type: String,
        required: true
    },

    completion_time: {
      type: Array,
      required: false
  }  
  
  }, 
    
    {
    timestamps: true
    }
)

const User = mongoose.model('users', UserSchema);
module.exports = User;
