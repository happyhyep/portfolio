import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <NavLink to="https://github.com/happyhyep">
          <img
            className="footer-icon-image"
            alt="github"
            src={process.env.PUBLIC_URL + "/assets/icons/github.webp"}
          ></img>
        </NavLink>
        <NavLink to="https://www.instagram.com/happyhyep_day/">
          <img
            className="footer-icon-image"
            alt="instagram"
            src={process.env.PUBLIC_URL + "/assets/icons/instagram.webp"}
          ></img>
        </NavLink>
        <NavLink to="https://velog.io/@happyhyep">
          <img
            className="footer-icon-image"
            alt="velog"
            src={process.env.PUBLIC_URL + "/assets/icons/velog.webp"}
          ></img>
        </NavLink>
      </div>
      <div className="copyright">
        © 2023. Jeong Hye In. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
