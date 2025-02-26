import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { useState } from 'react';


function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <div className="App">
      {showLogin?<Login setShowLogin = {setShowLogin}/>:<></>}
      <Router>
        <Navbar setShowLogin = {setShowLogin}/>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/cart' element = {<Cart/>}></Route>
          <Route path='/order' element = {<PlaceOrder/>}></Route>
        </Routes>
      </Router>
      <Footer/>

      
    </div>
  );
}

export default App;
