const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const uri = process.env.MONGO_DB_URL;

if (!uri) {
  console.error("MongoDB URI is not defined. Check your environment variables.");
  process.exit(1); // Exit with failure if URI is undefined
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
