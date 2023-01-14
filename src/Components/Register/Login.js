import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';

const Signin = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#000000' }
    // const marginTop = { marginTop: 10 }

    const handleSubmit=(e)=>{
        console.log('form');
        e.preventDefault();
    }

    const getUser = (response) => {
        console.log(response);
        const token = response.credential;
        var userObject = jwtDecode(token);
        console.log(userObject);
      }

    const handleChange = () =>{
        console.log('handleChange');
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);


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
                <form onSubmit={handleSubmit}>
                    
                    <TextField fullWidth label='Email' placeholder="Enter your email" handleChange={handleChange} />
                    <TextField fullWidth label='Password' placeholder="Enter your password" type={showPassword? 'text' : 'password'}/>

                    <Button style={{margin:'1em 0'}} type='submit' variant='contained' color='primary'>Sign In</Button>
                    <GoogleLogin 
                    onSuccess={(response) => getUser(response)}
                    onError={() =>{
                        console.log('Login Failed');
                    }} />
                </form>
            </Paper>
        </Grid>
    )
}

export default Signin;