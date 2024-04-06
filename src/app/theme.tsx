import { PaletteMode, ThemeOptions, createTheme } from "@mui/material";

const mode: PaletteMode = 'light';

const palette = {
mode: mode,
primary: {
    main: '#44485c',
},
secondary: {
    main: '#9c27b0',
},
}
const themeOptions: ThemeOptions = {
    palette: palette,
    components: {

    },
    typography: {

    }
};

export const theme = createTheme(themeOptions)