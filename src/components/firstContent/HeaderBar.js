import { GitHub, Mail } from '@mui/icons-material';
import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, useScrollTrigger } from '@mui/material';
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
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
    });
  };

  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton size="large" onClick={() => handleScroll('top')} color="inherit">
            <img className="header-logo" src="/logo.png" />
          </IconButton>
          <Box sx={{ display: { md: 'flex' } }}>
            <Button onClick={() => handleScroll('portfolio')} color="inherit">
              Portfolio
            </Button>
            <Button onClick={() => handleScroll('contact')} color="inherit">
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
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
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
