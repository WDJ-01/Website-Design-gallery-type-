import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Machinery from './Pages/Services/machinery'
import Forestry from './Pages/Services/forestry'
import Mining from './Pages/Services/mining'

import Contact from './Pages/Contact/contact'
import Nav from './Components/Nav/nav'
import Footer from './Components/Footer/footer'



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/services/mining" element={<Mining/>}/>
          <Route exact path="/services/forestry" element={<Forestry/>}/>
          <Route exact path="/services/machinery" element={<Machinery/>}/>
          <Route exact path="/contact" element={<Contact/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
