import React from 'react'
import { Typography, Stack, Button, TextField, FormControlLabel, RadioGroup, Radio } from '@mui/material'
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className='container'>
      <div className='signup__page'>
        <Stack spacing={2} direction="column">
          <h1>Create your <p>PopX account</p> </h1>
          <TextField
            id="outlined-multiline-flexible"
            label="Full Name"
            type='text'
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Phone Number"
            type='number'
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Email address"
            type='email'
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            type='text'
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Company name"
            type='text'
          />
          <div>
            <Typography>Are you an Agency?</Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>
          <Button style={{ backgroundColor: "#21b6ae" }} variant="contained"><Link to='/profile'>Create Account</Link></Button>
        </Stack>
      </div>
    </div >
  )
}

export default SignUp