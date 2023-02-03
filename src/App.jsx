import React from "react";
import {Route, Routes} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Home } from "./components/Home";
import { ThisWebsite } from "./components/ThisWebsite";
import { FutureProjects } from "./components/FutureProjects";
import { About } from "./components/About";


export default function App() {
return <>
    {/* Navbar */}
    <div className="navbarSec">
    <Nav justify variant="pills" defaultActiveKey="/home" className="navigationColor">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/thiswebsite">This Website</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/futureprojects">Future Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>


{/* Bumper */}
    <div style={{padding: "2%"}}>
    <p style={{fontSize: "2rem"}}>Bumper</p>
  </div>

      {/* Routes */}
      <body>
      <Routes>
    <Route path="/" element ={<Home />} />
    <Route path="/thiswebsite" element ={<ThisWebsite />} />
    <Route path="/futureprojects" element ={<FutureProjects />} />
    <Route path="/about" element ={<About />} />
    </Routes>
      </body>
    <Footer />
</>
}