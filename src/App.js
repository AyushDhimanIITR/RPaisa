import './App.css';
import Header from './Components/Header/Header';
import Signin from './Components/Register/Login';
import Signup from './Components/Register/Registration';
// import Form from './Components/Register/Register';
import {GoogleOAuthProvider} from '@react-oauth/google';

function App() {
  return (
<GoogleOAuthProvider clientId='715617945900-5d78r00q5ldrduav41u6q9be4sirtukq.apps.googleusercontent.com'>

<div className="App">
  
      <Header />
      {/* <Signup /> */}
      <Signin />
    </div>
</GoogleOAuthProvider>
  );
}

export default App;
