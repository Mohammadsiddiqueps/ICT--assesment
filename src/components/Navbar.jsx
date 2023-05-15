import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>Navbar
        <AppBar>
            <Toolbar>
            <Typography sx={{flexGrow:1}} align='center'>DashBoard</Typography>
            <Button> <Link style={{color:'white'}} to={'/'}>Enter Data</Link></Button> 
            <Button> <Link style={{color:'white'}} to={'/view'}>view</Link></Button> 
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar