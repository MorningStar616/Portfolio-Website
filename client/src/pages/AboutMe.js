import React from 'react';
import { Box } from '@mui/material';

const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const AboutMe = () => {
  return (
    <Box id="aboutMe" style={sectionStyle}>
      <h1>About Me Section</h1>
      <p>Welcome to the About Me section!</p>
    </Box>
  );
};

export default AboutMe;
