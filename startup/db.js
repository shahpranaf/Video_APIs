const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function() {
  const db = process.env.MONGO_URL; //config.get('db');
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
