const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    message: "Hello and welcome to the apssi!"
  })
})

module.exports = router