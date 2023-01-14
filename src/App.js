import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Register/Login';
import Register from './Components/Register/Registration';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Components/Landing page/landingpage';
import { Fragment, useState } from 'react';
<<<<<<< HEAD
import Dashboard from './Components/Register/Dashboard';
import SetAuth from './Components/authorisation';
=======
// import { Dashboard } from '@mui/icons-material';
import Dashboard from './Components/Dashboard/Dashboard';

import Success from "./Components/components/Success";
import Canceled from "./Components/components/Canceled";

import './Components/css/normalize.css';
import Activity from './Components/Activity/Activity'
// import './Components/css/global.css';

>>>>>>> bccd584a542dac1cf008ee80adde8e4d6260753c
function App() {


<<<<<<< HEAD
=======
  function setAuth(boolean) {
    setIsAuthenticated(boolean);
  };

  function Logincheck() {
    if (!isAuthenticated) {
      return <Login />
    }
    else {
      <Navigate to="/dashboard" />
    }
  }
>>>>>>> bccd584a542dac1cf008ee80adde8e4d6260753c


  return (
    <Fragment>
      <GoogleOAuthProvider clientId='715617945900-5d78r00q5ldrduav41u6q9be4sirtukq.apps.googleusercontent.com'>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path='/' element={<Header />}>
<<<<<<< HEAD
              <Route exact path='/login' element = {<Login/>}/>
              <Route exact path='/register' element = {<Register /> }/>
              <Route exact path='/dashboard' element = <Dashboard /> />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
=======
                <Route exact path='/login' element={<Logincheck />} />
                <Route exact path='/register' element={<Register />} />
                <Route  path='/dashboard' element={<Dashboard />} />

              </Route> 
              <Route path="/success.html" element={<Success />} />
              <Route path="/canceled.html" element={<Canceled />} />
              
            </Routes>
          </BrowserRouter>
        </div>
      </GoogleOAuthProvider>
>>>>>>> bccd584a542dac1cf008ee80adde8e4d6260753c
    </Fragment>
  );
}

export default App;
