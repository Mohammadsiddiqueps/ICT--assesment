import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Style.css';

const Add = () => {
  return (
    <div style={{paddingTop:'150px'}}>
      <div className='box'>
        <Typography variant='h3' id='head'>Add Field</Typography><br/><br/>
        <div className='add'>
        <TextField variant='outlined' fullWidth label='Blog Name' color="error"></TextField><br/><br/>
        <TextField  variant='outlined' fullWidth multiline rows={4} color="error" label='Description'></TextField><br/><br/>
        <TextField variant='outlined' fullWidth color="error"   label='Author Name'></TextField><br/><br/>
        <Button size="large" variant='contained' color="error" id='button'>Submit</Button>
        </div>
        </div>

    </div>
  )
}

export default Add