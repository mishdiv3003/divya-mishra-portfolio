import React from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { Images } from "../../constants";

import "./Footer.scss";

function Footer(props) {
  return (
    <>
      <div className="footer flex-center">
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

            <a href="work">
              {/* <RiMailFill /> */}
              <img src={Images.gmail} height={32} width={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
