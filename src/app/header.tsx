import { AppBar, Box, Button, Container, Toolbar, Typography, useTheme } from "@mui/material";
import { ReactElement } from "react"
import CoffeeIcon from '@mui/icons-material/Coffee';

type HeaderProps = {
}

const pages = [{name: 'Blog', href: '/'}, {name: 'Projects', href: '/projects'}, {name: 'Resume', href: '/resume'}];
export default function Header(props: HeaderProps): ReactElement {
    const theme = useTheme();

    return (
      <AppBar position="static">
        <Container >
          <Toolbar disableGutters>
          <CoffeeIcon sx={{ mr: 1, display: 'flex'}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            bertorel-dev.net
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            {pages.map((page, idx) => (
              <Button
                key={idx}
                href={page.href}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}