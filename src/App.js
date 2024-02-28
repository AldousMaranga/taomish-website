import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/home';
import Work from './Components/work';
import Team from './Components/team';
import Careers from './Components/careers';
import Company from './Components/company';
import Contact from './Components/contact'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="nav">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    );
  }

}

export default App;
