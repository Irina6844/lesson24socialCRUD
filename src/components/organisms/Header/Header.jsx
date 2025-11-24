import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Container, Avatar, Button, Tooltip} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';

const pages = [{title: "Home", path: "/"}, {title: "Users", path: "/users"}];


export function Header() {

  return (
    <AppBar position="sticky" color='error' sx={{mb: '30px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <InstagramIcon />
  
          <Box sx={{ flexGrow: 1, ml:'30px', display: 'flex', gap:'30px' }}>
            {pages.map((page) => (
              <Button
              component={NavLink}
              to={page.path}
                key={page.path}
                variant='contained'
                color='success'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

