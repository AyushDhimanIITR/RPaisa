import './App.css';
import Header from './Components/Header/Header';
import Signin from './Components/Register/Login';
import Signup from './Components/Register/Registration';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/Landing page/landingpage';

function App() {
  return (
    <GoogleOAuthProvider clientId='715617945900-5d78r00q5ldrduav41u6q9be4sirtukq.apps.googleusercontent.com'>

      <div className="App">
        <BrowserRouter>
          <Routes>
              <Route index element={<LandingPage />} />
            <Route path='/' element={<Header />}>
              <Route element={<Signup />} path='signup' />
              <Route element={<Signin />} path='signin' />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
