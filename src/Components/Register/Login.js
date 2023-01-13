import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {GoogleLogin } from '@react-oauth/google';

const Signin = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#000000' }
    const marginTop = { marginTop: 10 }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                    <br />
                </Grid>
                <form>
                    
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    {/* <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>

                    <Button style={marginTop} type='submit' variant='contained' color='primary'>Sign In</Button>
                    <GoogleLogin onSuccess={res => {
                        console.log(res);
                    }}
                    onError={() =>{
                        console.log('Login Failed');
                    }} />
                </form>

            </Paper>
        </Grid>
    )
}

export default Signin;