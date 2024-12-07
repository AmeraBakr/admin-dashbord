import * as React from 'react';

import Box from '@mui/material/Box';


import { DrawerHeader } from "./assets/components/SideBar";

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import TopBar from "./assets/components/TopBar"
import SideBar from "./assets/components/SideBar"
import {getDesginTokens} from "./themes"
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;




export default function MiniDrawer() {
  
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const[ mode, setMode]= React.useState("dark");
  const theme = React.useMemo(()=> createTheme(getDesginTokens(mode)),[mode]);


  return (
    

    <ThemeProvider theme={theme} disableTransitionOnChange>

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode}/>
      <SideBar open={open} handleDrawerClose={handleDrawerClose}/>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader/>
        <Outlet/>
      
      </Box>
    </Box>
    </ThemeProvider>
  );
}
