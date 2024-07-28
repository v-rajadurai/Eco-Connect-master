import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          justifyContent: 'space-between',
          lineHeight: '0.5rem',
          padding:"0.2%"
        }}
      >
        <Link to="/home" className="logo">
          <img
            src="/images/logo-no-background.png"
            style={{ width: '12rem' }}
          />
        </Link>
        <div
          style={{
            display: 'flex',
            gap:'20px'
          }}
        >
          <Link to="/findRagPickers">
            <Typography sx={{ fontWeight: '550' }}>Consumers</Typography>
          </Link>
          <Link to="/findRags">
            <Typography sx={{ fontWeight: '550' }}>Rag Pickers</Typography>
          </Link>
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '15%',
            }}
            > */}
          <Link to="/about">
            <Typography sx={{ fontWeight: '550' }}>About</Typography>
          </Link>
          <Link to="/support">
            <Typography sx={{ fontWeight: '550' }}>Contact</Typography>
          </Link>
          <Link to="/findUsers" sx={{ display: 'flex' }}>
            <Typography sx={{ fontWeight: '550' }}>Find Requests</Typography>
          </Link>
          
            </div>
        {/* </div> */}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
