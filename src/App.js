import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'; // Ensure this path is correct relative to App.js
import About from "./pages/About";

function App() {
  return (
    <div className="App">
    
        
        <>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aboutus" element={<About />} />
            </Routes>
          </Router>
        </>
      
    </div>
  );
}

export default App;
