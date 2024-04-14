import React from "react";
const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer_logo">
        <h6>Devanshi</h6>
      </a>
      <ul className="permlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; Devanshi . All rights reserved</small>
      </div>
    </footer>
  );
};
export default Footer;
