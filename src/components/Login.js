import React from 'react'
import { Typography, Stack, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='login__page'>
                <Stack spacing={2} direction="column">
                    <h1>Signin to your <p>PopX account</p> </h1>
                    <Typography>Best school management software in India for <p> facilitating a seamless app experience</p></Typography>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Email Address"
                        placeholder='Enter email address'
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Password"
                        placeholder='Enter Password'
                    />
                    <Button style={{ backgroundColor: "#21b6ae" }} variant="contained"><Link to='/profile'>Login</Link></Button>
                </Stack>
            </div>
        </div >
    )
}

export default Login