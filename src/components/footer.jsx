import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-center py-6 mt-12 text-sm text-gray-600">
      © {new Date().getFullYear()} FoodieFinder. All rights reserved.
    </footer>
  );
};

export default Footer;
