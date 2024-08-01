import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';

const sectionStyle = {
  padding: '100px 0',
  minHeight: '100vh',
};

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Box id="home" style={sectionStyle}>
        <h1>Home Section</h1>
        <p>Welcome to the home section!</p>
      </Box>
      <Box id="aboutMe" style={sectionStyle}>
        <h1>About Me Section</h1>
        <p>Welcome to the About Me section!</p>
      </Box>
      <Box id="services" style={sectionStyle}>
        <h1>Services Section</h1>
        <p>Welcome to the Services section!</p>
      </Box>
      <Box id="projects" style={sectionStyle}>
        <h1>Projects Section</h1>
        <p>Welcome to the Projects section!</p>
      </Box>
      <Box id="contact" style={sectionStyle}>
        <h1>Contact Section</h1>
        <p>Welcome to the Contact section!</p>
      </Box>
    </div>
  );
};

export default LandingPage;
