import { Box } from '@mui/material';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import NavMenuItem, { NavOptionsI } from './components/NavMenuItem/NavMenuItem';

export const NAV_OPTIONS = [
  {
    id: '1',
    name: 'Characters',
    path: '/characters'
  }
];

const NavMenu = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'flex-end'
        }}
      >
        <ResponsiveMenu />
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: '2rem'
        }}
      >
        {
          NAV_OPTIONS.map((item: NavOptionsI) => {
            return (
              <NavMenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                path={item.path}
              />
            );
          })
        }
      </Box>
    </>
  );
};

export default NavMenu;
