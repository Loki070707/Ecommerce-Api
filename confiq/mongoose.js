const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database

mongoose.connect("mongodb+srv://rajh3282:eDQXNlahTwu8IAGt@ecommercedb.0z2huy0.mongodb.net/Ecommercedb?retryWrites=true&w=majority", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once("open", () => {
  console.log("Mongodb Connected");
});

module.exports = db;
