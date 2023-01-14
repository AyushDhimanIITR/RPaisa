import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ContactlessIcon from '@mui/icons-material/Contactless';
import LoginIcon from '@mui/icons-material/Login';

import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#3D424A'}}>
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            style={{color:'#E6E5DE'}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
              </IconButton>
            
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/' style={{color: '#E6E5DE', textDecoration:'none'}}>

                <ContactlessIcon sx={{ fontSize: 'large' }} />
                R Paisa
                </Link>
              </Typography>


          <Link to='/signup' style={{textDecoration:'none'}}>

            <Button><Typography color={"#E6E5DE"}><LoginIcon sx={{ fontSize: 'large' }} /> Register</Typography></Button>

          </Link>


        </Toolbar>
      </AppBar>
      <Outlet />
    </Box >
  );
}

export default Header;