const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL)
    .then ((data)=> {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
      console.log(data.Collection)
      console.log(data.Collection.find)
    })
    .catch ((err) => {
      console.error(`Database connection failed: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDatabase;