import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';

import { SettingsInputAntennaSharp } from '@mui/icons-material';

const Login = () => {
    
    const [inputs, setInputs] = useState({
        enrolment: "",
        password: ""
      });
    
      const { enrolment , password } = inputs;
    
      const onChange = e =>
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    
      const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { enrolment, password };
          const response = await fetch(
            "http://localhost:4000/auth/login",
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
            window.location.assign("/dashboard");
            console.log("executed");
          } else {
            {<h1>OOPS!! Something Went Wrong</h1>}
          }
        } catch (err) {
          console.error(err.message);
        }
      };


    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#000000' }
    const marginTop = { marginTop: 10 }


    // const handleSubmit=(e)=>{
    //     console.log('form');
    //     e.preventDefault();
    // }

    // const getUser = (response) => {
    //     console.log(response);
    //     const token = response.credential;
    //     var userObject = jwtDecode(token);
    //     console.log(userObject);
    //   }

    // const handleChange = () =>{
    //     console.log('handleChange');
    // }
    // const [showPassword, setShowPassword] = useState(false);
    // const handleShowPassword = () => setShowPassword(!showPassword);
    //Final

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
                <form onSubmit={onSubmitForm}>
                    
                    <TextField fullWidth   type="text"
                        name="enrolment"
                        placeholder='Enrollment Number'
                        value={enrolment}
                        onChange={e => onChange(e)} />
                    <TextField fullWidth   type="password"
                        name="password"
                        value={password}
                        placeholder = "Password"
                        onChange={e => onChange(e)}/>

                    {/* <Button  style={marginTop} type='submit' variant='contained' color='primary'>Log In</Button> */}
                    {/* <GoogleLogin onSuccess={res => {
                        console.log(res);
                    }}/> */}
                    <Button style={{margin:'1em 0'}} type='submit' variant='contained' color='primary'>Log In</Button>
                    <br/>
                    <Link to="/register">Register</Link>
                    {/* <GoogleLogin 
                    onSuccess={(response) => getUser(response)}
                    onError={() =>{
                        console.log('Login Failed');
                    }} /> */}
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;