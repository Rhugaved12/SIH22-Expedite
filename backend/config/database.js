const mongoose = require("mongoose");
const config = require("config");

const URI = config.get("mongoURI");

const connectDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "ExpediteDB",
    });
    console.log("Connected to Database !");
  } catch (error) {
    console.log("Error connecting database", error.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
