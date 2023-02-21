import { ThemeProvider } from "@mui/material";
import { Navbar } from "./src/components/Navbar/Navbar";
import { AppTheme } from "./assets/themes/AppTheme";
import { Characters } from "./src/features/Characters/Characters";
import styled from "@emotion/styled";

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
        <Characters />
      </Main>
    </ThemeProvider>
  );
}

export default App;
