const express = require("express");
const { port, host, db } = require("./configuration");
const { connectDb } = require("./helpers/db");
const path = require("path");

const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../", "frontend", "build", "index.html"));
// });

app.use("/api/health", require("./routes/healthRoutes"));
app.get("/test", (req, res) => {
  res.send("Testing Api server is working correctly!");
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`Database url ${db}`);
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);
