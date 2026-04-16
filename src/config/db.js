const mongoose = require("mongoose");


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async function () {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to database");
    
  } catch (error) {
    console.log("connection failed", error);
    
  }
};

module.exports = connectDB;