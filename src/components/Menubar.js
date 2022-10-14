import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from "@mui/material/Link";

const pages = ['Drinks', 'Food'];


const MenuBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl" sx={{bgcolor: 'primary.light'}}>
                <Toolbar disableGutters sx={{justifyContent: 'space-between', bgcolor: 'primary.light'}}>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            <Typography color="secondary.main" variant="h6" textAlign="center">page</Typography>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'primary.main',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box  sx={{ flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/products-drinks"
                            sx={{ p : 1 , color: 'primary.dark' }}
                        >

                            {'Drinks'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/products-food"
                            sx={{ p : 1 ,color: 'primary.dark' }}
                        >

                            {'Food'}
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MenuBar;