import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';






export default function SubApp() {
  return (
    <>
    <Box sx={{ flexGrow: 1    }}>
      <AppBar position="sticky" style={{backgroundColor:"#e4002b"}}>
        <Toolbar>
          
          
          <Button  style={{color:"white" ,textDecoration:"none",paddingLeft:"450px"}} >Weathertoday</Button>
          <Button style={{color:"white" ,textDecoration:"none"}}>Location</Button>
          <Button style={{color:"white" ,textDecoration:"none"}}>Facts</Button>


          <Button style={{color:"white" ,textDecoration:"none"}}>Login</Button>
          
          <Button style={{color:"white" ,textDecoration:"none"}}>Sign in</Button>
          
          
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}