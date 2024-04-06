import { Link } from "@mui/material";
import { ReactElement } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/app/theme";
import Header from "@/app/header";

export default function Index(): ReactElement {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
    )
}