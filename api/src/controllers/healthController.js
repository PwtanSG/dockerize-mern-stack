const Healthdb = require("../models/dbhealthModel");

const testApiServer = (req, res) => {
  res.send("Api server is working correctly.");
};

const testDbRw = async (req, res) => {
  var new_db_health = new Healthdb({
    description: req.body.description,
    remarks: req.body.remarks,
  });
  await new_db_health.save(function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
};

const listAllDbHealth = async (req, res) => {
  let result = await Healthdb.find({});
  res.status(200).send(result);
};

module.exports = {
  testApiServer,
  testDbRw,
  listAllDbHealth,
};

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
