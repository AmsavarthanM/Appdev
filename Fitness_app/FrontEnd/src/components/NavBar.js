import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LogoutIcon from '@mui/icons-material/Logout';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='appbar1' style={{ backgroundColor: '#fff' }} position="static" elevation={4}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/home" style={{textDecoration:'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000066',
              textDecoration: 'none',
            }}
          >
            M Y F   
            <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#000066', marginTop: '4px', paddingLeft: '5px' }} />
            T
          </Typography>
            </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000066"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem sx={{ color: '#00098B' }} onClick={handleCloseNavMenu}>
              <Link to="/profile">
                <Typography textAlign="center">Products</Typography>
              </Link>
              </MenuItem>
              <MenuItem sx={{ color: '#00098B' }} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Pricing</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000066', display: 'block', fontFamily: 'sans-serif', fontWeight: 600 }}
            >
              Products
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000066', display: 'block', fontFamily: 'sans-serif', fontWeight: 600 }}
            >
              Pricing
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {/* <Tooltip title="View Cart">
              <IconButton
                size="large"
                aria-label="view cart"
                color="inherit"
                sx={{ mr: 2}}
              >
                <ShoppingCartIcon sx={{ color: '#000066' }} />
              </IconButton>
            </Tooltip> */}
            
            <Tooltip title="Sign Out">
                <IconButton size="large" aria-label="sign out" color="inherit">
                  <Link to="/" style={{textDecoration:'none'}}>
                  <LogoutIcon style={{ color: '#000066' }} />
                  </Link>
                </IconButton>
            </Tooltip>
          </Box>

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="user" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
              <Link to="/profile" style={{textDecoration:'none',color:'black'}}>
                <Typography textAlign="center">Profile</Typography>
              </Link>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
