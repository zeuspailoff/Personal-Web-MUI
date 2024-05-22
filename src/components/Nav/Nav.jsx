import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Contact'];

export default function Nav() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link to="/">
                <Typography variant="h6" sx={{ my: 2 }}>
                    <img src="/logoabraham.png" alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </Typography>
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={`/${item}`} style={{ textDecoration: 'none', color: 'inherit' }} >{item}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>

    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ background: '#37474f', height: '109px' }} component="nav"  >
                <Toolbar style={{ width: '100%', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        textAlign="right"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/home">
                        <img src="/Abraham.png" alt="Logo" style={{ width: '110px', height: 'auto' }} />
                    </Link>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                <Link to={`/${item}`} style={{ textDecoration: 'none', color: 'inherit' }} >{item}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
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

            </nav>

        </Box>
    );
}
