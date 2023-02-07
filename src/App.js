import React, { useState } from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Hidden
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

function App() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
  return (
      <>
          <CssBaseline/>
          <div className="App">
              <Box>
                  <AppBar position="static">
                      <Toolbar>
                          <Hidden only={['lg', 'xl']}>
                              <IconButton
                                  size="large"
                                  edge="start"
                                  color="inherit"
                                  aria-label="menu"
                                  sx={{ mr: 2 }}
                                  onClick={() => setDrawerOpen(true)}
                              >
                                  <MenuIcon/>
                              </IconButton>
                          </Hidden>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              News
                          </Typography>
                          <Button color="inherit">Login</Button>
                      </Toolbar>
                  </AppBar>
              </Box>
              <Drawer
                  anchor='left'
                  open={isDrawerOpen}
                  onClose= { () => setDrawerOpen(false)}
              >
                  {list()}
              </Drawer>
          </div>
      </>
  );
}

export default App;
