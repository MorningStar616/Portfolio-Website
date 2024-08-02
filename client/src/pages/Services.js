import React from 'react';
import { Box } from '@mui/material';

const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Services = () => {
  return (
    <Box id="services" style={sectionStyle}>
      <h1>Services Section</h1>
      <p>Welcome to the Services section!</p>
    </Box>
  );
};

export default Services;
