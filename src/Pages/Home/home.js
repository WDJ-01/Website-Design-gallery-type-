import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home_child">
        <h1 className="home_child_h1">Mining Solutions</h1>
        <p className="home_child_p">Custom Solutions for unique problems</p>
        <AiOutlineArrowDown style={{fontSize: '3rem'}} className='down_arrow'/>

      </div>
      
      <div className="home_child1">
        <h1 className="home_child1_h1">Innovation</h1>
        <p className="home_child1_p">
          Redefining the way resources are gathered and how it contributes to
          the surrounding communities.
        </p>
        <Link className="home_child1_btn">Learn More</Link>
      </div>{" "}
      <div className="home_child2">
        <h1 className="home_child1_h1">Sustainability</h1>
        <p className="home_child1_p">
          Providing for the needs of today without compromising natural
          resources for the needs of tomorrow
        </p>
        <Link className="home_child1_btn">Learn More</Link>
      </div>
      <div className="home_child3">
        <h1 className="home_child1_h1">Efficiency</h1>
        <p className="home_child1_p">
          We value time and resources and therefore we value efficiency and
          bringing efficiency to our clients operations
        </p>
        <Link className="home_child1_btn">Learn More</Link>
      </div>
    </section>
  );
};

export default Home;
