const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const JWT_KEY = require("../secrets");
const { sendMail } = require("../middlewares/sendMail");
const cloudinary = require("cloudinary");

module.exports.loginUser = async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const token = jwt.sign({ _id: user._id }, JWT_KEY);
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now() + 600000),
          httpOnly: true,
        })
        .json({
          message: "User logged in successfully",
          data: user,
          success: true,
        });
    } else {
      res.json({
        message: "User not found",
        success: false,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.logoutUser = async function logoutUser(req, res) {
  try {
    res
      .status(200)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        message: "User logged out successfully",
        data: user,
        success: true,
      });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.getUser = async function getUser(req, res) {
  try {
    const user = await userModel.findOne().select("-password -email");
    if (user) {
      res.json({
        message: "User Found",
        data: user,
        success: true,
      });
    } else {
      res.json({
        success: false,
        message: "No user Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.myProfile = async function myProfile(req, res) {
  try {
    const user = await userModel.findById(req.user._id);
    if (user) {
      res.json({
        message: "User Found",
        data: user,
        success: true,
      });
    } else {
      res.json({
        success: false,
        message: "No user Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.ContactUs = async function ContactUs(req, res) {
  try {
    const { name, email, password } = req.body;
    const userMesage = `Hey,I am ${name}.My email is ${email}.My message is ${message}`;
    await sendMail(userMesage);
    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports.updateUser = async function updateUser(req, res) {
  try {
    const user = await userModel.findById(req.user._id);
    const { name, email, password, skills, about } = req.body;
    if (name) {
      user.name = name;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (skills) {
      if (skills.image1) {
        await cloudinary.v2.uploader.destroy(user.skills.image1.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image1, {
          folder: "portfolio",
        });
        user.skills.image1 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image2) {
        await cloudinary.v2.uploader.destroy(user.skills.image2.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image2, {
          folder: "portfolio",
        });
        user.skills.image2 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image3) {
        await cloudinary.v2.uploader.destroy(user.skills.image3.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image3, {
          folder: "portfolio",
        });
        user.skills.image3 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image4) {
        await cloudinary.v2.uploader.destroy(user.skills.image4.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image4, {
          folder: "portfolio",
        });
        user.skills.image4 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image5) {
        await cloudinary.v2.uploader.destroy(user.skills.image5.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image5, {
          folder: "portfolio",
        });
        user.skills.image5 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      if (skills.image6) {
        await cloudinary.v2.uploader.destroy(user.skills.image6.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(skills.image6, {
          folder: "portfolio",
        });
        user.skills.image6 = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }
    if (about) {
      if (about.name) {
        user.about.name = about.name;
      }
      if (about.title) {
        user.about.title = about.title;
      }
      if (about.subtitle) {
        user.about.subtitle = about.subtitle;
      }

      if (about.description) {
        user.about.description = about.description;
      }
      if (about.quote) {
        user.about.quote = about.quote;
      }
      if (about.avatar) {
        await cloudinary.v2.uploader.destroy(user.about.avatar.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(about.avatar, {
          folder: "portfolio",
        });
        user.about.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
    }
    await user.save();
    res.json({
      success: true,
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};

module.exports.addTimeline = async function addTimeline(req, res) {
  try {
    const { title, description, date } = req.body;
    const user = await userModel.findById(req.user._id);
    user.timeline.unshift({
      title,
      description,
      date,
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "Added To Timline",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.addProjects = async function addProjects(req, res) {
  try {
    const { url, title, image, description, techStack } = req.body;
    const user = await userModel.findById(req.user._id);
    const myCloud = await cloudinary.v2.uploader.upload(image, {
      folder: "portfolio",
    });
    user.projects.unshift({
      url,
      title,
      description,
      techStack,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
    });
    await user.save();
    res.status(200).json({
      success: true,
      message: "Added To Projects",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteTimeline = async function deleteTimeline(req, res) {
  try {
    const { id } = req.params;
    const user = await userModel.findById(req.user._id);
    user.timeline = user.timeline.filter((item) => item._id != id);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Deleted from Timline",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.deleteProject = async function deleteProject(req, res) {
  try {
    const { id } = req.params;
    const user = await userModel.findById(req.user._id);
    const project = user.projects.find((item) => item._id == id);
    await cloudinary.v2.uploader.destroy(project.image.public_id);
    user.projects = user.projects.filter((item) => item._id != id);
    await user.save();
    res.status(200).json({
      success: true,
      message: "Deleted from Projects",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
