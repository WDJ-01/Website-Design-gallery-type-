import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";
import { AiOutlineArrowDown } from "react-icons/ai";

const About = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="about">
      <Slider {...settings} style={{ display: "flex" }}>
        <div className="slick" id="scroll1">
          <div className="scroll_child">
            <h1>About Us</h1>
            <AiOutlineArrowDown style={{fontSize: '3rem'}} className='down_arrow'/>
          </div>
        </div>
        <div className="slick" id="scroll2">
          <div className="scroll_child">
            <h1>About Us</h1>
            <AiOutlineArrowDown style={{fontSize: '3rem'}} className='down_arrow'/>
          </div>{" "}
        </div>
        <div className="slick" id="scroll3">
          <div className="scroll_child">
            <h1>About Us</h1>
            <AiOutlineArrowDown style={{fontSize: '3rem'}} className='down_arrow'/>
          </div>{" "}
        </div>
        <div className="slick" id="scroll4">
          <div className="scroll_child">
            <h1>About Us</h1>
            <AiOutlineArrowDown style={{fontSize: '3rem'}} className='down_arrow'/>
          </div>{" "}
        </div>
      </Slider>
      <div className="about_container">
        <div className="about_content">
          <h1>Reinventing How We Extract Natural Resources</h1>
          <p>
            Mining Solutions was founded in 2000 in hopes of addressing the
            exploitations of natural resources around the world. We belive that
            proper management of our natural resources is the key to a
            sustainable economy and long term security for humanity.{" "}
          </p>
        </div>
        <div className="about_mission">
          <h1>Our Mission</h1>

          <p>
            Our mission is to provide logistics and data that allow companies to
            continue opperations in a sustainable manner. This not only ensures
            that a long term solution for addressing the needs of tomorrow is
            put in place but that communities and people in and around sites are
            considered.
          </p>
          <p>
            Rehabilitation of surrounding enviroments and eco systems not only
            is needed from an ethic obligation but also ensures that resources,
            if possible and regenerate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
