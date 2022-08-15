const mongoose = require("mongoose");
const express = require("express");
const cloudinary=require('cloudinary');

const db_link =
  "mongodb+srv://admin:RSZHek7KCmdYYSPn@cluster0.ptf4r.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(db_link)
  .then(function (db) {
    console.log("db connected successfully");
  })
  .catch(function (err) {
    console.log(err);
  });


cloudinary.v2.config({
    cloud_name:"dziidt5lx",
    api_key:"922933226737222",
    api_secret:"tn5dG9O3LLeyLCcei3Wb3fzL-4M"
})

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
  },
  password: {
    type: String,
    select:false,
    required: [true, "Please enter your password"],
  },
  timeline: [
    {
      title: String,
      description: String,
      date: Date,
    },
  ],
  skills: {
    image1: {
      public_id: String,
      url: String,
    },
    image2: {
      public_id: String,
      url: String,
    },
    image3: {
      public_id: String,
      url: String,
    },
    image4: {
      public_id: String,
      url: String,
    },
    image5: {
      public_id: String,
      url: String,
    },
    image6: {
      public_id: String,
      url: String,
    },
  },
  projects: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
      description: String,
      techStack: String,
    },
  ],
  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
