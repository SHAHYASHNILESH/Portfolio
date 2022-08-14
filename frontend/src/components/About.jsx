import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
           <img src="src/images/profile.jpeg" alt="yash" />
           <Typography variant="h4" style={{ margin: "1vmax 0", color: "black" }}>Yash Nilesh Shah</Typography>
           <Typography>Full Stack Developer</Typography>
           <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>I am a student</Typography>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default About;
