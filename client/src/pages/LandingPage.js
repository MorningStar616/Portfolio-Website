import React from 'react';
import Navbar from '../components/Navbar';
import { Box, Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import homeImage from '../images/images-removebg-preview.png';
import AboutMe from './AboutMe';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact'; 

const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const TextSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'left',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(10),
    marginTop: theme.spacing(-10),
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  margin: '0',
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  margin: '0',
  color: '#fd6f00',
}));

const Highlight = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
}));

const BioText = styled(Typography)(({ theme }) => ({
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 'normal',
  marginTop: theme.spacing(2.5),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  padding: '10px 20px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#fd6f00',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#e65c00',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    fontSize: '0.9rem',
  },
}));


const ImageSection = styled('img')(({ theme }) => ({
  width: '80%',
  maxWidth: '500px',
  height: 'auto',
  objectFit: 'cover',
  marginTop: theme.spacing(-10),
}));

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Box id="home" style={sectionStyle}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextSection>
              <Heading variant="h1">Hi I am</Heading>
              <Highlight variant="h1">Ashwath John</Highlight>
              <SubHeading variant="h2">Software Engineer</SubHeading>
              <BioText variant="body1">
                I am a B.Tech in Information Technology student at Cochin University of Science and Technology (CUSAT), with a keen interest in software development and Cloud/DevOps practices. Eager to apply my skills and knowledge in real-world projects.
              </BioText>
              <CustomButton variant="contained">Hire Me</CustomButton>
            </TextSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <ImageSection src={homeImage} alt="Home Image" />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* About Me */}
      <Box id="aboutMe" style={sectionStyle}>
        <AboutMe />
      </Box>

      {/* Services */}
      <Box id="services" style={sectionStyle}>
        <Services />
      </Box>

      {/* Projects */}
      <Box id="projects" style={sectionStyle}>
        <Projects />
      </Box>

      {/* Contact */}
      <Box id="contact" style={sectionStyle}>
        <Contact />
      </Box>
    </Box>
  );
};

export default LandingPage;
