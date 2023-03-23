import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";


const Nav = () => {
  
  const [menu, setMenu] = useState(false);
  const onClick = () => {
    if (menu === false) {
      setMenu(true);
    } else setMenu(false);

    console.log(menu);
  };
  const style1 = {visibility: 'hidden'}
  const style2 = {visibility: 'visible'}

  return (
    <section className="nav">
      <div className="nav_container">

        <div className="nav_h1">
          <h1>Mining Solutions</h1>
        </div>

        <div className="nav_links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <div class="dropdown">
            <button class="dropbtn">
              Services
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <Link to={"/services/mining"}>Mining</Link>
            <Link to={"/services/forestry"}>Forestry</Link>
            <Link to={"/services/machinery"}>Machinery</Link>
            </div>
          </div>
          <Link to={"/contact"}>Contact</Link>
        </div>


      <div className="menu">
        {menu ?  < AiOutlineMenuUnfold
          onClick={onClick}
          style={{ color: "#ffff", fontSize: "1.5rem", marginRight: "5%" }}
        /> : < AiOutlineMenuFold
        onClick={onClick}
        style={{ color: "#ffff", fontSize: "1.5rem", marginRight: "5%" }}
      />}
    
      </div>
      <div className="responsive_menu" style={menu ? style2 : style1}>
      <div className="responsive_links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <div class="dropdown" id="responsive_dropdown">
            <button class="dropbtn">
              Services
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
            <Link to={"/services/mining"}>Mining</Link>
            <Link to={"/services/forestry"}>Forestry</Link>
            <Link to={"/services/machinery"}>Machinery</Link>
            </div>
          </div>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Nav;
