import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Login() {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <form>
        <TextField fullWidth label="Username" margin="normal" />
        <TextField fullWidth label="Password" type="password" margin="normal" />
        <Button variant="contained" color="primary" fullWidth>Login</Button>
      </form>
    </Box>
  );
}

export default Login;
