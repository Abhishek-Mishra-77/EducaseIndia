import React from 'react'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className='container'>
            <div className='landing__main'>
                <Stack spacing={2} direction="column">
                    <h1>Welcome to PopX</h1>
                    <Typography>Best school management software in India for <p> facilitating a seamless app experience</p></Typography>
                    <Button variant="contained"><Link to='/signup'>Create Account</Link></Button>
                    <Button variant="contained" color="secondary"><Link to='/login'>Already Registered?Login</Link></Button>
                </Stack>
            </div>
        </div>
    )
}

export default LandingPage