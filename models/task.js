

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  
  walletAddress: { type: String},
});

const Task = mongoose.model("task", taskSchema);

module.exports = Task;



