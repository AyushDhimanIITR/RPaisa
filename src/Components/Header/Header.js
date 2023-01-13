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
import Signup from '../Register/Registration';
import { Outlet,Link} from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <ContactlessIcon sx={{fontSize: 'large' }} />
            R Paisa
          </Typography>
          
          <Button><Typography color={"#E6E5DE"}><LoginIcon sx={{fontSize:'large'}}/> Register</Typography></Button>

        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default Header;