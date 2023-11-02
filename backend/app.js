const express = require("express");
const app = express();

const errorMiddlerware = require("./middlewares/error")

const product = require("./routes/productRoute");

app.use(express.json());
app.use("/api/v1", product);



// Middleware for Errors
app.use(errorMiddlerware);
module.exports = app;
