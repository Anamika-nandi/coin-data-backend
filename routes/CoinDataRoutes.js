const express = require("express");

const {
    createData,
    getAllData
  } = require("../controllers/CoinDataController");

  const router = express.Router();
 
router.route("/").get(getAllData).post(createData);

module.exports = router;
 