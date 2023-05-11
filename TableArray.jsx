import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableArray = () => {
    var [names,setNames]=useState([{name:'shahul',age:19},{name:'nakul',age:19}])
  return (
    <div  style={{padding:'100px'}}>
        <Typography variant='h3'>Table and Array</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red'}}>Name</TableCell>
                        <TableCell style={{color:'red'}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((values,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{values.name}</TableCell>
                                <TableCell>{values.age}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray