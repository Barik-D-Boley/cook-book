import React from "react";

/* Icons */
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className="row top">
                <div className="col">
                    <div>
                        <ul>
                            <li className="title">Contact</li>
                            <li><a href="https://www.google.com/maps/place/Phoenix,+AZ/@33.6056711,-112.4052341,10z/data=!3m1!4b1!4m5!3m4!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!8m2!3d33.4483771!4d-112.0740373" target="_blank" rel="noreferrer">Phoenix, AZ</a></li>
                            <li><a href="mailto:barik.boley@gmail.org">barik.boley@gmail.org</a></li>
                            <li><a href="tel:602-668-6436">(602) 668-6436</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="title">Navigation</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/recipes">Recipes</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="title">Title</li>
                            <li><a href="#">List Item</a></li>
                            <li><a href="#">List Item</a></li>
                            <li><a href="#">List Item</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="socials">
                    <ul>
                        <li><a href="https://github.com/xBarikadex" target="_blank" rel="noreferrer"><BsGithub /></a></li>
                        <li><a href="https://www.instagram.com/xbarikadex/?hl=en" target="_blank" rel="noreferrer"><BsInstagram /></a></li>
                        <li><a href="https://twitter.com/JohnMurderous" target="_blank" rel="noreferrer"><BsTwitter /></a></li>
                    </ul>
                </div>
                <p>Everything Cookbook © 2022</p>
            </div>
        </footer>
    )
}

export default Footer
