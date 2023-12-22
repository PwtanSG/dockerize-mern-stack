const express = require("express");
const mongoose = require("mongoose");
const { port, host, db } = require("./configuration");
const { connectDb } = require("./helpers/db");

const app = express();
var cors = require('cors');
app.use(cors());

// Creating DB health Schema 
const healthSchema = new mongoose.Schema({ 
  description: { type: String, required: true }, 
  remarks: { type: String }, 
}, 
{ timestamps: true } 
); 
// Health model 
const Healthdb = mongoose.model('Healthdb', healthSchema); 

app.get("/testapi", (req, res) => {
  res.send("Api server is working correctly.");
});


// Creating User Schema 
// const userSchema = new mongoose.Schema({ 
//   name: { type: String, required: true }, 
//   age: { type: Number, default: 8 }, 
// }, 
// { timestamps: true } 
// ); 
// User model 
// const User = mongoose.model('User', userSchema); 

// app.get("/getAllUser", async (req, res) => {
//   let result = await User.find({});
//   res.status(200).send(result)
// });

// app.get("/getOneUser", async(req,res) => {
//   let id = '657c121274a6f3009ced11f0'
//   let record = await User.findOne({ _id: id })
//   // let ts = read``.createdAt
//   res.status(200).send(record.name)
// })


app.get("/testdb", async (req, res) => {
  // let result = await User.find({});
  var new_db_health = new Healthdb({
    description: 'Test r/w db',
    remarks: 'test'  
  })
  await new_db_health.save(function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err)
    }
    else {
      console.log(result)
      res.status(200).send(result)
    }
  })
});

app.get("/getAllDbhealth", async (req, res) => {
  let result = await Healthdb.find({});
  res.status(200).send(result)
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`Database url ${db}`);
    // console.log(`Our host is ${host}`);

    // var new_user = new User({
    //   name: 'Manish',
    //   age: 34
    // })

    // new_user.save(function (err, result) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     console.log(result)
    //   }
    // })
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
