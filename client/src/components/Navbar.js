import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)({
  alignItems: 'center',
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const NavLinks = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexGrow: 1,
});

const NavLinkButton = styled(Button)({
  color: 'white',
  fontFamily: 'Poppins, sans-serif',
});

const DownloadButton = styled(Button)({
  backgroundColor: '#fd6f00',
  color: 'white',
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
  '&:hover': {
    backgroundColor: '#c51162',
  },
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <NavLinks>
          <NavLinkButton onClick={() => scrollToSection('home')}>Home</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('aboutMe')}>About Me</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('services')}>Services</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('projects')}>Projects</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('contact')}>Contact</NavLinkButton>
          <DownloadButton variant="contained">Download Resume</DownloadButton>
        </NavLinks>
      </CustomToolbar>
    </CustomAppBar>
  );
};

export default Navbar;
