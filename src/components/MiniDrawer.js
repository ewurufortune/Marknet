import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './minidrawersass.scss'
import Tagline from './Tagline';
import { Outlet, Link } from "react-router-dom";
const drawerWidth = 240;

function MiniDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div   style={{backgroundImage: 'linear-gradient(142deg, rgba(63, 161, 251, 1) 0%, rgba(252, 70, 168, 1) 100%)'}}>
      <Toolbar />
      <Divider />
      <List>
  {[
    {text: 'Home', link: '/home'},
    {text: 'Whitepaper', link: '/whitepaper'},
    {text: 'Waitlist', link: '/waitlist'},
    {text: 'Drafts', link: '/drafts'}
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton component="a" href={item.link}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
<Divider />
<List sx={{marginBottom: '195px'}}>
  {[
    {text: 'Notifications', link: '/notifications'},
    {text: 'MCNWallet', link: '/mcn-wallet'},
    {text: 'Settings', link: '/settings'}
  ].map((item, index) => (
    <ListItem key={item.text} disablePadding>
      <ListItemButton component="a" href={item.link}>
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <h1 className="sweet-title2">
      <span data-text="MCN">MCN</span>
      <span data-text="WEB3">WEB3</span>
    </h1>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
           
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
         
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
           
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='home'>
        <section className="header">
  <div className="title-wrapper">
    <h1 className="sweet-title">
      <span data-text="MCN">MCN</span>
      <span data-text="WEB3">WEB3</span>
    </h1>
    <span className="top-title">Coming Soon...</span>
    <span className="bottom-title">By MarkPrince</span>
    </div>
</section>



<div className='tagline'>
<Tagline />
</div>
<div className='bottom'>
<section className="disclaimer">
  <span>Inspired by <a href="https://twitter.com/ewurufortune"><u>Fortune Ewuru </u>🐺</a></span>
</section>
        <p className='paragraph'>
        Experience faster, cheaper, and more secure transactions while enjoying complete control over your data.🚀🔒
        </p>
        <br/>
        </div>
        
</div>
      </Box>
    </Box>
  );
}

MiniDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MiniDrawer;