import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Login from './Components/Login';
import Contact from './Components/Contact';

function App() {
  return (
<div className="container">
<NavBar/>
<div className='container'>
<Routes>
{<Route path='/about' element={<Home/>}/>
/* <Route path='/' element={<h1>hey</h1>}/>

<Route path='/contact' element={<Contact/>}/> */}
<Route path='/login' element={<Login/>}/>
</Routes>
</div>
</div>
  );
}

export default App;
