// connect to database
const mongoos = require("mongoose");
require("dotenv").config();

const DBConnect = () => {
     mongoos.connect(process.env.CONNECT_DB, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }).then((data) => {
          console.log(`Mongodb connection is successfull ${data.connection.host}`);
     })
}

module.exports = DBConnect;