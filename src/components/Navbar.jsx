import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bitcoin App
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/login">Login</Button>
        <Button color="inherit" component={RouterLink} to="/bitcoin">Bitcoin</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
