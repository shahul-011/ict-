import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const Eg2 = () => {
    var [val,setVal]=useState({id:'',age:''});
    const inputHandler = (e)=>{
        const{name,value}=e.target
        setVal((val)=>({...val,[name]:value}))
    }
  return (
    <div>
        <br />
        <TextField label='id' name='id' value={val.id} onChange={inputHandler}></TextField>
        <br /><br />
        <TextField label='age' name='age' value={val.age} onChange={inputHandler}></TextField>
        <br /><br />
        
        <br />
        <TextField label='' name='age' value={val.age} onChange={inputHandler}></TextField>
        <Typography variant='h2'>{val.id}{val.age}</Typography>
    </div>
  )
}

export default Eg2