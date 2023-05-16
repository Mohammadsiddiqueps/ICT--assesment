import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css';


const Navbar = () => {
  return (
    <div>
        <AppBar position="static" id='bar' style={{color: "#E7E8D1", backgroundColor:'#F96167'}}>
            <Toolbar variant="dense">
            <Typography sx={{flexGrow:10}} align='center' id='dash'>DashBoard</Typography>
            <Button variant='text'> <Link  className='btn' to={'/'}>Enter Data</Link></Button> 
            <Button variant='text'> <Link className='btn'  to={'/view'}>view</Link></Button> 
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar