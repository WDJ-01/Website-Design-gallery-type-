import React from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./contact.css";

const Contact = () => {
  return (
    <section id="contactContainer">
      <div className="contact_hero">
        <h1 className="contact_hero_h1">Contact</h1>
        <p className="contact_hero_p">Feel free to contact us at anytime</p>
        <AiOutlineArrowDown
          style={{ fontSize: "3rem" }}
          className="down_arrow"
        />
      </div>
     
      <div className="contactSubContainer">
        <div className="contact_content">
          <h2>Contact</h2>
          <h3>Lets Get In Touch</h3>
          <p>Contact us for custom solutions and qoutes</p>
          <div className="icon_email">
            <div>
              <MdEmail
                style={{
                  color: "#ffff",
                  fontSize: "2rem",
                  marginRight: ".5rem",
                }}
              />
            </div>
            <p>- mining@solutions.com</p>
          </div>
        </div>

        <div className="contact_form">
          <form>
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <label className="label ">Email</label>

            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <label className="label">Message</label>

            <textarea
              className="input_message"
              name="user_message"
              placeholder="message"
            />
            <input className="input_send" type="submit" value="Send" />
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
