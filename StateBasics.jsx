import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("Class");
    var [data,setData] = useState()
    const changeName = () =>{
        console.log("clicked");
        setPname(data)
    }
    const readValue = (e) =>{
        setData(e.target.value);
        console.log(data)
    }
  return (
    <div style={{padding:'100px'}}>
        <Typography variant='h3'>Welcome {pname}</Typography><br />
        <TextField label='name' variant='outlined' onChange={readValue}></TextField>
        <br /><br />
        <Button variant='contained'onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasics