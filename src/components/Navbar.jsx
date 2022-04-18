import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div id="nav-left">
                <Link to="/"><img src="https://blog.greendot.org/wp-content/uploads/sites/13/2021/09/placeholder-image.png" alt="Logo" id="nav-logo" /></Link>
                <Link to="/" id="nav-name">Everything Cookbook</Link>
            </div>
            <div id="nav-right">
                <Link to="/" className={`nav-page-link ${(num === "homepage") ? "nav-active" : "nav-inactive"}`}>Homepage</Link>
                <Link to="/about" className={`nav-page-link ${(num === "resume") ? "nav-active" : "nav-inactive"}`}>About</Link>
                <Link to="/recipes" className={`nav-page-link ${(num === "projectGallery") ? "nav-active" : "nav-inactive"}`}>Recipes</Link>
                <Link to="/contact" className={`nav-page-link ${(num === "contactMe") ? "nav-active" : "nav-inactive"}`}>Contact Me</Link>
            </div>
            <button id="drop-down-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </nav>
    )
}

export default Navbar;