// const mongoose = require("mongoose");
// require("dotenv").config();

//  // Set to false for Mongoose 7 behavior

// // MongoDB connection using the URI from .env file
// // console.log(process.env.mongoLink)
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/myapp");

// console.log(connection)
// module.exports = { connection };


const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/myapp";  // Fallback to localhost

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 20000, // Increase timeout if needed
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectToDatabase;
