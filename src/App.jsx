import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import HashRouter
import GradientBackground from './Components/GradientBackground';
import Navbar from './Components/Navbar';
import ActivateWithActivator from './Components/Heading';
import './Components/App.css';
import Button from './Components/Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  const Home = () => {
    return (
      <>
        <Navbar />
        <GradientBackground />
        <div className="absolute inset-0 flex justify-center items-center">
          <ActivateWithActivator />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Button onClick={handleClick}>Launch App</Button>
        </div>
      </>
    );
  };
  
  return (
    <Router> {/* Use HashRouter */}
      <div className="relative w-full min-h-screen bg-zinc-900 text-white">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect to /home by default */}
          <Route path="/Home" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/AboutUs" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Apps = () => {
  return (
    <>
      <Navbar />
      <GradientBackground />
    </>
  );
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <GradientBackground />
    </>
  );
};

export default App;
