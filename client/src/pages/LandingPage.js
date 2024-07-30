import React from 'react';
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
  mainContainer: {
    marginTop: '64px', // Adjust this value based on the height of your Navbar
    padding: '16px', // replace theme.spacing(2) with equivalent pixels
    backgroundColor: '#f0f0f0', 
  },
});

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
    </>
  );
};

export default LandingPage;
