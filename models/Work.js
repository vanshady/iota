const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  /*email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,

  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  }*/
  requester: String, //or id of the user? 
  location: String,
  description: String,
  requirement: Array, //array of strings
  estimatedHours: Number,
  contactEmail: String,
  dates: Date // check with google calendar api later

}, { timestamps: true });

module.exports = Work;
