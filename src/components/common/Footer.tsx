import React from "react";
import { NavLink } from "react-router-dom";
import github from "../../assets/icons/github.webp";
import instagram from "../../assets/icons/instagram.webp";
import velog from "../../assets/icons/velog.webp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <NavLink to="https://github.com/happyhyep">
          <img className="footer-icon-image" alt="github" src={github}></img>
        </NavLink>
        <NavLink to="https://www.instagram.com/happyhyep_day/">
          <img
            className="footer-icon-image"
            alt="instagram"
            src={instagram}
          ></img>
        </NavLink>
        <NavLink to="https://velog.io/@happyhyep">
          <img className="footer-icon-image" alt="velog" src={velog}></img>
        </NavLink>
      </div>
      <div className="copyright">
        © 2023. Jeong Hye In. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
