import React from 'react'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { Avatar, Box, Checkbox, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const SignIn = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };


  return (
    <Box m="50px">

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        m="8px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiChackbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> <br />
            <Button 
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{border:"1px solid", padding:"10px", borderRadius:"10px", backgroundColor:"#000080", color:"#fff", marginTop:"30px"}}
>
          Sign In
        </Button>
        <Grid container justifyContent="flex-end" marginTop="-30px">
          <Grid item>
            <Link to="/signup" variant="body2" >
            Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
            
          </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default SignIn
