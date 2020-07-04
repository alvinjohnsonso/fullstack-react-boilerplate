const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

// middlewares
app.use(morgan("common"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
