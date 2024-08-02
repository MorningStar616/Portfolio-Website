import React from 'react';
import { Box } from '@mui/material';

const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Contact = () => {
  return (
    <Box id="contact" style={sectionStyle}>
      <h1>Contact Section</h1>
      <p>Welcome to the Contact section!</p>
    </Box>
  );
};

export default Contact;
