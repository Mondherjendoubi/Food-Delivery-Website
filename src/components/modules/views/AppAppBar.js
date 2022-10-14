import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "../components/Typography";

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};



function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
              variant="h6"
              underline="none"
              href="/home"
              sx={{ ...rightLink, color: 'secondary.main' }}

          >

            {'Home'}
          </Link>
          <Link
              variant="h6"
              underline="none"
              href="/about"
              sx={{ ...rightLink, color: 'secondary.main' }}
          >

            {'About'}
          </Link>
          <Link
              variant="h6"
              underline="none"
              href="/products"
              sx={{ ...rightLink, color: 'secondary.main' }}
          >

            {'Products'}
          </Link>
          <Box sx={{ flex: 0.55 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 30 }}
          >
            The Breaking Bad
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/sign-in"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/sign-up"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
