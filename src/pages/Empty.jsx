import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Empty() {
    return (
        <>
            <Helmet>
                <title>Empty Page</title>
            </Helmet>

            <Navbar />
            <p>This page doesn't exist! Try navigating to a page that exists.</p>
            <Footer />
        </>
    )
}

export default Empty;