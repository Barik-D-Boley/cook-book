import React from 'react';
import { Link } from "react-router-dom";

function Navbar(active) {
    return (
        <nav>
            <div id="nav-left">
                <Link to="/"><img src="https://clipart.world/wp-content/uploads/2020/08/white-chef-hat-png-transparent.png" alt="Logo" id="nav-logo" /></Link>
                <Link to="/" id="nav-name">Everything Cookbook™</Link>
            </div>
            <div id="nav-right">
                <Link to="/" className={`nav-page-link ${(active === "homepage") ? "nav-active" : "nav-inactive"}`}>Homepage</Link>
                <Link to="/recipes" className={`nav-page-link ${(active === "projectGallery") ? "nav-active" : "nav-inactive"}`}>Recipes</Link>
                <Link to="/contact" className={`nav-page-link ${(active === "contactMe") ? "nav-active" : "nav-inactive"}`}>Contact Me</Link>
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