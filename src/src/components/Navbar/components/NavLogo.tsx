import { Typography } from '@mui/material';
import logo from '../../../../assets/images/logo.png';

interface NavLogoProps {
  width: string;
}

const NavLogo = ({ width }: NavLogoProps) => {
  return (
    <img
      src={logo}
      alt="Navbar logo"
      style={{ width: width }}
    />
  );
};

export default NavLogo;
