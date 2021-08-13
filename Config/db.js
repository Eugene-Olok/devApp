const mongoose = require('mongoose');
const config = require('config');
const Db = config.get('mongoURI');

const ConnectDB = async () => {
  try {
    await mongoose.connect(Db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log('MongoDb Connected');
  } catch (error) {
    console.error(error);

    //Exit processs on failure
    process.exit(1);
  }
};

module.exports = ConnectDB;
