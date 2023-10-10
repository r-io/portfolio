import { Equalizer, FolderOpen, GitHub, Mail, MenuOutlined, Phone } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    position: trigger ? 'fixed' : 'static',
  });
}

export default function HeaderBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
    });
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleOnClickMail = () => {
    window.location.href = 'mailto:email4rio@gmail.com';
  };

  const handleOnClickGithub = () => {
    window.location.href = 'https://github.com/r-io';
  };

  const mobileMenuId = 'menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleScroll('about')}>
        <Equalizer />
        <Typography variant="p">About</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleScroll('portfolio')}>
        <FolderOpen />
        <Typography variant="p">Portfolio</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleScroll('contact')}>
        <Phone />
        <Typography variant="p">Contact</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleOnClickMail}>
        <Mail />
        <Typography variant="p">Email</Typography>
      </MenuItem>
      <MenuItem onClick={handleOnClickGithub}>
        <GitHub />
        <Typography variant="p">Github</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton size="large" onClick={() => handleScroll('top')} color="inherit">
            <img className="header-logo" src="logo.png" />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={() => handleScroll('about')} color="inherit">
              About
            </Button>
            <Button onClick={() => handleScroll('portfolio')} color="inherit">
              Portfolio
            </Button>
            <Button onClick={() => handleScroll('contact')} color="inherit">
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="email4rio@gmail.com">
              <IconButton size="large" href="mailto:email4rio@gmail.com" color="inherit">
                <Mail />
              </IconButton>
            </Tooltip>
            <Tooltip title="r-io">
              <IconButton
                size="large"
                target="_blank"
                href="https://github.com/r-io"
                color="inherit"
              >
                <GitHub />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
      </AppBar>
    </ElevationScroll>
  );
}
