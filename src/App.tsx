import { ThemeProvider } from "@mui/material";
import Navbar from "./src/components/Navbar/components/Navbar";
import { AppTheme } from "./assets/themes/AppTheme";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

function App() {
  const Header = styled.header({
    marginBottom: "2.5rem",
  });

  const Main = styled.main({
    // margin: "2rem",
  });

  return (
    <ThemeProvider theme={AppTheme}>
      <Header>
        <Navbar />
      </Header>

      <Main>
        <Outlet />
      </Main>
    </ThemeProvider>
  );
}

export default App;
