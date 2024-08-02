import React from 'react';
import { Box } from '@mui/material';

const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Projects = () => {
  return (
    <Box id="projects" style={sectionStyle}>
      <h1>Projects Section</h1>
      <p>Welcome to the Projects section!</p>
    </Box>
  );
};

export default Projects;
