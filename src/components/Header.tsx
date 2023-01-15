import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import useAnchorEl from '@/hooks/useAnchorEl';

const pages = ['About', 'Store'];

function ResponsiveAppBar() {
  const anchorElSets = useAnchorEl(null);
  const anchorElNav = anchorElSets.anchorEl;
  const handleOpenNavMenu = anchorElSets.handleOpenMenu;
  const handleCloseNavMenu = anchorElSets.handleCloseMenu;

  return (
    <AppBar position="fixed" color="inherit" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon color="primary" fontSize='large'/>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link href={`/${page}`} key={page} style={{textDecoration: "none", color: "inherit"}}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" sx={{fontDecoration: "none"}}>
                      {page}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
           sx={{
            display: { xs: 'flex', md: 'none' },
           }}>
            <a href="/">
              <img src="/logo.svg" width="108px"/>
            </a>
          </Box>

          <Box sx={{
            ml: "82px",
            padding: "0 75px",
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: "space-evenly"
          }}>
            {pages.map((page) => (
              <Link href={`/${page}`} key={page} style={{textDecoration: "none", color: "inherit"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: 'block', fontWeight: 600 }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
           sx={{
            display: { xs: 'none', md: 'flex' },
          }}>
            <a href="/">
              <img src="/logo.svg" width="82px"/>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
