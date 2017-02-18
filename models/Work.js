const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  requesterName: String, //or id of the user? 
  contactEmail: String,
  location: String,
  description: String,
  requirement: Array, //array of strings
  estimatedHours: Number,
  ddl: Date,
  start_date: Date, // check with google calendar api later
  end_date: Date

}, { timestamps: true });

module.exports = Work;
