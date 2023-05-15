import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:'150px'}}>
        <Typography variant='h1'>Add Field</Typography><br/><br/>
        <TextField variant='outlined' placeholder='Blog Name'></TextField><br/><br/>
        <TextField variant='outlined' placeholder='Description'></TextField><br/><br/>
        <TextField variant='outlined' placeholder='Author Name'></TextField><br/><br/>
        <Button variant='text'>Submit</Button>


    </div>
  )
}

export default Add