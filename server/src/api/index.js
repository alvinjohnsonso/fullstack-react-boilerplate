// Library Imports
const express = require("express");

// Route Imports
const something = require("./something");

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: "Hello and welcome to the api!"
  })
});

router.use("/something", something);

module.exports = router;