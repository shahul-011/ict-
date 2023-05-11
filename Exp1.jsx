import React, { useState } from 'react'
import {TextField,Typography } from '@mui/material'

const Exp1 = () => {
    var [val1,setVal1]=useState();
    var [val2,setVal2]=useState();
    const readVal1 = (e) =>{
        setVal1(e.target.value)
    }
    const readVal2 =(e) =>{
        setVal2(e.target.value)
    }
  return (
    <div>
        <Typography variant='h3'>Details</Typography>
        <br /><br />
        <TextField label="name" onChange={readVal1}></TextField>
        <br /><br />
        {val1} <br /><br />
        <TextField label="age" onChange={readVal2}></TextField>
        <br /><br />
        {val2}
    </div>
  )
}

export default Exp1