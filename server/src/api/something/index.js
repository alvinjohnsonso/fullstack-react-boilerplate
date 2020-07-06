const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { query } = req
  res.json({ query });
});
router.post("/", (req, res) => {
  const { body } = req
  res.json({ body });
});
router.put("/:id", (req, res) => {
  const { body, params } = req
  res.json({ params, body });
});
router.delete("/:id", (req, res) => {
  const { params } = req
  res.json({ params });
});

module.exports = router;
