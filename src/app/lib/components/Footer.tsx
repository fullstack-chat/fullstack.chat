import React from "react";

function Footer() {
  return (
    <div className="py-4 flex justify-center">
      ©{new Date().getFullYear()} fullstack.chat
    </div>
  );
}

export default Footer;
