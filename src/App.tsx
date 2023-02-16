import { createTheme, ThemeProvider } from "@mui/material"
import { Navbar } from "./src/components/Navbar/Navbar"
function App() {

  const darkTheme = createTheme({
    palette:{
      mode:"dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
<Navbar/>
    </ThemeProvider>
  )
}

export default App
