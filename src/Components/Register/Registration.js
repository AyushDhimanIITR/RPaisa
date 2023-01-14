import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {GoogleLogin} from '@react-oauth/google';
<<<<<<< HEAD
import {Outlet} from 'react-router-dom';
const Register = () => {
=======
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';

const Signup = () => {
>>>>>>> 03c1c8dc7b6fc2ce1efab50187b8f8759b075719
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#000000' }

    const [form, setForm] = useState(false)
    
    const handleSubmit=async(e) =>{
        e.preventDefault();
        console.log('first');
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => setForm({
        ...form, [e.target.name]: e.target.value
    });

    const getUser = (response) => {
        console.log(response);
        const token = response.credential;
        var userObject = jwtDecode(token);
        console.log(userObject);
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AccountCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form method='POST' onSubmit={handleSubmit}>
                    <TextField fullWidth label='Name' name='name' placeholder="Enter your name"  handleChange={handleChange} />
                    <TextField fullWidth label='Email' name='email' placeholder="Enter your email" handleChange={handleChange} />
                    
                    <TextField fullWidth label='Enrollment Number' name='enrollmentNumber' placeholder="Enter your Enrollment number" handleChange={handleChange} />
                    <TextField fullWidth name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange}  placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password' />

                    <Button style={{margin:'1em 0'}} type='submit' variant='contained' color='primary'>Sign up</Button>
                    <GoogleLogin onSuccess={(response) => getUser(response)}
                        onError={() => {
                            console.log('Login Failed');
                        }} />
                         <Grid container style={{marginTop:'1em'}} justifyContent="flex-end">
                        <Grid item>
                            <Link to='/signin' style={{textDecoration:'none'}}>
                            Already have an account? Sign In
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                    
            </Paper>
        </Grid>
    )
}

export default Register;