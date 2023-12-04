import Events from "./Events";
import People from "./People";
import Resources from "./Resources";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";

export default function App() {
    return (
        < BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/people" element={<People />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/events" element={<Events />} />

            </Routes>
        </BrowserRouter>
    )
}

