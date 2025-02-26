import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Orders from './pages/Orders/Orders';
import Add from './pages/Add/Add';
import Lists from './pages/Lists/Lists';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer/>
        <Navbar/>
        <hr />
        <div className="app-content">
          <Sidebar/>
          <Routes>
            <Route path='/add' element = {<Add/>}></Route>
            <Route path='/list' element = {<Lists/>}></Route>
            <Route path='/orders' element = {<Orders/>}></Route>
          </Routes>
        </div>
      </Router>
      


      
    </div>
  );
}

export default App;
