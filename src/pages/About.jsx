import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <Navbar />
            About
            <Footer />
        </div>
    )
}

export default About
