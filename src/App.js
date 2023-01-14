  import './App.css';
  import {Routes,Route, Link} from 'react-router-dom';
import Header from './Components/Header/Header'; 
import Login from './Components/Header/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <>
  <nav>
    <ul>
      <li> <Link to = "/" > Header </Link></li>
      <li> <Link to = "/login"> Login </Link></li>
    </ul>
  </nav>
    
    <Routes>
    <Route path = "/" element = {<Header />} />
    <Route path = "/login" element = {<Login />} />
    <Route path = "/users/:id" element = {<Dashboard />} />
    
    </Routes>
    </>
  );
}

export default App;
