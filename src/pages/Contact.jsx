import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Contact Page</h1>

      <div className="contact-button">
        <button onClick={()=> navigate ('info')}>Contact Info</button>
        <button onClick={()=> navigate ('form')}>Contact Form</button>
      </div>
      <br />
    </div>
  );
};

export default Contact;
