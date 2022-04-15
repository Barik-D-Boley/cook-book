import React from 'react';
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Homepage() {
    return (
        <div>
            <Helmet>
                <title>Homepage</title>
            </Helmet>

            <Navbar />
            <div>
                Homepage
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
