const express = require("express");
const mongoose = require("mongoose");
const path=require("path");
const userModel = require("./models/userModel");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

app.listen(4000, () => {
  console.log("Server is listening at Port 4000");
});

const userRouter = require("./Routers/userRouter");
const { urlencoded } = require("express");
app.use("/api/v1", userRouter);

app.use(express.static(path.resolve("../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../frontend/build/index.html"));
});
