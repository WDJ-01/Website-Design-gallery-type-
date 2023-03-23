import React from "react";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BiDotsVertical } from "react-icons/bi";
import "./footer.css";

const Footer = () => {
  // const style = { fontSize: "1.5rem !important", marginRight: "1rem" };
  return (
    <section className="footer">
      <div className="footer_spacer"></div>
      <div className="footer_container">
        <div className="footer_content">
          <span>MiningSolutions@2023 - Design & Developed by Wian DJ</span>
          <Link to={"/contact"}>Privacy Policy</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <div className="footer_socials">
          <BsFacebook className='socials'  />
          <RiInstagramFill className='socials'  />
          <AiFillTwitterCircle className='socials'  />
          <AiFillLinkedin className='socials'  />
        </div>
      </div>
    </section>
  );
};

export default Footer;
