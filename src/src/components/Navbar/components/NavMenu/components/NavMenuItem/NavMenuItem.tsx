import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export interface NavOptionsI {
    id: string;
    name: string;
    path: string;
  }

const NavMenuItem = ({ id, path, name }: NavOptionsI) => {
  return (
    <Typography
      sx={{ textDecoration: 'none' }}
      color="primary"
      component={Link}
      to={path}
    >
      {name}
    </Typography>
  );
};

export default NavMenuItem;
