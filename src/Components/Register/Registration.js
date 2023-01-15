import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {GoogleLogin} from '@react-oauth/google';
// import { toast } from "react-toastify";

import { Link, Routes,Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Dashboard, SettingsInputAntennaSharp } from '@mui/icons-material';
import SetAuth from '../authorisation';

const Register = ({setAuth}) => {
    // connecting req.body to backend


    const [inputs, setInputs] = useState({
        name: "",
        enrolment: "",
        email: "",
        password: "",
        
      });
    
      const { name,enrolment,email, password,  } = inputs;
    
      const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    
      const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { name,enrolment,email, password, };
          const response = await fetch(
            "http://localhost:4000/auth/register",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );
          const parseRes = await response.json();
          console.log(parseRes);
          if (parseRes) {
            localStorage.setItem("token", parseRes);
            window.location.assign("/login");
            console.log("executed")
            
            // toast.success("Register Successfully");
          } else {
            // <SetAuth value = {false}/>
            {<h1> OOPS!! Something Went Wrong</h1>}
            // toast.error(parseRes);
          }
        }

          
          

          catch (err) {
            console.error(err);
          }
        };






    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#000000' }

    
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
                <form onSubmit={onSubmitForm}>
                    <TextField fullWidth  value={name} placeholder="Your Name" onChange={e => onChange(e)} name='name' />
                    <TextField fullWidth name="email" type = "text"
                    value={email}
                    placeholder="email"
                    onChange={e => onChange(e)} />
                    
                    <TextField fullWidth  name='enrolment' type = 'text'value={enrolment} placeholder="Enter your Enrollment number"  onChange={e => onChange(e)} />
                    <TextField fullWidth  type="password"
                    name="password"
                    value={password}
                    
                    onChange={e => onChange(e)}  placeholder="Enter your password"/>
                    

                    <Button style={{margin:'1em 0'}} type='submit' variant='contained' color='primary'>Sign up</Button>
                    {/* <GoogleLogin onSuccess={(response) => getUser(response)}
                        onError={() => {
                            console.log('Login Failed');
                        }} /> */}
                         <Grid container style={{marginTop:'1em'}} justifyContent="flex-end">
                        <Grid item>
<<<<<<< HEAD
                        <br/>
=======
>>>>>>> bccd584a542dac1cf008ee80adde8e4d6260753c
                            <Link to='/login' style={{textDecoration:'none'}}>
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