import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <button
          className="basic-button"
          onClick={() => window.open("https://github.com/happyhyep", "_blank")}
        >
          <img
            className="footer-icon-image"
            alt="github"
            src={process.env.PUBLIC_U거RL + "/assets/icons/github.webp"}
          ></img>
        </button>
        <button
          className="basic-button"
          onClick={() =>
            window.open("https://www.instagram.com/happyhyep_day/", "_blank")
          }
        >
          <img
            className="footer-icon-image"
            alt="instagram"
            src={process.env.PUBLIC_URL + "/assets/icons/instagram.webp"}
          ></img>
        </button>
        <button
          className="basic-button"
          onClick={() => window.open("https://velog.io/@happyhyep", "_blank")}
        >
          <img
            className="footer-icon-image"
            alt="velog"
            src={process.env.PUBLIC_URL + "/assets/icons/velog.webp"}
          ></img>
        </button>
      </div>
      <div className="copyright">
        © 2023. Jeong Hye In. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
