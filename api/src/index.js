const express = require("express");
const mongoose = require("mongoose");
const { port, host, db } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();
var cors = require('cors');
app.use(cors());

// User model 
const User = mongoose.model('User', {
  name: { type: String },
  age: { type: Number }
});

app.get("/test", (req, res) => {
  res.send("Api server is working correctly  ..............");
});

app.get("/getAll", async (req, res) => {
  let result = await User.find({});
  res.status(200).send(result)
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Database url ${db}`);

    var new_user = new User({
      name: 'Manish',
      age: 34
    })

    new_user.save(function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(result)
      }
    })
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
