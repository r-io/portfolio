import { GitHub, Mail } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
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
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Rio
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: 'flex' } }}>
            <Button color="inherit">About Me</Button>
            <Button color="inherit">History</Button>
            <Button color="inherit">Projects</Button>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Mail />
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
              <GitHub />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
