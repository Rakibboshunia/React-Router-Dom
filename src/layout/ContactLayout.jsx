import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";

const ContactLayout = () => {
  return (
    <div>
        <Contact />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ContactLayout;
