import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const navBarStyle = {
    padding: "top 0",
    marginTop: "0",
    borderTop: "0",
}


function App(){
    return <div>
        <Header />
        <body>
    <section className="navbarSec" style={navBarStyle}>
        <nav className="navbar navbar-expand-lg nav-pills nav-fill navigationColor" style={navBarStyle}>
            <a className="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
            <a className="nav-item nav-link" href="thisWebsite">This Website</a>
            <a className="nav-item nav-link" href="futureProjects">Future Projects</a>
        </nav>
    </section>
        <div style={{padding: "2%"}}>
          <p style={{fontSize: "2rem"}}>Bumper</p>
        </div>
    
        <section>
          <div className="topSection">
            <h1>Hello, world,</h1>
            <h1>I'm Andrew!</h1>
          </div>
          <div className="container-fluid" style={{width: "100%"}}>
            <div className="row">
                <div className="col" style={{padding: "2%"}}>
                    <p>I'm a Flutter programmar with experience in multiple programming languages, with a focus on Web Developement languages. I’m seeking to further my career in the technology field and complete more projects. I’m a self starter with experience working alone and on small teams.</p>
                </div>
            <div className="col" style={{padding: "2%"}}><h2>This is made in React!</h2>
            </div>
          </div>
        </div>
        </section>
        </body>
        <Footer />
    </div>
}

export default App;