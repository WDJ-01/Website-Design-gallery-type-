import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./service.css";

const Machinery = () => {
  return (
    <section className="services_container">
      <div className="service_hero" id="machinery">
        <h1 className="service_hero_h1">Machinery</h1>
        <p className="service_hero_p">Highest quality machines and tools</p>
        <AiOutlineArrowDown
          style={{ fontSize: "3rem" }}
          className="down_arrow"
        />
      </div>
      <div className="service_content">
        <div className="service_content_child">
          <div className="service_content_child_content">
            <h2>Machine Hire</h2>
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
            <h2>Tool Hire</h2>
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

        <div className="service_content_child">
          <div className="service_content_child_content">
            <h2>Transport logistics</h2>
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
            <h2>Parts and Repairs</h2>
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

export default Machinery;
