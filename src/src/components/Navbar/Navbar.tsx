import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
// COMPONENTS
import NavLogo from './components/NavLogo/NavLogo';
import NavMenu from './components/NavMenu/NavMenu';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          display='flex'
          alignItems="center"
        >
          <NavLogo width="10rem" />
        </Box>
        <Box>
          <NavMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
