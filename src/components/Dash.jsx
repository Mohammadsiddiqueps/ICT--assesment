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
    <div style={{paddingTop:'150px'}}>
        <Typography variant='h1'>project</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((value,index)=>{
                return(
                    <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.title}</TableCell>
                    </TableRow>
                                    )})}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Dash