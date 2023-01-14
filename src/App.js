import './App.css';
import Header from './Components/Header/Header';
import Login from './Components/Register/Login';
import Register from './Components/Register/Registration';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Components/Landing page/landingpage';
import { Fragment, useState } from 'react';
import { Dashboard } from '@mui/icons-material';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

 function setAuth (boolean){
    setIsAuthenticated(boolean);
  };

  function Logincheck(){
    if (!isAuthenticated){
      return <Login/>
    }
    else{
      <Navigate to = "/dashboard"/>
    }
  }


  return (
    <Fragment>
    <GoogleOAuthProvider clientId='715617945900-5d78r00q5ldrduav41u6q9be4sirtukq.apps.googleusercontent.com'>
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
              <Route path='/' element={<Header />}>
              <Route exact path='/login' element = {<Logincheck/>}/>
              <Route exact path='/register' element = {<Register /> }/>
              <Route exact path='/dashboard' element = <Dashboard /> />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
    </Fragment>
  );
}

export default App;
