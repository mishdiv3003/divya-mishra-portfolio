import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Images } from "../../constants";

import "./Footer.scss";

const Footer = (props) => {
  return (
    <>
      <div id="contact-section" className="footer flex-center">
        <div>
          <p>Thanks for being here! </p>
          <p>Feel free to connect! ✌️</p>
        </div>
        <div className="footer_link-container">
          <h5>Get in touch</h5>
          <div className="footer_links">
            <a
              href="https://www.linkedin.com/in/divya-mishra-3003"
              target="_blank"
            >
              <FaLinkedin fill="#004182" />
            </a>

            <a href="github">
              <FaGithub stroke="red" />
            </a>

            <a href="mailto: divyadm3003@gmail.com">
              <img src={Images.gmail} height={32} width={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
