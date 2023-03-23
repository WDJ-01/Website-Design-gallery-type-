import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./service.css";

const Mining = () => {
  return (
    <section className="services_container">
      <div className="service_hero" id="mining">
        <h1 className="service_hero_h1">Mining</h1>
        <p className="service_hero_p">Custom Mining Solutions</p>
        <AiOutlineArrowDown
          style={{ fontSize: "3rem" }}
          className="down_arrow"
        />
      </div>
      <div className="service_content">
        <div className="service_content_child" id="responsive_layout">
          <div className="service_content_child_content">
            <h2>Open Cast Mining</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>{" "}
            <Link className="service_content_child_content_btn">
              Learn More
            </Link>
          </div>
          <div className="service_content_child_img"></div>
        </div>

        <div className="service_content_child">
          <div className="service_content_child_img"></div>

          <div className="service_content_child_content">
            <h2>Tunnel Mining</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>{" "}
            <Link className="service_content_child_content_btn">
              Learn More
            </Link>
          </div>
        </div>

        <div className="service_content_child"id="responsive_layout">
          <div className="service_content_child_content">
            <h2>Coal</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>{" "}
            <Link className="service_content_child_content_btn">
              Learn More
            </Link>
          </div>
          <div className="service_content_child_img"></div>
        </div>

        <div className="service_content_child">
          <div className="service_content_child_img"></div>
          <div className="service_content_child_content">
            <h2>Gold</h2>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Vestibulum
              tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
              Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
              vitae est. Mauris placerat eleifend leo.
            </p>{" "}
            <Link className="service_content_child_content_btn">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mining;
