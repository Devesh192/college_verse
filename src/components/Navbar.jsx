import React, { Fragment, useState, useContext } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Link } from 'react-router-dom';
import '../styles/styling.css'
import { UserContext } from '../App';


const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const data1 = state[0];
  const data2 = state[1];

  
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const activelink = " border-bottom-4 bg-green-500 font-bold border-b-2 border-green-500 underline"
  const [islogged, setlogin] = useState(false) 
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color={"goldenrod"}
        variant='h6'
        component="div"
        sx={{ flexGrow: 1, my: 2}}
      >
        <GroupsIcon />
        {/* College Verse */}
      </Typography>
      <Divider />
      <ul className="mobile-navigation flex-col">
        <li>
          <NavLink to={'./'} activeClassName = "devesh">Home</NavLink>
        </li>
        <li>
          <NavLink to={'/menu'} activeClassName={activelink}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/Login'}>Login</NavLink>
        </li>
      </ul>
    </Box>
  )
  const NavbarLoader = () => {
    if (data1) {
      return (
        <>
          <Box>
            <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
              <Toolbar>
                <Typography
                  color={"goldenrod"}
                  variant='h6'
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  <GroupsIcon />
                  College Verse
                </Typography>

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  sx={{
                    mr: 2,
                    display: { sm: "none" },
                  }}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <ul className="navigation-menu">
                    <li>
                      <NavLink to={'/'} activeClassName={activelink}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/menu'} activeClassName={activelink}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/about'} activeClassName="active">About</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/community'}>Community</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/userprofile'}>{data2}</NavLink> 
                    </li>
                    <li>
                      <button className=' '>Logout</button>
                    </li>
                  </ul>
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer variant='temporary'
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor='right'
                sx={{
                  display: { xs: 'block', sm: 'none' },
                  "& .MuiDrawer-paper": {
                    boxSizing: 'border-box',
                    width: "180px",
                  },
                }}>
                {drawer}
              </Drawer>
            </Box>
            <Toolbar />
          </Box>
        </>
      )
    }
    else {
      return (
        <Box>
          <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
            <Toolbar>

              <Typography
                color={"goldenrod"}
                variant='h6'
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <GroupsIcon />
                College Verse
              </Typography>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <ul className="navigation-menu">
                  <li>
                    <NavLink to={'/'} activeClassName={activelink}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/menu'} activeClassName={activelink}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/about'} activeClassName="active">About</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/community'}>Community</NavLink>
                  </li>
                  <li>
                    <NavLink to={'/login'}>Login</NavLink>
                  </li>
    
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer variant='temporary'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              anchor='right'
              sx={{
                display: { xs: 'block', sm: 'none' },
                "& .MuiDrawer-paper": {
                  boxSizing: 'border-box',
                  width: "180px",
                },
              }}>
              {drawer}
            </Drawer>
          </Box>
          <Toolbar />
        </Box>
      )
    }
  }
  return (
    <>
      <NavbarLoader />
    </>
  );
};

export default Navbar;
