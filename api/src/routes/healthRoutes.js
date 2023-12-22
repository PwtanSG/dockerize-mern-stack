const express = require("express");
const router = express.Router();
const {
  testApiServer,
  testDbRw,
  listAllDbHealth,
} = require("../controllers/healthController");

router.get("/", (req, res) => {
  res.status(200).send("OK");
});
router.get("/testapi", testApiServer);
router.get("/getalldbhealth", listAllDbHealth);
router.post("/testdbrw", testDbRw);

module.exports = router;
