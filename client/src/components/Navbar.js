import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const CustomAppBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

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
    backgroundColor: '#e65c00',
  },
});

const HamburgerMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: 'black',
    color: 'white',
  },
}));

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      <ListItem button onClick={() => { scrollToSection('home'); setDrawerOpen(false); }}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => { scrollToSection('aboutMe'); setDrawerOpen(false); }}>
        <ListItemText primary="About Me" />
      </ListItem>
      <ListItem button onClick={() => { scrollToSection('services'); setDrawerOpen(false); }}>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button onClick={() => { scrollToSection('projects'); setDrawerOpen(false); }}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button onClick={() => { scrollToSection('contact'); setDrawerOpen(false); }}>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem button>
        <DownloadButton variant="contained" fullWidth>Download Resume</DownloadButton>
      </ListItem>
    </List>
  );

  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <HamburgerMenuButton edge="start" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </HamburgerMenuButton>
        <NavLinks>
          <NavLinkButton onClick={() => scrollToSection('home')}>Home</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('aboutMe')}>About Me</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('services')}>Services</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('projects')}>Projects</NavLinkButton>
          <NavLinkButton onClick={() => scrollToSection('contact')}>Contact</NavLinkButton>
          <DownloadButton variant="contained">Download Resume</DownloadButton>
        </NavLinks>
      </CustomToolbar>
      <DrawerContainer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </DrawerContainer>
    </CustomAppBar>
  );
};

export default Navbar;
