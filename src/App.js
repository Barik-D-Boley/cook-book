import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Homepage';
import About from './pages/About';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App