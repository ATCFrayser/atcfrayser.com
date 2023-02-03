import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
    <footer>
    <img src='assets/images/mountainNarrow.png' className="img-fluid" alt="Mount Elbert" />
          <div class="row" style={{textAlign: "center"}}>
            <div class="col"><p>Copyright © {currentYear}</p></div>
          </div>
    </footer>
    );
}

export default Footer;