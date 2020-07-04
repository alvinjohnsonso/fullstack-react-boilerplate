const express = require("express");
const morgan = require("morgan");
const path = require("path");
const api = require("./api")
const app = express();

// middlewares
app.use(morgan("common"));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));
app.use("/api/v1", api);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
