import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Empty() {
    return (
        <>
            <Navbar />
            <p>This page doesn't exist! Try navigating to a page that exists.</p>
            <Footer />
        </>
    )
}

export default Empty;