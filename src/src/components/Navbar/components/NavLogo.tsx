import { Typography } from "@mui/material";
import logo from "../../../../assets/images/logo.png";

interface NavLogoProps {
  width: string;
}

export const NavLogo = ({ width }: NavLogoProps) => {
  return <img src={logo} alt="Navbar logo" style={{ width: width }} />;
};
