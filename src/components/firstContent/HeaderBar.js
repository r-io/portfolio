import { GitHub, Mail } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
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
            <Tooltip title="email4rio@gmail.com">
              <IconButton size="large" href="mailto:email4rio@gmail.com" color="inherit">
                <Mail />
              </IconButton>
            </Tooltip>
            <Tooltip title="r-io">
              <IconButton size="large" href="https://github.com/r-io" color="inherit">
                <GitHub />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
