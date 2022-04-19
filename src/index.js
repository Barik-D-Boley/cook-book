import React from "react";
import { createRoot } from "react-dom/client"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import "./styling/main.css";

/* Pages */
import Home from "./pages/Homepage";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";
import Empty from "./pages/Empty";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Empty />} />
            </Routes>
        </BrowserRouter>
    // </React.StrictMode>
);