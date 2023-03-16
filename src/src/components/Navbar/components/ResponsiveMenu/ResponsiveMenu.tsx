import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEvent, useState } from 'react';
import { NAV_OPTIONS } from '../NavMenu/NavMenu';
import { NavOptionsI } from '../NavMenu/components/NavMenuItem/NavMenuItem';
import { Link } from 'react-router-dom';

const ResponsiveMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {NAV_OPTIONS.map((item: NavOptionsI) => {
          return (
            <MenuItem
              onClick={handleCloseNavMenu}
              key={item.id}
            >
              <Typography
                sx={{ textDecoration: 'none' }}
                to={item.path}
                component={Link}
              >
                {item.name}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ResponsiveMenu;
