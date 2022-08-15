const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/userModel");
const cookieParser=require('cookie-parser');


const app = express();
app.use(express.urlencoded({extended:false,limit:"50mb"}));
app.use(cookieParser());
app.use(express.json({limit:"50mb"}));


app.listen(3000, () => {
  console.log("Server is listening at Port 3000");
});



const userRouter = require("./Routers/userRouter");
const { urlencoded } = require("express");
app.use("/api/v1", userRouter);
