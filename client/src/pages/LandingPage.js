import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import homeImage from '../images/images-removebg-preview.png'; 


const sectionStyle = {
  padding: '50px 0',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const TextSection = styled('div')({
  flex: 1,
  padding: '20px',
  marginLeft: '100px',
  textAlign: 'left',
  marginTop: '-100px',
});

const Heading = styled('h1')({
  fontSize: '1.5rem',
  margin: '0',
});

const SubHeading = styled('h2')({
  fontSize: '1.5rem',
  margin: '0',
  color: '#fd6f00',
});

const Highlight = styled('div')({
  fontSize: '3rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
});

const HighlightText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Text = styled('span')({
});

const BioText = styled('span')({
  display: 'block',
  fontSize: '0.8rem',
  fontWeight: 'normal',
  marginTop: '20px',
});

const Button = styled('button')({
  marginTop: '20px',
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
});

const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  marginTop: '-90px',
});

const ImageSection = styled('img')({
  width: '80%', 
  maxWidth: '500px',
  height: 'auto',
  objectFit: 'cover',
});

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Box id="home" style={sectionStyle}>
        <TextSection>
          <Heading>Hi I am</Heading>
          <Highlight>
            <HighlightText>
              Ashwath John
            </HighlightText>
          </Highlight>
          <SubHeading>Software Engineer</SubHeading>
          <BioText>
            I am a B.Tech in Information Technology student at Cochin University of Science and Technology (CUSAT), with a keen interest in software development and Cloud/DevOps practices. Eager to apply my skills and knowledge in real-world projects.
          </BioText>
          <Button>Hire Me</Button>
        </TextSection>
        <ImageContainer>
          <ImageSection src={homeImage} alt="Home Image" />
        </ImageContainer>
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
