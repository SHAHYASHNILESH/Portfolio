import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useAlert } from "react-alert";
import {Button,Typography } from "@mui/material";
import './Contact.css';


const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const dispatch = useDispatch();
    // const alert = useAlert();
    const contactFormHandler = (e) => {
        e.preventDefault();
        // dispatch(contactUs(name, email, message));
      };
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Enter your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Enter your Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
