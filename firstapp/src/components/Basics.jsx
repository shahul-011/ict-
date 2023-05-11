import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Basics = () => {
  return (
    <div>
        <h1>Shahul</h1>
        <br />
        <input type="text" placeholder='name'/>
        <Typography variant="h1" color="blue">Shahul</Typography>
        <br />
        <TextField label="name" variant='outlined'></TextField>
        <br /><br />
        <TextField label="age" variant='filled'></TextField>
        <br /><br />
        <TextField label="email " variant='standard'></TextField>
        <br />
        <Button variant="text" color='success'>text</Button>
        <br /><br />
        <Button variant="contained"color='secondary'>contained</Button>
        <br /><br />
        <Button variant="outlined" color='error'>outlined</Button>
        

    </div>

  )
}

export default Basics