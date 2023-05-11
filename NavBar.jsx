import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography align='left' sx={{flexGrow:1}}>NAKUL</Typography>
                <Button ><Link to={'/'} style={{color:'white'}}  >state</Link> </Button>
                <Button ><Link to={'/table'} style={{color:'white'}}  >table</Link></Button>
                <Button ><Link to={'/axios'} style={{color:'white'}}  >view</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar