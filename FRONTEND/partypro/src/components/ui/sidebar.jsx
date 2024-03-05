import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { CgProfile } from "react-icons/cg";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import logo1 from "../../assets/images/logo1.png"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { IoIosLogOut } from "react-icons/io";
import { AddBox, Book, Cancel, ChecklistRounded,Dashboard,ViewCarousel} from '@mui/icons-material';
import { MdAddCard } from "react-icons/md";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function SideBar() {
  const user = useSelector(selectUser);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          {user && <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            {user && <MenuIcon />}
          </IconButton>}
          
          <img src={logo1} style={{ marginLeft: '-21px', width: '190px', height: '90px' , marginBottom:'12px'}} />
          
          <Box sx={{ flexGrow: 1 }} />
          {!user && <Button color="inherit" component={Link} to="/login">Login</Button>}
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
       <><Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {user?.role === "Customer" ? [
            { text: 'DashBoard', path: '/dashboard' },
            { text: 'Book Events', path: '/events' },
            { text: 'Cancel Event', path: '/cancelevent' },
            { text: 'Check status', path: '/check-status' },
            { text: 'View Events', path: '/viewevents' }
          ].map(({ text, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>
                  {text === 'DashBoard'? <Dashboard/> : text === 'Book Events'? <Book/> : text === 'Cancel Event' ? <Cancel/> : text === 'Check status' ? <ChecklistRounded /> : text === 'View Events' ? <ViewCarousel/> : <MailIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )) : [
            { text: 'DashBoard', path: '/dashboard' },
            {text : 'Add Theme' , path : '/add-event'},
          {text : 'Add Addons' , path : '/add-addons'}
          ].map(({ text, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>
                  {text === 'DashBoard'? <Dashboard/> :  text ==='Add Theme' ? <AddBox/>  :  text ==='Add Addons' ? <MdAddCard/>  : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'My Profile', path: '/profile' },
            { text: 'Logout', path: '/logout' }
          ].map(({ text, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>
                  {text==='My Profile'? <CgProfile /> : text ==='Logout' ? <IoIosLogOut /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main></>
    </Box>
  );
}
