//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Index from './Pages/HomeScreen/Index';
import NavBar from './Pages/Homes/NavBar';

function App() {
  return (
    <div className="App">
   
   <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />} ></Route>
        <Route path='*' element={<div>404 Not Found </div>} ></Route>
      </Routes>
    </div>
   </Router>
    </div>
  );
}

export default App;
