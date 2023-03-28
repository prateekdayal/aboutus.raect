import React from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-page' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;