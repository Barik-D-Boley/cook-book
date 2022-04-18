// Misc
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from 'react-helmet';

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Icons
import { MdClose } from 'react-icons/md';

function ContactMe() {
    const [active, setActive] = useState(false);
    const [success, setSuccess] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        let name = document.getElementById("name-input").value;
        let fromEmail = document.getElementById("email-input").value;
        let subject = document.getElementById("email-subject").value;
        let message = document.getElementById("email-content").value;

        if ((name && fromEmail && subject && message) !== "") {
            emailjs.sendForm("service_ntq0jqe", "template_mby0g68", form.current, "user_fpJp0wfQ4tjfPrmdOUL6M")
                .then(() => {
                    setActive(true);
                    setSuccess(true);
                    document.getElementById("name-input").value = "";
                    document.getElementById("email-input").value = "";
                    document.getElementById("email-subject").value = "";
                    document.getElementById("email-content").value = "";
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            setActive(true);
            setSuccess(false);
        }
    }

    return (
        <div id="contactPage">
            <Helmet>
                <title>Contact Me</title>
            </Helmet>

            {/* Alert Box */}
            <div className={`${(active === true) ? "active-alert-box" : "inactive-alert-box"}`}>

                <div className="alert-info">
                    <div id="close-out-container"><MdClose className="close-out" onClick={() => setActive(false)} /></div>

                    {/* Success Message */}
                    <div className={`${(success === true) ? "success-message" : "inactive-alert-box"}`}>
                        <h1 id="success-title" className="alert-title">Success!</h1>
                        <p className="alert-text">Your message was sent successfully</p>
                    </div>

                    {/* Failed Message */}
                    <div className={`${(success === false) ? "failed-message" : "inactive-alert-box"}`}>
                        <h1 id="failed-title" className="alert-title">Error</h1>
                        <p className="alert-text">Not all parameters were filled</p>
                    </div>
                </div>
            </div>

            {/* Page Content */}
            <Navbar active={"contactMe"} />
            <div className="website-container-div">
                <div id="contact-container-div" className="container-div">
                    <h5>Get in Touch</h5>
                    <form id="send-email" ref={form} onSubmit={sendEmail}>
                        <input type="text" id="name-input" className="email-input" placeholder="Your Name:" name="from_name" autocomplete="name" /><hr />
                        <input type="email" id="email-input" className="email-input" placeholder="Your Email:" name="from_email" autocomplete="email" /><hr />
                        <input type="text" id="email-subject" className="email-input" placeholder="Subject:" name="subject" autocomplete="off" />
                        <textarea type="text" id="email-content" className="email-input" placeholder="Dear Barik," name="message" autocomplete="off" />
                        <input type="submit" value="Send" id="submit-btn" className="email-input" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactMe
