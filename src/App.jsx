import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 