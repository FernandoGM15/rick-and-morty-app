import { createTheme } from "@mui/material";
import { cyan, green, grey, lightGreen } from "@mui/material/colors";

export const AppTheme = createTheme({
    typography: {
        allVariants: {
            color: "white",
        },
        h3: {
            fontFamily: "get-schwifty",
            fontWeight: 100,
            textAlign: "center",
            WebkitTextStroke: "1px yellow"
        }
    },
    palette: {
        mode: "dark",
        text: {
            primary: grey[50]
        },
        primary: {
            main: cyan[500],
        },
        secondary: {
            main: green[700]
        },
    },
});
