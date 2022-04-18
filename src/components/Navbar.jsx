import React from 'react'

function Navbar() {
    return (
        <nav>
            <div id="nav-left">
                <a href="/"><img src="https://blog.greendot.org/wp-content/uploads/sites/13/2021/09/placeholder-image.png" alt="Logo" id="nav-logo" /></a>
                <a href="/" id="nav-name">Everything Cookbook</a>
            </div>
            <div id="nav-right">
                <a href="/">Homepage</a>
                <a href="/about">About</a>
                <a href="/recipes">Recipes</a>
                <a href="/contact">Contact</a>
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