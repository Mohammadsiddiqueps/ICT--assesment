import React, { useEffect, useState } from 'react'
import axios from 'axios'
import{Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'

const Dash = () => {
    var[user,setUsers]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        }
        )
        .catch((err)=>console.log(err))
    },[])
  return (
    <div style={{paddingTop:'40px'}}>
        <Typography variant='h1' id='field'>Field Data</Typography>
        <div className='table'>
        <TableContainer b>
            <Table id='tab' b >
                <TableHead>
                    <TableRow id='row'>
                        <TableCell className='th'> <p>Id</p></TableCell>
                        <TableCell className='th'><p>Title</p></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((value,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell className='cell'><p>{value.id}</p></TableCell>
                        <TableCell className='cell'><p>{value.title}</p></TableCell>
                    </TableRow>
                                    )})}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    </div>
  )
}

export default Dash
