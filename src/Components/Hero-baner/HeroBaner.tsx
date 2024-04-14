import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const HeroBaner = () => {
  return (
    <div className="baner-wrap">
      <div className="vertical-navbar">
        <ul>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
      <div className="baner-content">
        <p>Hello, I'm</p>
        <h2>Devanshi Jadav</h2>
        <h3>Software Engineer</h3>
        <p>I write code to create beautiful and functional products .</p>
      </div>
      <div className="vertical-navbar">
        <ul>
          <li>
            <a href="#footer">Scroll Down</a>
          </li>
          {/* <li>
            <a href="#">01</a>
          </li>
          <li>
            <a href="#about">02</a>
          </li>
          <li>
            <a href="#">03</a>
          </li>
          <li>
            <a href="#">04</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
export default HeroBaner;
