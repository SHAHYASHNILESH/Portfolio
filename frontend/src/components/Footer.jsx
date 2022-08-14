import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h3">About Me</Typography>
        <Typography>
          Hey, my Name is Yash Nilesh Shah.I am 20 years old.I am currently
          studying in DJ Sanghvi College of Engineering.I am a Full-Stack
          Developer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/SHAHYASHNILESH" target="black">
          <BsGithub />
        </a>
        {/* <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a> */}
        <a href="https://www.instagram.com/iamyash2206/" target="black">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-shah-b95482232"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
